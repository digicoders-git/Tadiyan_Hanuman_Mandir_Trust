import React, { useState } from 'react';

const Video = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    
    const openModal = (videoUrl) => {
        const videoId = videoUrl.split('v=')[1];
        setSelectedVideo(videoId);
    };
    
    const closeModal = () => {
        setSelectedVideo(null);
    };

    return (
        <>
            <style>
                {`
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
                
                /* Modern Video Section Styles */
                .modern-video-section {
                    padding: 80px 0;
                    background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
                }
                
                .video-header {
                    text-align: center;
                    margin-bottom: 60px;
                }
                
                .video-title {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: #333;
                    margin-bottom: 15px;
                    position: relative;
                    display: inline-block;
                }
                
                .video-title::after {
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
                
                .modern-video-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 30px;
                    margin-top: 40px;
                }
                
                .modern-video-item {
                    position: relative;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
                    transition: all 0.3s ease;
                    background: white;
                }
                
                .modern-video-item:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 25px 50px rgba(0,0,0,0.15);
                }
                
                .video-thumbnail {
                    position: relative;
                    width: 100%;
                    height: 250px;
                    overflow: hidden;
                }
                
                .video-thumbnail img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.3s ease;
                }
                
                .modern-video-item:hover .video-thumbnail img {
                    transform: scale(1.1);
                }
                
                .video-play-btn {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 80px;
                    height: 80px;
                    background: linear-gradient(45deg, #ff6b35, #f7931e);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 2rem;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    box-shadow: 0 8px 25px rgba(255,107,53,0.3);
                }
                
                .video-play-btn:hover {
                    transform: translate(-50%, -50%) scale(1.1);
                    color: white;
                    box-shadow: 0 12px 35px rgba(255,107,53,0.4);
                }
                
                .video-play-btn i {
                    margin-left: 4px;
                }
                
                .video-content {
                    padding: 25px;
                    text-align: center;
                }
                
                .video-title-text {
                    font-size: 1.2rem;
                    font-weight: 600;
                    color: #333;
                    margin: 0;
                    line-height: 1.4;
                }
                
                /* Video Modal Styles */
                .video-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,0.9);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;
                    opacity: 0;
                    visibility: hidden;
                    transition: all 0.3s ease;
                }
                
                .video-modal.active {
                    opacity: 1;
                    visibility: visible;
                }
                
                .video-modal-content {
                    position: relative;
                    width: 90%;
                    max-width: 800px;
                    aspect-ratio: 16/9;
                    background: #000;
                    border-radius: 10px;
                    overflow: hidden;
                    transform: scale(0.8);
                    transition: transform 0.3s ease;
                }
                
                .video-modal.active .video-modal-content {
                    transform: scale(1);
                }
                
                .video-modal iframe {
                    width: 100%;
                    height: 100%;
                    border: none;
                }
                
                .video-modal-close {
                    position: absolute;
                    top: -50px;
                    right: 0;
                    background: none;
                    border: none;
                    color: white;
                    font-size: 2rem;
                    cursor: pointer;
                    transition: color 0.3s ease;
                }
                
                .video-modal-close:hover {
                    color: #ff6b35;
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
                                    <h3 className="banner-title">वीडियो गैलरी</h3>
                                    <p className="banner-description" style={{color:"#fff"}}>
                                        श्री टड़ियन हनुमान मन्दिर के विशेष वीडियो। देखिए हमारे मन्दिर की आरती, भजन-कीर्तन, विशेष उत्सवों और धार्मिक कार्यक्रमों के वीडियो।
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Banner End --> */}

            {/* <!-- Video Section Start --> */}
            <section className="modern-video-section">
                <div className="container">
                    <div className="video-header">
                        <h2 className="video-title">वीडियो संग्रह</h2>
                    </div>
                    
                    <div className="modern-video-grid">
                        {[
                            { title: 'Varansi at Night', url: 'https://www.youtube.com/watch?v=sX2bYV6nSy4' },
                            { title: 'Chaar Dhaam Yatra', url: 'https://www.youtube.com/watch?v=xJ3vatsNQDU' },
                            { title: 'Mahashivratri Temple', url: 'https://www.youtube.com/watch?v=xJ3vatsNQDU' },
                            { title: 'OM Mahashivratri', url: 'https://www.youtube.com/watch?v=xJ3vatsNQDU' }
                        ].map((v, i) => (
                            <div key={i} className="modern-video-item">
                                <div className="video-thumbnail">
                                    <img src="/assets/img/mndir.png" alt="video" />
                                    <button 
                                        className="video-play-btn" 
                                        onClick={() => openModal(v.url)}
                                        style={{border: 'none', cursor: 'pointer'}}
                                    >
                                        <i className="fas fa-play"></i>
                                    </button>
                                </div>
                                <div className="video-content">
                                    <h6 className="video-title-text">{v.title}</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* <!-- Video Section End --> */}
            
            {/* Video Modal */}
            <div className={`video-modal ${selectedVideo ? 'active' : ''}`} onClick={closeModal}>
                <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
                    <button className="video-modal-close" onClick={closeModal}>
                        <i className="fas fa-times"></i>
                    </button>
                    {selectedVideo && (
                        <iframe
                            src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                            title="Video Player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    )}
                </div>
            </div>
        </>
    );
};

export default Video;
