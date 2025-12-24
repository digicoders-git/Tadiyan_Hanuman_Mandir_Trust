import React from 'react';

const About = () => {
    return (
        <>
            <style>
                {`
                #b {
                    border: 5px solid red;
                }
                
                /* Modern About Section Styles */
                .modern-about-section {
                    padding: 80px 0;
                    background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
                }
                
                .modern-image-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                    height: 600px;
                }
                
                .grid-column {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }
                
                .grid-column:nth-child(2) {
                    margin-top: 40px;
                }
                
                .modern-image-item {
                    position: relative;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
                    transition: all 0.3s ease;
                    flex: 1;
                }
                
                .modern-image-item:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 25px 50px rgba(0,0,0,0.15);
                }
                
                .modern-image-item img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.3s ease;
                }
                
                .modern-image-item:hover img {
                    transform: scale(1.1);
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
                    position: relative;
                    display: inline-block;
                }
                
                .modern-title::after {
                    content: '';
                    position: absolute;
                    bottom: -10px;
                    left: 0;
                    width: 60px;
                    height: 4px;
                    background: linear-gradient(45deg, #ff6b35, #f7931e);
                    border-radius: 2px;
                }
                
                .modern-paragraph {
                    font-size: 1.1rem;
                    line-height: 1.8;
                    color: #555;
                    margin-bottom: 20px;
                    text-align: justify;
                    margin-top: 30px;
                }
                
                .modern-paragraph:last-child {
                    margin-bottom: 0;
                }
                
                /* Modern Timeline Section Styles */
                .modern-timeline-section {
                    padding: 80px 0;
                    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
                }
                
                .timeline-header {
                    text-align: center;
                    margin-bottom: 60px;
                }
                
                .timeline-title {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: #333;
                    margin-bottom: 15px;
                    position: relative;
                    display: inline-block;
                }
                
                .timeline-title::after {
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
                
                .timeline-subtitle {
                    font-size: 1.2rem;
                    color: #666;
                    margin-top: 25px;
                    font-weight: 500;
                }
                
                .modern-timeline {
                    position: relative;
                    max-width: 1000px;
                    margin: 0 auto;
                }
                
                .modern-timeline::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 4px;
                    height: 100%;
                    background: linear-gradient(45deg, #ff6b35, #f7931e);
                    border-radius: 2px;
                }
                
                .timeline-item {
                    position: relative;
                    margin-bottom: 50px;
                    width: 100%;
                }
                
                .timeline-item:nth-child(odd) .timeline-content {
                    margin-left: 0;
                    margin-right: 55%;
                    text-align: right;
                }
                
                .timeline-item:nth-child(even) .timeline-content {
                    margin-left: 55%;
                    margin-right: 0;
                    text-align: left;
                }
                
                .timeline-content {
                    background: white;
                    padding: 30px;
                    border-radius: 20px;
                    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
                    position: relative;
                    transition: all 0.3s ease;
                }
                
                .timeline-content:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
                }
                
                .timeline-content::before {
                    content: '';
                    position: absolute;
                    top: 30px;
                    width: 0;
                    height: 0;
                    border: 15px solid transparent;
                }
                
                .timeline-item:nth-child(odd) .timeline-content::before {
                    right: -30px;
                    border-left-color: white;
                }
                
                .timeline-item:nth-child(even) .timeline-content::before {
                    left: -30px;
                    border-right-color: white;
                }
                
                .timeline-icon {
                    position: absolute;
                    top: 20px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 60px;
                    height: 60px;
                    background: linear-gradient(45deg, #ff6b35, #f7931e);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 1.5rem;
                    box-shadow: 0 8px 25px rgba(255,107,53,0.3);
                    z-index: 2;
                }
                
                .timeline-name {
                    font-size: 1.4rem;
                    font-weight: 700;
                    color: #333;
                    margin-bottom: 10px;
                }
                
                .timeline-guru {
                    font-size: 1rem;
                    color: #666;
                    margin-bottom: 15px;
                }
                
                .timeline-date {
                    position: absolute;
                    top: -40px;
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: #ff6b35;
                    background: white;
                    padding: 8px 15px;
                    border-radius: 20px;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                }
                
                .timeline-item:nth-child(odd) .timeline-date {
                    right: 0;
                }
                
                .timeline-item:nth-child(even) .timeline-date {
                    left: 0;
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
                
                .banner-description {
                    font-size: 1.1rem;
                    line-height: 1.7;
                    color: white;
                    margin: 0;
                    font-weight: 400;
                    text-shadow: 1px 1px 3px rgba(0,0,0,0.8);
                }
                .modern-final-about-section {
                    padding: 80px 0;
                    background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
                }
                
                .modern-final-image-container {
                    position: relative;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                    transform: translateY(0);
                    transition: all 0.3s ease;
                }
                
                .modern-final-image-container:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 30px 60px rgba(0,0,0,0.15);
                }
                
                .final-about-image {
                    width: 100%;
                    height: 500px;
                    object-fit: cover;
                    transition: transform 0.3s ease;
                }
                
                .modern-final-image-container:hover .final-about-image {
                    transform: scale(1.05);
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
                                    <h3 className="banner-title">हमारे विषय में</h3>
                                    <p className="banner-description">
                                        श्री टड़ियन हनुमान मन्दिर का 150 वर्षों से अधिक पुराना गौरवशाली इतिहास। जानिए हमारे मन्दिर की परम्परा, महन्तों का विवरण और भक्तों के प्रति हमारी सेवा के बारे में।
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
                        <div className="col-lg-6 d-none d-lg-block">
                            <div className="modern-image-grid">
                                <div className="grid-column">
                                    <div className="modern-image-item">
                                        <img src="/assets/img/events/37.jpg" alt="hanuman1" />
                                    </div>
                                    <div className="modern-image-item">
                                        <img src="/assets/img/events/38.jpg" alt="hanuman2" />
                                    </div>
                                </div>
                                <div className="grid-column">
                                    <div className="modern-image-item">
                                        <img src="/assets/img/events/12.jpg" alt="hanuman3" />
                                    </div>
                                    <div className="modern-image-item">
                                        <img src="/assets/img/events/13.jpg" alt="hanuman4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="modern-content-box">
                                <h4 className="modern-title">TADIYAN HANUMAN MANDIR 'TRUST'</h4>
                                <p className="modern-paragraph">
                                    श्री टड़ियन हनुमान मन्दिर, ई-ब्लांक राजाजीपुरम लखनऊ, उत्तर प्रदेश के अति प्राचीन मन्दिरों में से एक है। इसका इतिहास विगत 150 वर्षों से अधिक का है।
                                </p>
                                <p className="modern-paragraph">
                                    भक्तों का टड़ियन हनुमान जी के प्रति भक्ति प्रेम व असीमित विश्वास अतुलनीय है।
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- About End --> */}

            {/* <!-- History Start --> */}
            <section className="modern-timeline-section">
                <div className="container">
                    <div className="timeline-header">
                        <h2 className="timeline-title">टड़ियन हनुमान मन्दिर के पूर्व महन्तों का विवरण</h2>
                        <p className="timeline-subtitle">वैष्णव संप्रदाय दिगम्बर अखाड़ा</p>
                    </div>
                    <div className="modern-timeline">
                        {[
                            { name: 'बाबा बालक दास', date: '1910 - 1956' },
                            { name: 'बाबा राम खेलावन दास उर्फ दुलारे दास', date: '1956-1990', guru: 'बाबा बालक दास जी' },
                            { name: 'महन्त छोटे दास उर्फ दहाउर सिंह', date: '1990-2021', guru: 'बाबा राम खेलावन दास जी' },
                            { name: 'वर्तमान महन्ती महन्त रामाकान्त दास उर्फ सिंह', date: '12/12/2020' }
                        ].map((node, i) => (
                            <div key={i} className="timeline-item">
                                <div className="timeline-icon">
                                    <i className="fas fa-om"></i>
                                </div>
                                <div className="timeline-content">
                                    <div className="timeline-date">{node.date}</div>
                                    <h4 className="timeline-name">{node.name}</h4>
                                    {node.guru && <p className="timeline-guru"><strong>गुरु:</strong> {node.guru}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* <!-- History End --> */}

            {/* <!-- About Start --> */}
            <section className="modern-final-about-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="modern-content-box">
                                <h4 className="modern-title">TADIYAN HANUMAN MANDIR 'TRUST'</h4>
                                <p className="modern-paragraph">
                                    श्री टड़ियन हनुमान मन्दिर, ई-ब्लांक राजाजीपुरम लखनऊ, उत्तर प्रदेश के अति प्राचीन मन्दिरों में से एक है। इसका इतिहास विगत 150 वर्षों से अधिक का है।
                                </p>
                                <p className="modern-paragraph">
                                    भक्तों का टड़ियन हनुमान जी के प्रति भक्ति प्रेम व असीमित विश्वास अतुलनीय है।
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="modern-final-image-container">
                                <img src="/assets/img/about.jpg" alt="about" className="final-about-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- About End --> */}
        </>
    );
};

export default About;
