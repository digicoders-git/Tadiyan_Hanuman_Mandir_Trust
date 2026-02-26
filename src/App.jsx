import { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import { initPlugins } from "./utils/initPlugins";
import ScrollToTop from "./ScrollToTop";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Video = lazy(() => import("./pages/Video"));
const Donation = lazy(() => import("./pages/Donation"));
const Intro = lazy(() => import("./pages/Intro"));

// Enhanced Om Icon Preloader
const PageLoader = () => (
  <>
    <style>
      {`
        .preloader-v2 {
          position: fixed;
          inset: 0;
          background: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 999999;
        }

        .loader-content {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .om-box {
          position: relative;
          width: 120px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .om-icon {
          font-size: 4rem;
          color: #ff6b35;
          z-index: 2;
          animation: pulseOm 2s ease-in-out infinite;
        }

        .ring-animation {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 3px solid transparent;
          border-top-color: #ff6b35;
          border-bottom-color: #f7931e;
          border-radius: 50%;
          animation: spinRing 1.5s linear infinite;
        }

        .ring-bg {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 3px solid #fff5f2;
          border-radius: 50%;
        }

        .loader-text {
          margin-top: 25px;
          font-family: 'Poppins', sans-serif;
          font-size: 1.2rem;
          color: #333;
          font-weight: 600;
          letter-spacing: 2px;
          animation: fadeText 1.5s ease-in-out infinite;
        }

        @keyframes pulseOm {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.15); opacity: 0.8; }
        }

        @keyframes spinRing {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes fadeText {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}
    </style>
    <div className="preloader-v2">
      <div className="loader-content">
        <div className="om-box">
          <div className="ring-bg"></div>
          <div className="ring-animation"></div>
          <i className="fas fa-om om-icon"></i>
        </div>
        <div className="loader-text">जय श्री राम</div>
      </div>
    </div>
  </>
);

// Global audio instance
let globalAudio = null;

function App() {
  const [appLoading, setAppLoading] = useState(true);
  const location = useLocation();

  // Handle Initial Load and Route Changes
  useEffect(() => {
    setAppLoading(true);

    // Smooth transition delay
    const loaderTimer = setTimeout(() => {
      setAppLoading(false);
    }, 1200); // 1.2s for route changes

    return () => clearTimeout(loaderTimer);
  }, [location.pathname]);

  useEffect(() => {
    // Small timeout to ensure DOM is ready for jQuery plugins
    const timer = setTimeout(() => {
      initPlugins();
    }, 100);
    return () => clearTimeout(timer);
  }, [location]);

  useEffect(() => {
    // Only start audio when not on intro page and audio not already created
    if (location.pathname !== "/" && !globalAudio) {
      globalAudio = new Audio("/hanumanChalisa.mp3");
      globalAudio.loop = true;
      globalAudio.volume = 0.5;

      const playAudio = () => {
        globalAudio
          .play()
          .catch((e) => console.log("Audio autoplay blocked:", e));
      };

      // Try to play immediately
      playAudio();

      // Also try on first user interaction
      const handleFirstInteraction = () => {
        playAudio();
        document.removeEventListener("click", handleFirstInteraction);
        document.removeEventListener("touchstart", handleFirstInteraction);
      };

      document.addEventListener("click", handleFirstInteraction);
      document.addEventListener("touchstart", handleFirstInteraction);
    }
  }, [location.pathname]);

  if (appLoading) {
    return <PageLoader />;
  }

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Intro />} />

          <Route
            path="/home"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route path="/main_index" element={<Navigate to="/home" replace />} />

          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route path="/about_us" element={<Navigate to="/about" replace />} />

          <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
          <Route
            path="/contact-us"
            element={<Navigate to="/contact" replace />}
          />

          <Route
            path="/gallery"
            element={
              <Layout>
                <Gallery />
              </Layout>
            }
          />

          <Route
            path="/video"
            element={
              <Layout>
                <Video />
              </Layout>
            }
          />

          <Route
            path="/donation"
            element={
              <Layout>
                <Donation />
              </Layout>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
