import React, { useState, memo, useMemo } from "react";

// Import all images from the gallery directories
const imageModules = import.meta.glob(
  "../assets/gallery/**/*.{png,jpg,jpeg,JPG,PNG}",
  {
    eager: true,
  },
);

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("shivrameshwaram");
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // Group images by their folder name
  const galleryData = useMemo(() => {
    const data = {
      shivrameshwaram: {
        title: "शिवरामेश्वरम देवालय",
        content: `भारत की पावन भूमि पर स्थित शिवरामेश्वरम देवालय एक ऐसा अलौकिक और अद्वितीय मंदिर है, जिसे भारत का प्रथम द्वादश ज्योतिर्लिंग मंदिर माना जाता है। यहाँ सभी द्वादश ज्योतिर्लिंग विशाल नर्मदेश्वर पत्थरों से निर्मित होकर अपने वास्तविक स्वरूप में विराजमान हैं, जो भक्तों को एक साथ द्वादश ज्योतिर्लिंग के दर्शन का दिव्य सौभाग्य प्रदान करते हैं।<br/><br/>
इस देवालय की सबसे विशेष और आध्यात्मिक विशेषता यह है कि प्रत्येक ज्योतिर्लिंग के नीचे संबंधित ज्योतिर्लिंग धाम की पवित्र मिट्टी और जल को विधिपूर्वक स्थापित किया गया है। जैसे काशी विश्वनाथ के ज्योतिर्लिंग के नीचे काशी धाम की पावन मिट्टी और जल स्थापित है, उसी प्रकार सभी द्वादश ज्योतिर्लिंगों के नीचे उनके मूल धामों का जल और मिट्टी श्रद्धापूर्वक विराजित किए गए हैं।<br/><br/>
देवालय के मध्य स्थित मुख्य शिवलिंग में बारहों ज्योतिर्लिंगों की पवित्र मिट्टी और जल को सम्मिलित कर दिव्य रूप से प्रतिष्ठित किया गया है, जो इसे और भी अधिक आध्यात्मिक तथा अद्वितीय बनाता है। यह केवल एक मंदिर नहीं, बल्कि सम्पूर्ण द्वादश ज्योतिर्लिंगों की सामूहिक दिव्यता का केंद्र है।<br/><br/>
साथ ही, भगवान शंकर के परम उपासक भगवान श्रीराम भी उनके सम्मुख स्थापित हैं, जो भक्ति, समर्पण और धर्म की अखंड परंपरा का प्रतीक हैं।<br/><br/>
निस्संदेह, शिवरामेश्वरम देवालय भारत का पहला ऐसा दिव्य धाम है जहाँ द्वादश ज्योतिर्लिंग अपनी पूर्ण महिमा, पवित्रता और वास्तविक आध्यात्मिक तत्वों के साथ एक ही स्थान पर भक्तों को दर्शन देते हैं — यह स्थान श्रद्धा, भक्ति और शिवत्व का अद्वितीय संगम है। 🙏✨`,
        images: [],
      },
      trust: {
        title: "टड़ियन हनुमान मंदिर “ट्रस्ट”",
        content: `टड़ियन हनुमान मंदिर “ट्रस्ट” की द्वारा प्रभु के भोग हेतु प्रतिदिन शुद्ध एवं सात्विक प्रसाद की विशेष व्यवस्था की जाती है। इस ट्रस्ट का मुख्य संकल्प यही है कि सभी भक्तों को पूर्ण रूप से स्वच्छ, पवित्र और शुद्ध प्रसाद प्राप्त हो।<br/><br/>
हमारे प्रत्येक सेवक (वर्कर) प्रसाद निर्माण के समय शुद्धता का विशेष ध्यान रखते हैं — हाथों में ग्लव्स, सिर पर कैप तथा ट्रस्ट की निर्धारित प्रसादन टी-शर्ट पहनकर वे पूरी श्रद्धा और स्वच्छता के साथ प्रभु की सेवा में प्रसाद तैयार करते हैं।
यह प्रसाद प्रतिदिन भगवान के भोग में अर्पित किया जाता है और तत्पश्चात भक्तों में वितरित किया जाता है, ताकि सभी श्रद्धालु शुद्ध, पावन और दिव्य प्रसाद का लाभ प्राप्त कर सकें।<br/><br/>
आप सभी भक्तजन प्रभु का शुद्ध प्रसाद ग्रहण करें और टड़ियन हनुमान मंदिर “ट्रस्ट” की इस पावन सेवा में अपनी आस्था बनाए रखें।<br/>
जय श्री राम । 🙏🌸`,
        images: [],
      },
      jyotirling: {
        title: "ज्योतिर्लिंग",
        content: `नर्मदेश्वर पत्थरों से अपने यथार्थ स्वरूप में निर्मित द्वादश ज्योतिर्लिंग देवालय टड़ियन हनुमान मंदिर 'ट्रस्ट' ई ब्लॉक राजाजीपुरम लखनऊ उत्तर प्रदेश l`,
        images: [],
      },
    };

    // Categorize images based on folder path
    Object.entries(imageModules).forEach(([path, module]) => {
      if (path.includes("Shivrameshwaram")) {
        data.shivrameshwaram.images.push(module.default);
      } else if (path.includes("टड़ियन हनुमान मंदिर “ट्रस्ट”")) {
        data.trust.images.push(module.default);
      } else if (path.includes("ज्योतिर्लिंग")) {
        data.jyotirling.images.push(module.default);
      }
    });

    return data;
  }, []);

  const currentImages = galleryData[activeTab].images;

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex(
      (prev) => (prev - 1 + currentImages.length) % currentImages.length,
    );
  };

  return (
    <>
      <style>
        {`
                /* Modern Banner Styles (Matched exactly to Video.jsx) */
                .modern-banner {
                    position: relative;
                    height: 70vh;
                    overflow: hidden;
                    background-image: url('/assets/img/events/37.jpg');
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    display: flex;
                    align-items: center;
                }
                
                .banner-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,0.3);
                }
                
                .banner-content {
                    position: relative;
                    z-index: 2;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: flex-end;
                    padding-bottom: 20px;
                }
                
                .banner-text-box {
                    background: transparent;
                    padding: 40px 45px;
                    width: 100%;
                    text-align: center;
                    transform: translateY(30px);
                    opacity: 0;
                    animation: slideUpFade 1s ease-out 0.3s forwards;
                }
                
                @keyframes slideUpFade {
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
                
                .banner-title {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: white;
                    margin-bottom: 20px;
                    line-height: 1.2;
                    text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
                }
                
                .banner-description {
                    font-size: 1.1rem;
                    max-width: 800px;
                    margin: 0 auto;
                }

                /* Enhanced Professional Gallery Section */
                .gallery-section {
                    padding: 100px 0;
                    background: #fbfbfd;
                }

                .section-header {
                    text-align: center;
                    margin-bottom: 60px;
                }

                .tab-nav-wrapper {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 50px;
                    width: 100%;
                    padding: 0 15px;
                }

                .tab-navigation {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    background: #fff;
                    padding: 8px;
                    border-radius: 12px;
                    box-shadow: 0 5px 25px rgba(0,0,0,0.05);
                    border: 1px solid #eee;
                    gap: 8px;
                    max-width: 100%;
                }

                .tab-btn {
                    padding: 12px 24px;
                    border: none;
                    background: transparent;
                    color: #777;
                    font-weight: 600;
                    font-size: 0.95rem;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-align: center;
                }

                @media (max-width: 576px) {
                    .tab-navigation {
                        width: 100%;
                        border-radius: 15px;
                        padding: 6px;
                    }
                    .tab-btn {
                        flex: 1 1 calc(50% - 8px);
                        padding: 10px 12px;
                        font-size: 0.85rem;
                    }
                    /* If there's an odd number of items, the last one can take full width */
                    .tab-btn:last-child:nth-child(odd) {
                        flex: 1 1 100%;
                    }
                }

                .tab-btn:hover {
                    color: #ff6b35;
                    background: #fff5f2;
                }

                .tab-btn.active {
                    background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
                    color: white;
                    box-shadow: 0 4px 15px rgba(255, 107, 53, 0.2);
                }

                /* Content Presentation */
                .premium-content-card {
                    background: #fff;
                    border-radius: 24px;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.03);
                    border: 1px solid #f0f0f0;
                    padding: 50px;
                    margin-bottom: 60px;
                    position: relative;
                }

                .card-accent {
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 80px;
                    height: 4px;
                    background: linear-gradient(90deg, #ff6b35, #f7931e);
                    border-radius: 0 0 4px 4px;
                }

                .content-header {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 15px;
                    margin-bottom: 30px;
                }

                .content-header i {
                    font-size: 2rem;
                    background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .content-header h2 {
                    font-size: 2.2rem;
                    color: #1a1a1a;
                    font-weight: 800;
                    margin: 0;
                }

                .content-body {
                    font-size: 1.15rem;
                    line-height: 2;
                    color: #4a4a4a;
                    text-align: center;
                    max-width: 1000px;
                    margin: 0 auto;
                }

                /* Masonry-like Grid */
                .gallery-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
                    gap: 25px;
                }

                .gallery-item {
                    position: relative;
                    height: 300px;
                    border-radius: 20px;
                    overflow: hidden;
                    cursor: pointer;
                    background: #eee;
                }

                .gallery-item img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .gallery-item:hover img {
                    transform: scale(1.1) rotate(1deg);
                }

                .overlay-content {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transition: all 0.3s ease;
                }

                .gallery-item:hover .overlay-content {
                    opacity: 1;
                }

                .glass-circle {
                    width: 65px;
                    height: 65px;
                    background: rgba(255, 255, 255, 0.2);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #fff;
                    font-size: 1.5rem;
                    transform: translateY(20px);
                    transition: all 0.4s ease;
                }

                .gallery-item:hover .glass-circle {
                    transform: translateY(0);
                }

                /* Lightbox Enhancements - Fixed Controls */
                .lightbox {
                    position: fixed;
                    inset: 0;
                    background: rgba(10, 10, 10, 0.98);
                    z-index: 99999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    user-select: none;
                }

                .lb-close {
                    position: fixed;
                    top: 30px;
                    right: 30px;
                    color: #fff;
                    background: rgba(255, 255, 255, 0.1);
                    border: none;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    font-size: 24px;
                    cursor: pointer;
                    transition: all 0.3s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 100001;
                }

                .lb-close:hover {
                    background: #ff6b35;
                    transform: rotate(90deg);
                }

                .nav-control {
                    position: fixed;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    color: #fff;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                    transition: all 0.3s;
                    z-index: 100001;
                }

                .nav-control:hover {
                    background: #ff6b35;
                    border-color: #ff6b35;
                }

                .prev-ctrl { left: 40px; }
                .next-ctrl { right: 40px; }

                .lightbox-image-container {
                    position: relative;
                    max-width: 80vw;
                    max-height: 80vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    animation: zoomIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .lightbox-img {
                    max-width: 100%;
                    max-height: 80vh;
                    border-radius: 8px;
                    box-shadow: 0 30px 60px rgba(0,0,0,0.5);
                    object-fit: contain;
                }

                @media (max-width: 992px) {
                    .nav-control {
                        width: 50px;
                        height: 50px;
                        background: rgba(0, 0, 0, 0.5);
                    }
                    .prev-ctrl { left: 15px; }
                    .next-ctrl { right: 15px; }
                    .lb-close { top: 20px; right: 20px; }
                }

                @media (max-width: 576px) {
                    .lightbox-image-container {
                        max-width: 95vw;
                    }
                    .nav-control {
                        top: auto;
                        bottom: 40px;
                        transform: none;
                    }
                    .prev-ctrl { left: 30%; transform: translateX(-50%); }
                    .next-ctrl { right: 30%; transform: translateX(50%); }
                }

                @keyframes zoomIn {
                    from { transform: scale(0.9); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
                `}
      </style>

      {/* Hero Section - Exact Match to Video.jsx */}
      <div className="modern-banner">
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="banner-text-box">
                  <h3 className="banner-title">पिक्चर गैलरी</h3>
                  <p className="banner-description" style={{ color: "#fff" }}>
                    श्री टड़ियन हनुमान मन्दिर की खूबसूरत तस्वीरें। देखिए हमारे
                    मन्दिर के विभिन्न उत्सवों, पूजा-अर्चना, आरती और विशेष अवसरों
                    की यादगार तस्वीरें।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Main Content */}
      <section className="gallery-section">
        <div className="container">
          {/* Tabs Positioning */}
          <div className="tab-nav-wrapper">
            <div className="tab-navigation">
              {Object.keys(galleryData).map((key) => (
                <button
                  key={key}
                  className={`tab-btn ${activeTab === key ? "active" : ""}`}
                  onClick={() => setActiveTab(key)}
                >
                  {galleryData[key].title}
                </button>
              ))}
            </div>
          </div>

          {/* Premium Content Box */}
          <div className="premium-content-card">
            <div className="card-accent"></div>
            <div className="content-header">
              <i
                className={
                  activeTab === "shivrameshwaram"
                    ? "fas fa-om"
                    : activeTab === "trust"
                      ? "fas fa-hand-holding-heart"
                      : "fas fa-dharmachakra"
                }
              ></i>
              <h2>{galleryData[activeTab].title}</h2>
            </div>
            <div
              className="content-body"
              dangerouslySetInnerHTML={{
                __html: galleryData[activeTab].content,
              }}
            />
          </div>

          {/* Image Grid */}
          <div className="gallery-grid">
            {currentImages.map((img, index) => (
              <div
                key={index}
                className="gallery-item"
                onClick={() => openLightbox(index)}
              >
                <img src={img} alt={`gallery-${index}`} loading="lazy" />
                <div className="overlay-content">
                  <div className="glass-circle">
                    <i className="fas fa-expand-alt"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Lightbox */}
      {selectedImageIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lb-close" onClick={closeLightbox} title="Close">
            <i className="fas fa-times"></i>
          </button>

          <button
            className="nav-control prev-ctrl"
            onClick={prevImage}
            title="Previous"
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <div
            className="lightbox-image-container"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImages[selectedImageIndex]}
              className="lightbox-img"
              alt="fullscreen"
            />
          </div>

          <button
            className="nav-control next-ctrl"
            onClick={nextImage}
            title="Next"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      )}
    </>
  );
};

export default memo(Gallery);
