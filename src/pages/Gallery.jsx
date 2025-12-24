import React, { Fragment } from 'react';

const Gallery = () => {
    return (
        <Fragment>
            <style>
                {`
                img {
                    height: 400px;
                }
                #b {
                    border: 5px solid red;
                }
                
                /* Modern Banner Styles */
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
                
                /* Modern Gallery Section Styles */
                .modern-gallery-section {
                    padding: 80px 0;
                    background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
                }
                
                .gallery-header {
                    text-align: center;
                    margin-bottom: 60px;
                }
                
                .gallery-title {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: #333;
                    margin-bottom: 15px;
                    position: relative;
                    display: inline-block;
                }
                
                .gallery-title::after {
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
                
                .modern-gallery-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    gap: 30px;
                    margin-top: 40px;
                }
                
                .modern-gallery-item {
                    position: relative;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
                    transition: all 0.3s ease;
                    height: 300px;
                    background: white;
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
                
                .gallery-icon i {
                    color: white;
                    font-size: 24px;
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
                                    <h3 className="banner-title">पिक्चर गैलरी</h3>
                                    <p className="banner-description" style={{color:"#fff"}}>
                                        श्री टड़ियन हनुमान मन्दिर की खूबसूरत तस्वीरें। देखिए हमारे मन्दिर के विभिन्न उत्सवों, पूजा-अर्चना, आरती और विशेष अवसरों की यादगार तस्वीरें।
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Banner End --> */}

            {/* <!-- Gallery Start --> */}
            <section className="modern-gallery-section">
                <div className="container">
                    <div className="gallery-header">
                        <h2 className="gallery-title">मंदिर गैलरी</h2>
                    </div>
                    
                    <div className="modern-gallery-grid">
                        {[1, 2, 3].map(n => (
                            <div key={n} className="modern-gallery-item">
                                <div className="gallery-image-wrapper">
                                    <img src={`/assets/img/events/${n}.jpg`} alt="gallery" className="gallery-image" />
                                </div>
                            </div>
                        ))}
                        {[4, 5, 6, 7, 8, 9, 10, 11, 12].map(n => (
                            <div key={n} className="modern-gallery-item">
                                <div className="gallery-image-wrapper">
                                    <img src={`/assets/img/events/${n}.jpg`} alt="gallery" className="gallery-image" />
                                </div>
                            </div>
                        ))}
                        <div className="modern-gallery-item">
                            <div className="gallery-image-wrapper">
                                <img src="/assets/img/events/13.jpg" alt="gallery" className="gallery-image" />
                            </div>
                        </div>
                        <div className="modern-gallery-item">
                            <div className="gallery-image-wrapper">
                                <img src="/assets/img/events/14.jpg" alt="gallery" className="gallery-image" />
                            </div>
                        </div>
                        <div className="modern-gallery-item">
                            <div className="gallery-image-wrapper">
                                <img src="/assets/img/events/15.jpg" alt="gallery" className="gallery-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Gallery End --> */}
        </Fragment>
    );
};

export default Gallery;
