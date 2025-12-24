import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Home = () => {
  return (
    <>
      <style>
        {`
                #v {
                    height: 300px;
                    border: 5px solid red;
                    padding: 5px;
                }
                #pic {
                    height: 350px;
                    border: 5px solid red;
                    padding: 10px;
                }
                #b {
                    height: 450px;
                    border: 5px solid red;
                    border-radius: 50px 0px 50px 0px;
                }
                
                /* Modern Banner Styles */
                .modern-banner {
                    position: relative;
                    height: 100vh;
                    overflow: hidden;
                    background-image: url('/assets/img/44.jpg');
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
                    background: linear-gradient(180deg, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.5) 100%);
                }
                
                .banner-content {
                    position: relative;
                    z-index: 2;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: flex-end;
                    padding-bottom: 80px;
                }
                
                .banner-text-box {
                    background: transparent;
                    backdrop-filter: none;
                    padding: 0px 45px;
                    border-radius: 0;
                    box-shadow: none;
                    border: none;
                    transform: translateY(30px);
                    opacity: 0;
                    animation: slideUpFade 1s ease-out 0.3s forwards;
                    width: 100%;
                    text-align: center;
                    text-shadow: 10px 2px 2px rgba(0,0,0,1)
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
                    text-shadow:3px 3px 10px rgba(0,0,0,1);
                }
                
                .banner-description {
                    font-size: 1.1rem;
                    line-height: 1.7;
                    color: white;
                    margin: 0;
                    font-weight: 400;
                    text-shadow:3px 3px 10px rgba(0,0,0,1);
                }
                
                /* Modern Image Slider Styles */
                .modern-image-slider {
                    position: relative;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
                    background: white;
                }
                
                .image-swiper {
                    width: 100%;
                    height: 400px;
                }
                
                .image-slide {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    overflow: hidden;
                }
                
                .image-slide img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.3s ease;
                }
                
                .image-slide:hover img {
                    transform: scale(1.05);
                }
                
                .image-prev, .image-next {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    background: rgba(255,255,255,0.9);
                    border: none;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    z-index: 10;
                    opacity: 0;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                }
                
                .modern-image-slider:hover .image-prev,
                .modern-image-slider:hover .image-next {
                    opacity: 1;
                }
                
                .image-prev:hover, .image-next:hover {
                    background: white;
                    transform: translateY(-50%) scale(1.1);
                }
                
                .image-prev {
                    left: 15px;
                }
                
                .image-next {
                    right: 15px;
                }
                
                .image-prev i, .image-next i {
                    color: #ff6b35;
                    font-size: 14px;
                }
                
                .image-pagination {
                    position: absolute;
                    bottom: 15px;
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 10;
                }
                
                .image-pagination .swiper-pagination-bullet {
                    width: 8px;
                    height: 8px;
                    background: rgba(255,255,255,0.7);
                    opacity: 1;
                    margin: 0 4px;
                    transition: all 0.3s ease;
                }
                
                .image-pagination .swiper-pagination-bullet-active {
                    background: #ff6b35;
                    transform: scale(1.3);
                }
                
                /* Responsive Design */
                @media (max-width: 768px) {
                    .banner-title {
                        font-size: 2.2rem;
                    }
                    
                    .banner-text-box {
                        padding: 30px 25px;
                        margin: 0 15px;
                    }
                    
                    .banner-prev, .banner-next {
                        width: 50px;
                        height: 50px;
                    }
                    
                    .banner-prev {
                        left: 20px;
                    }
                    
                    .banner-next {
                        right: 20px;
                    }
                    
                    .image-swiper {
                        height: 350px;
                    }
                }
                
                @media (max-width: 480px) {
                    .banner-title {
                        font-size: 1.8rem;
                    }
                    
                    .banner-description {
                        font-size: 1rem;
                    }
                    
                    .banner-text-box {
                        padding: 25px 20px;
                    }
                }
                
                /* Modern About Section Styles */
                .modern-about-section {
                    padding: 80px 0;
                    background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
                }
                
                .modern-image-container {
                    position: relative;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                    transform: translateY(0);
                    transition: all 0.3s ease;
                }
                
                .modern-image-container:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 30px 60px rgba(0,0,0,0.15);
                }
                
                .image-wrapper {
                    position: relative;
                    overflow: hidden;
                    border-radius: 20px;
                }
                
                .about-image {
                    width: 100%;
                    height: 500px;
                    object-fit: cover;
                    transition: transform 0.3s ease;
                }
                
                .image-wrapper:hover .about-image {
                    transform: scale(1.05);
                }
                
                .image-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0,0,0,0.1);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                
                .image-wrapper:hover .image-overlay {
                    opacity: 1;
                }
                
                .modern-content-box {
                    padding: 40px;
                    background: white;
                    border-radius: 20px;
                    box-shadow: 0 15px 35px rgba(0,0,0,0.08);
                    border: 1px solid rgba(255,255,255,0.2);
                    position: relative;
                    overflow: hidden;
                }
                
                .modern-content-box::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 4px;
                    height: 100%;
                    background: linear-gradient(45deg, #ff6b35, #f7931e);
                }
                
                .modern-title {
                    font-size: 2.2rem;
                    font-weight: 700;
                    color: #333;
                    margin-bottom: 15px;
                    line-height: 1.3;
                }
                
                .title-underline {
                    width: 60px;
                    height: 4px;
                    background: linear-gradient(45deg, #ff6b35, #f7931e);
                    border-radius: 2px;
                    margin-bottom: 30px;
                }
                
                .modern-paragraph {
                    font-size: 1.1rem;
                    line-height: 1.8;
                    color: #555;
                    margin-bottom: 20px;
                    text-align: justify;
                    position: relative;
                    padding-left: 20px;
                }
                
                // .modern-paragraph::before {
                //     content: '';
                //     position: absolute;
                //     left: 0;
                //     top: 12px;
                //     width: 6px;
                //     height: 6px;
                //     background: linear-gradient(45deg, #ff6b35, #f7931e);
                //     border-radius: 50%;
                // }
                
                .modern-paragraph:last-child {
                    margin-bottom: 0;
                }
                
                /* Modern Volunteers Section Styles */
                .modern-volunteers-section {
                    padding: 80px 0;
                    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
                }
                
                .section-header {
                    margin-bottom: 60px;
                }
                
                .section-title {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: #333;
                    margin-bottom: 20px;
                    position: relative;
                    display: inline-block;
                }
                
                .section-title::after {
                    content: '';
                    position: absolute;
                    bottom: -10px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 50%;
                    height: 4px;
                    background: linear-gradient(45deg, #ff6b35, #f7931e);
                    border-radius: 2px;
                }
                
                .section-underline {
                    width: 80px;
                    height: 4px;
                    background: linear-gradient(45deg, #ff6b35, #f7931e);
                    border-radius: 2px;
                    margin: 0 auto;
                    position: absolute;
                    bottom: -10px;
                    left: 50%;
                    transform: translateX(-50%);
                }
                
                .section-underline::after {
                    content: '';
                    position: absolute;
                    top: 8px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 120px;
                    height: 2px;
                    background: linear-gradient(45deg, #ff6b35, #f7931e);
                    border-radius: 1px;
                }
                
                .modern-volunteer-card {
                    background: white;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                    transition: all 0.3s ease;
                    border: 1px solid rgba(255,255,255,0.2);
                    height: 100%;
                }
                
                .modern-volunteer-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
                }
                
                .volunteer-image-wrapper {
                    position: relative;
                    height: 300px;
                    overflow: hidden;
                }
                
                .volunteer-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.3s ease;
                }
                
                .modern-volunteer-card:hover .volunteer-image {
                    transform: scale(1.1);
                }
                
                .volunteer-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(45deg, rgba(255,107,53,0.8) 0%, rgba(247,147,30,0.8) 100%);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .modern-volunteer-card:hover .volunteer-overlay {
                    opacity: 1;
                }
                
                .volunteer-overlay::before {
                    content: 'हनुमान जी के सेवक';
                    color: white;
                    font-size: 1.2rem;
                    font-weight: 600;
                    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
                }
                
                .volunteer-content {
                    padding: 25px 20px;
                    text-align: center;
                }
                
                .volunteer-role {
                    font-size: 0.9rem;
                    color: #ff6b35;
                    font-weight: 600;
                    margin-bottom: 10px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                
                .volunteer-name {
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: #333;
                    margin: 0;
                    line-height: 1.4;
                }
                
                .volunteer-name span {
                    display: block;
                }
                
                /* Modern Gallery Section Styles */
                .modern-gallery-section {
                    padding: 80px 0;
                    background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
                }
                
                .modern-gallery-item {
                    position: relative;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
                    transition: all 0.3s ease;
                    height: 300px;
                }
                
                .modern-gallery-item:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 25px 50px rgba(0,0,0,0.15);
                }
                
                .gallery-image-wrapper {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                }
                
                .gallery-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.3s ease;
                }
                
                .modern-gallery-item:hover .gallery-image {
                    transform: scale(1.1);
                }
                
                .gallery-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.6);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .modern-gallery-item:hover .gallery-overlay {
                    opacity: 1;
                }
                
                .gallery-icon {
                    width: 60px;
                    height: 60px;
                    background: rgba(255,255,255,0.2);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 2px solid white;
                    transition: all 0.3s ease;
                }
                
                .gallery-icon:hover {
                    background: rgba(255,255,255,0.3);
                    transform: scale(1.1);
                }
                
                /* Modern Puja Section Styles */
                .modern-puja-section {
                    padding: 80px 0;
                    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
                }
                
                .modern-puja-item {
                    position: relative;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
                    transition: all 0.3s ease;
                    height: 350px;
                    margin-bottom: 30px;
                }
                
                .modern-puja-item:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 25px 50px rgba(0,0,0,0.15);
                }
                
                .puja-image-wrapper {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                }
                
                .puja-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.3s ease;
                }
                
                .modern-puja-item:hover .puja-image {
                    transform: scale(1.1);
                }
                
                .puja-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.6);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                /* Modern Footer Section Styles */
                .modern-footer-section {
                margin-top : -55px;
                    background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
                    padding: 60px 0 30px;
                    color: #333;
                }
                
                .footer-card {
                    background: white;
                    border-radius: 20px;
                    padding: 40px 30px;
                    text-align: center;
                    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
                    border: 1px solid rgba(255,255,255,0.2);
                    transition: all 0.3s ease;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                
                .footer-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 25px 50px rgba(0,0,0,0.15);
                }
                
                .footer-icon {
                    width: 80px;
                    height: 80px;
                    margin: 0 auto 20px;
                    border-radius: 50%;
                    background: linear-gradient(45deg, #ff6b35, #f7931e);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 2rem;
                    color: white;
                }
                
                .footer-title {
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-bottom: 20px;
                    color: #333;
                }
                
                .footer-content {
                    font-size: 1rem;
                    line-height: 1.6;
                    color: #555;
                }
                
                .footer-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                
                .footer-list li {
                    padding: 8px 0;
                    border-bottom: 1px solid rgba(0,0,0,0.1);
                }
                
                .footer-list li:last-child {
                    border-bottom: none;
                }
                
                .footer-separator {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: white;
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.2rem;
                    font-weight: 600;
                    color: #ff6b35;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                    border: 2px solid #ff6b35;
                    z-index: 10;
                }
                `}
      </style>

      {/* <!-- Banner Start --> */}
      <div className="modern-banner">
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="banner-text-box">
                  <h3 className="banner-title">TADIYAN HANUMAN MANDIR 'TRUST'</h3>
                  <p className="banner-description">
                    श्री टड़ियन हनुमान मन्दिर, ई-ब्लांक राजाजीपुरम लखनऊ, उत्तर
                    प्रदेश के अति प्राचीन मन्दिरों में से एक है। इसका इतिहास
                    विगत 150 वर्षों से अधिक का है।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Banner End --> */}

      {/* <!-- About Start --> */}
      <section className="modern-about-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-lg-30">
              <div className="modern-image-container">
                <div className="image-wrapper">
                  <img
                    src="/assets/img/44.jpg"
                    alt="about"
                    className="about-image"
                  />
                  <div className="image-overlay"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="modern-content-box">
                <div className="section-title mb-4">
                  <h3 className="modern-title">TADIYAN HANUMAN MANDIR 'TRUST'</h3>
                  <div className="title-underline"></div>
                </div>
                <div className="content-text">
                  <p className="modern-paragraph">
                    श्री टड़ियन हनुमान मन्दिर, ई-ब्लांक राजाजीपुरम लखनऊ, उत्तर
                    प्रदेश के अति प्राचीन मन्दिरों में से एक है। इसका इतिहास विगत
                    150 वर्षों से अधिक का है।
                  </p>
                  <p className="modern-paragraph">
                    भक्तों का टड़ियन हनुमान जी के प्रति भक्ति प्रेम व असीमित
                    विश्वास अतुलनीय है।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- About End --> */}

      {/* <!-- volunteers Start --> */}
      <section className="modern-volunteers-section">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 className="section-title">हमारी टीम</h2>
            <div className="section-underline"></div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="modern-volunteer-card">
                <div className="volunteer-image-wrapper">
                  <img
                    src="/assets/img/banner/Mahant_Ramakant.PNG"
                    alt="volunteers"
                    className="volunteer-image"
                  />
                  <div className="volunteer-overlay"></div>
                </div>
                <div className="volunteer-content">
                  <div className="volunteer-info">
                    <p className="volunteer-role">अध्यक्ष / संस्थापक</p>
                    <h5 className="volunteer-name">
                      <span>महन्त रामाकान्त दास ऊर्फ सिह</span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            {[
              "उपाध्यक्ष",
              "सचिव",
              "कोषाध्यक्ष",
              "संरक्षक",
              "सलाहकार",
              "सदस्य",
            ].map((role, idx) => {
              const names = [
                "मधु सिंह",
                "बेबी दास",
                "श्यामाकान्त सिंह",
                "सुरेन्द्र सिंह",
                "मनोज शुक्ला",
                "आशीष मिश्रा",
              ];
              return (
                <div key={idx} className="col-lg-3 col-md-6 mb-4">
                  <div className="modern-volunteer-card">
                    <div className="volunteer-image-wrapper">
                      <img
                        src="/assets/img/banner/min.png"
                        alt="volunteers"
                        className="volunteer-image"
                      />
                      <div className="volunteer-overlay"></div>
                    </div>
                    <div className="volunteer-content">
                      <div className="volunteer-info">
                        <p className="volunteer-role">{role}</p>
                        <h5 className="volunteer-name">
                          <span>{names[idx]}</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* <!-- volunteers End --> */}

      {/* <!-- Gallery Start --> */}
      <section className="modern-gallery-section">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 className="section-title">गैलरी</h2>
            <div className="section-underline"></div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="modern-gallery-item">
                <div className="gallery-image-wrapper">
                  <img src="/assets/img/progress-bar/1.JPG" alt="gallery" className="gallery-image" />
                  <div className="gallery-overlay"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="modern-gallery-item">
                <div className="gallery-image-wrapper">
                  <img src="/assets/img/events/8.jpg" alt="gallery" className="gallery-image" />
                  <div className="gallery-overlay"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="modern-gallery-item">
                <div className="gallery-image-wrapper">
                  <img src="/assets/img/progress-bar/2.JPG" alt="gallery" className="gallery-image" />
                  <div className="gallery-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Gallery End --> */}

      {/* <!-- volunteers Slider Start --> */}
      <section className="section section-padding light-bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-lg-30">
              <div className="section-title mb-0 text-start">
                <h4 className="title">TADIYAN HANUMAN MANDIR 'TRUST'</h4>
              </div>
              <p className="blockquote bg-transparent">
                श्री टड़ियन हनुमान मन्दिर, ई-ब्लांक राजाजीपुरम लखनऊ, उत्तर
                प्रदेश के अति प्राचीन मन्दिरों में से एक है। इसका इतिहास विगत
                150 वर्षों से अधिक का है।
              </p>
              <p className="blockquote bg-transparent">
                भक्तों का टड़ियन हनुमान जी के प्रति भक्ति प्रेम व असीमित विश्वास
                अतुलनीय है।
              </p>
            </div>
            <div className="col-lg-6">
              <div className="me-lg-30">
                <div className="modern-image-slider">
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation={{
                      nextEl: '.image-next',
                      prevEl: '.image-prev',
                    }}
                    pagination={{
                      el: '.image-pagination',
                      clickable: true,
                    }}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    loop={true}
                    className="image-swiper"
                  >
                    {[1, 4, 5, 6, 7, 8, 9].map((n) => (
                      <SwiperSlide key={n}>
                        <div className="image-slide">
                          <img
                            src={`/assets/img/cta/${n}.JPG`}
                            alt="volunteers"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                    
                    {/* Custom Navigation */}
                    <div className="image-prev">
                      <i className="fas fa-chevron-left"></i>
                    </div>
                    <div className="image-next">
                      <i className="fas fa-chevron-right"></i>
                    </div>
                    
                    {/* Custom Pagination */}
                    <div className="image-pagination"></div>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- volunteers Slider End --> */}

      {/* <!-- Puja Start --> */}
      <section className="modern-puja-section">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 className="section-title">धाम गैलरी</h2>
            <div className="section-underline"></div>
          </div>
          <div className="row">
            {[21, 24, 25, 26, 37, 38].map((n) => (
              <div key={n} className="col-lg-4 col-md-6 mb-4">
                <div className="modern-puja-item">
                  <div className="puja-image-wrapper">
                    <img
                      src={`/assets/img/events/${n}.jpg`}
                      alt="puja"
                      className="puja-image"
                    />
                    <div className="puja-overlay"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- Puja End --> */}

      <br />
      <br />

      {/* <!-- Modern Footer Section Start --> */}
      <section className="modern-footer-section">
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="col-md-6 mb-4">
              <div className="footer-card">
                <div className="footer-icon">
                  <i className="fas fa-donate"></i>
                </div>
                <h4 className="footer-title">दान</h4>
                <div className="footer-content">
                  <p style={{textAlign: 'center'}}>आपके दान से मंदिर की सेवा और विकास में मदद मिलती है।</p>
                </div>
              </div>
            </div>
            
            <div className="footer-separator d-none d-md-flex">
              <span style={{fontSize:"40px"}}>🙏🏻</span>
            </div>
            
            <div className="col-md-6 mb-4">
              <div className="footer-card">
                <div className="footer-icon">
                  <i className="fas fa-university"></i>
                </div>
                <h4 className="footer-title">HDFC BANK ACCOUNT DETAILS</h4>
                <div className="footer-content">
                  <ul className="footer-list">
                    <li><strong>ACCOUNT NAME:</strong> TADIYAN HANUMAN MANDIR 'TRUST'</li>
                    <li><strong>ACCOUNT NUMBER:</strong> 50200067140281</li>
                    <li><strong>IFSC CODE:</strong> HDFC0001136</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Modern Footer Section End --> */}

      {/* <!-- Back To Top Start --> */}
      <div className="sigma_top style-5">
        <i className="far fa-angle-double-up"></i>
      </div>
      {/* <!-- Back To Top End --> */}
    </>
  );
};

export default Home;
