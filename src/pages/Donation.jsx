import React from 'react';

const Donation = () => {
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
                    padding-bottom: 120px;
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
                    font-size: 1.2rem;
                    color: white;
                    line-height: 1.6;
                    text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
                }
                
                /* Modern Donation Section Styles */
                .modern-donation-section {
                    padding: 80px 0;
                    background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
                    margin-top: -100px;
                    position: relative;
                    z-index: 2;
                }
                
                .donation-header {
                    text-align: center;
                    margin-bottom: 60px;
                }
                
                .donation-title {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: #333;
                    margin-bottom: 15px;
                    position: relative;
                    display: inline-block;
                }
                
                .donation-title::after {
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
                
                .modern-qr-card {
                    background: white;
                    border-radius: 20px;
                    padding: 30px;
                    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
                    text-align: center;
                    transition: all 0.3s ease;
                    height: 100%;
                }
                
                .modern-qr-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 25px 50px rgba(0,0,0,0.15);
                }
                
                .qr-image {
                    width: 250px;
                    height: 250px;
                    object-fit: contain;
                    border-radius: 15px;
                    margin-bottom: 20px;
                    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
                }
                
                .payment-logos {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 15px;
                    flex-wrap: wrap;
                    margin-top: 20px;
                }
                
                .payment-logos img {
                    transition: transform 0.3s ease;
                    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
                }
                
                .payment-logos img:hover {
                    transform: scale(1.1);
                }
                
                .modern-bank-card {
                    background: white;
                    border-radius: 20px;
                    padding: 40px;
                    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
                    position: relative;
                    overflow: hidden;
                    height: 100%;
                }
                
                .modern-bank-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 4px;
                    height: 100%;
                    background: linear-gradient(45deg, #ff6b35, #f7931e);
                }
                
                .bank-title {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #333;
                    margin-bottom: 25px;
                    text-align: center;
                }
                
                .bank-details {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                    margin-bottom: 20px;
                }
                
                .bank-label {
                    font-weight: 600;
                    color: #666;
                    font-size: 0.9rem;
                    margin-bottom: 5px;
                }
                
                .bank-value {
                    font-weight: 700;
                    color: #333;
                    font-size: 1rem;
                    word-break: break-all;
                }
                
                .modern-info-card {
                    background: white;
                    border-radius: 20px;
                    padding: 40px;
                    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
                    height: 100%;
                    position: relative;
                }
                
                .info-title {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #333;
                    margin-bottom: 25px;
                    text-align: center;
                    position: relative;
                }
                
                .info-title::after {
                    content: '';
                    position: absolute;
                    bottom: -10px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 30%;
                    height: 3px;
                    background: linear-gradient(45deg, #ff6b35, #f7931e);
                    border-radius: 2px;
                }
                
                .info-text {
                    font-size: 1rem;
                    line-height: 1.8;
                    color: #666;
                    text-align: justify;
                    margin-bottom: 15px;
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
                                    <h3 className="banner-title">दान</h3>
                                    <p className="banner-description" style={{color:"#fff"}}>
                                        श्री टड़ियन हनुमान मन्दिर के सेवा कार्यों में योगदान दें। आपका दान मन्दिर की देखभाल, पूजा-अर्चना, और धार्मिक गतिविधियों में उपयोग होगा। आपका दान हनुमान जी का आशीर्वाद दिलाएगा।
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Banner End --> */}

            {/* <!-- Donation Section Start --> */}
            <section className="modern-donation-section">
                <div className="container">
                    <div className="donation-header">
                        <h2 className="donation-title">दान विवरण</h2>
                    </div>
                    
                    <div className="row align-items-stretch">
                        {/* QR Code Card */}
                        <div className="col-lg-4 mb-4">
                            <div className="modern-qr-card">
                                <img src="/assets/img/baarcode2.jpeg" alt="QR Code" className="qr-image" />
                                <h5 style={{color: '#333', fontWeight: '600', marginBottom: '10px'}}>तुरंत दान करें</h5>
                                <p style={{color: '#666', fontSize: '0.9rem'}}>उपरोक्त QR कोड को स्कैन करें</p>
                                <div className="payment-logos">
                                    <img src="/assets/img/Google-Pay-Logo.png" alt="Google Pay" style={{ height: '40px' }} />
                                    <img src="/assets/img/Paytm.svg.png.png" alt="Paytm" style={{ height: '15px' }} />
                                    <img src="/assets/img/PhonePe-Logo.wine.png" alt="PhonePe" style={{ height: '50px' }} />
                                    <img src="/assets/img/bhim.png" alt="BHIM" style={{ height: '25px' }} />
                                </div>
                            </div>
                        </div>
                        
                        {/* Bank Details Card */}
                        <div className="col-lg-4 mb-4">
                            <div className="modern-bank-card">
                                <h5 className="bank-title">HDFC BANK ACCOUNT DETAILS</h5>
                                <div className="bank-details">
                                    <div>
                                        <div className="bank-label">ACCOUNT NAME</div>
                                        <div className="bank-value">TADIYAN HANUMAN MANDIR TRUST</div>
                                    </div>
                                    <div>
                                        <div className="bank-label">ACCOUNT NUMBER</div>
                                        <div className="bank-value">50200067140281</div>
                                    </div>
                                    <div>
                                        <div className="bank-label">IFSC CODE</div>
                                        <div className="bank-value">HDFC0001136</div>
                                    </div>
                                    <div>
                                        <div className="bank-label">BANK NAME</div>
                                        <div className="bank-value">HDFC BANK</div>
                                    </div>
                                </div>
                                <div style={{textAlign: 'center', marginTop: '20px', padding: '15px', background: 'linear-gradient(45deg, #ff6b35, #f7931e)', borderRadius: '10px', color: 'white', fontSize: '0.9rem', fontWeight: '600'}}>
                                    सुरक्षित बैंक हस्तांतरण
                                </div>
                            </div>
                        </div>
                        
                        {/* Temple Info Card */}
                        <div className="col-lg-4 mb-4">
                            <div className="modern-info-card">
                                <h5 className="info-title">TADIYAN HANUMAN MANDIR TRUST</h5>
                                <p className="info-text">
                                    श्री टड़ियन हनुमान मन्दिर, ई-ब्लांक राजाजीपुरम लखनऊ, उत्तर प्रदेश के अति प्राचीन मन्दिरों में से एक है।
                                </p>
                                <p className="info-text">
                                    इसका इतिहास विगत 150 वर्षों से अधिक का है। भक्तों का टड़ियन हनुमान जी के प्रति भक्ति प्रेम व असीमित विश्वास अतुलनीय है।
                                </p>
                                <div style={{textAlign: 'center', marginTop: '25px', padding: '12px', background: 'rgba(255,107,53,0.1)', borderRadius: '10px', color: '#ff6b35', fontSize: '0.9rem', fontWeight: '600'}}>
                                    आपका दान हनुमान जी का आशीर्वाद
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Donation Section End --> */}
        </>
    );
};

export default Donation;
