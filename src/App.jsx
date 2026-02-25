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

// Loading component
const PageLoader = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      fontSize: "1.2rem",
      color: "#ff6b35",
      fontWeight: "bold",
    }}
  >
    लोड हो रहा है...
  </div>
);

// Global audio instance
let globalAudio = null;

function App() {
  const location = useLocation();

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
