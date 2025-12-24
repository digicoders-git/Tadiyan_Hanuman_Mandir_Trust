import React from 'react';

const Contact = () => {
    return (
        <>
            <style>
                {`
                /* Modern Banner Styles */
                .modern-banner {
                    position: relative;
                    height: 85vh;
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
                    padding-bottom: 130px;
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
                
                /* Modern Contact Section Styles */
                .modern-contact-section {
                    padding: 80px 0;
                    background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
                    margin-top: -100px;
                    position: relative;
                    z-index: 2;
                }
                
                .modern-map-container {
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
                    height: 500px;
                }
                
                .modern-map-container iframe {
                    width: 100%;
                    height: 100%;
                    border: none;
                }
                
                .modern-contact-form {
                    background: white;
                    padding: 30px;
                    border-radius: 20px;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                    position: relative;
                    overflow: hidden;
                    height: 500px;
                }
                
                .modern-contact-form::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 4px;
                    height: 100%;
                    background: linear-gradient(45deg, #ff6b35, #f7931e);
                }
                
                .contact-form-header {
                    text-align: center;
                    margin-bottom: 20px;
                }
                
                .contact-form-title {
                    font-size: 1.8rem;
                    font-weight: 700;
                    color: #333;
                    margin-bottom: 10px;
                    position: relative;
                    display: inline-block;
                }
                
                .contact-form-title::after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 50%;
                    height: 3px;
                    background: linear-gradient(45deg, #ff6b35, #f7931e);
                    border-radius: 2px;
                }
                
                .modern-form-group {
                    position: relative;
                    margin-bottom: 15px;
                }
                
                .modern-form-group i {
                    position: absolute;
                    left: 15px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #ff6b35;
                    font-size: 1rem;
                    z-index: 2;
                }
                
                .modern-form-control {
                    width: 100%;
                    padding: 12px 15px 12px 45px;
                    border: 2px solid #e9ecef;
                    border-radius: 12px;
                    font-size: 1rem;
                    transition: all 0.3s ease;
                    background: #f8f9fa;
                }
                
                .modern-form-control:focus {
                    outline: none;
                    border-color: #ff6b35;
                    background: white;
                    box-shadow: 0 0 0 3px rgba(255,107,53,0.1);
                }
                
                .modern-textarea {
                    padding: 12px 15px;
                    min-height: 80px;
                    resize: vertical;
                }
                
                .modern-submit-btn {
                    background: linear-gradient(45deg, #ff6b35, #f7931e);
                    color: white;
                    padding: 15px 40px;
                    border: none;
                    border-radius: 12px;
                    font-size: 1.1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 8px 25px rgba(255,107,53,0.3);
                }
                
                .modern-submit-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 12px 35px rgba(255,107,53,0.4);
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
                                    <h3 className="banner-title">सम्पर्क</h3>
                                    <p className="banner-description" style={{color:"#fff"}}>
                                        श्री टड़ियन हनुमान मन्दिर से जुड़ें। हमसे सम्पर्क करें, अपने सुझाव दें या मन्दिर की गतिविधियों के बारे में जानकारी प्राप्त करें। हम आपकी सेवा में हैं।
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Banner End --> */}

            {/* <!-- Contact Section Start --> */}
            <section className="modern-contact-section">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Contact Form - Left Side */}
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <div className="modern-contact-form">
                                <div className="contact-form-header">
                                    <h2 className="contact-form-title">हमसे सम्पर्क करें</h2>
                                </div>
                                
                                <form className="mf_form_validate ajax_submit">
                                    <div className="modern-form-group">
                                        <i className="far fa-user"></i>
                                        <input 
                                            type="text" 
                                            placeholder="पूरा नाम" 
                                            className="modern-form-control" 
                                            name="name" 
                                        />
                                    </div>
                                    <div className="modern-form-group">
                                        <i className="far fa-envelope"></i>
                                        <input 
                                            type="email" 
                                            placeholder="ईमेल पता" 
                                            className="modern-form-control" 
                                            name="email" 
                                        />
                                    </div>
                                    <div className="modern-form-group">
                                        <i className="far fa-pencil"></i>
                                        <input 
                                            type="text" 
                                            placeholder="विषय" 
                                            className="modern-form-control" 
                                            name="subject" 
                                        />
                                    </div>
                                    <div className="modern-form-group">
                                        <textarea 
                                            name="message" 
                                            placeholder="अपना संदेश लिखें" 
                                            className="modern-form-control modern-textarea"
                                        ></textarea>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="modern-submit-btn">
                                            संदेश भेजें
                                        </button>
                                        <div className="server_response w-100"></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        
                        {/* Map - Right Side */}
                        <div className="col-lg-6">
                            <div className="modern-map-container">
                                <iframe 
                                    title="map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.9181926884894!2d80.87612291501824!3d26.842554169569016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfe687609567d%3A0xc43307fee6a50e22!2sTadiyan%20Mandir%20Rd%2C%20Block%20E%2C%20Rajajipuram%2C%20Lucknow%2C%20Uttar%20Pradesh%20226017!5e0!3m2!1sen!2sin!4v1656747950052!5m2!1sen!2sin" 
                                    allowFullScreen={true}
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Contact Section End --> */}

            {/* <!-- Icons Start --> */}
            <div className="section section-padding pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="sigma_icon-block text-center light icon-block-7">
                                <i className="flaticon-email"></i>
                                <div className="sigma_icon-block-content">
                                    <span>Send Email <i className="far fa-arrow-right"></i> </span>
                                    <h5> Email Address</h5>
                                    <p><a href="mailto:hanumanmandir@gmail.com">hanumanmandir@gmail.com</a></p>
                                    <p><a href="mailto:hanumanmandir@gmail.com">hanumanmandir@gmail.com</a></p>
                                </div>
                                <div className="icon-wrapper">
                                    <i className="flaticon-email"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="sigma_icon-block text-center light icon-block-7">
                                <i className="flaticon-call"></i>
                                <div className="sigma_icon-block-content">
                                    <span>Call Us Now <i className="far fa-arrow-right"></i> </span>
                                    <h5> Phone Number </h5>
                                    <p><a href="tel:+918176981584"> +91 8176981584</a></p>
                                    <p><a href="tel:+918176981584"> +91 8176981584</a></p>
                                </div>
                                <div className="icon-wrapper">
                                    <i className="flaticon-call"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="sigma_icon-block text-center light icon-block-7">
                                <i className="flaticon-location"></i>
                                <div className="sigma_icon-block-content">
                                    <span>Find Us Here <i className="far fa-arrow-right"></i> </span>
                                    <h5> Location </h5>
                                    <p>ई-ब्लांक राजाजीपुरम लखनऊ</p>
                                    <p>उत्तर प्रदेश </p>
                                </div>
                                <div className="icon-wrapper">
                                    <i className="flaticon-location"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Icons End --> */}
        </>
    );
};

export default Contact;
