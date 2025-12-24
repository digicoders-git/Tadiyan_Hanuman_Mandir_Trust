import React from 'react';

const Footer = () => {
    return (
        <>
            <style>
                {`
                    .modern-footer {
                        background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
                        padding: 40px 0 20px;
                        position: relative;
                        overflow: hidden;
                        border-top: 1px solid rgba(0,0,0,0.1);
                    }
                    
                    .modern-footer::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        height: 4px;
                        background: linear-gradient(45deg, #ff6b35, #f7931e);
                    }
                    
                    .footer-content {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        flex-wrap: wrap;
                        gap: 20px;
                    }
                    
                    .footer-copyright {
                        color: #333;
                        font-size: 0.95rem;
                        margin: 0;
                    }
                    
                    .footer-copyright a {
                        color: #ff6b35;
                        text-decoration: none;
                        font-weight: 600;
                        transition: color 0.3s ease;
                    }
                    
                    .footer-copyright a:hover {
                        color: #f7931e;
                    }
                    
                    .modern-social-links {
                        display: flex;
                        gap: 15px;
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
                    
                    .social-link {
                        width: 45px;
                        height: 45px;
                        background: white;
                        border-radius: 12px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: #333;
                        text-decoration: none;
                        transition: all 0.3s ease;
                        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                        border: 1px solid rgba(0,0,0,0.1);
                    }
                    
                    .social-link:hover {
                        background: linear-gradient(45deg, #ff6b35, #f7931e);
                        transform: translateY(-3px);
                        box-shadow: 0 8px 25px rgba(255,107,53,0.3);
                        color: white;
                    }
                    
                    .social-link i {
                        font-size: 1.1rem;
                    }
                    
                    @media (max-width: 768px) {
                        .footer-content {
                            flex-direction: column;
                            text-align: center;
                            gap: 25px;
                        }
                        
                        .modern-social-links {
                            justify-content: center;
                        }
                    }
                `}
            </style>
            <footer className="modern-footer">
                <div className="container-fluid">
                    <div className="footer-content">
                        <div className="footer-copyright">
                            <p> Copyright © TADIYAN HANUMAN MANDIR - <a href="#">2025</a> | Design and Developed by <a target='_blank' href="https://digicoders.in">#TeamDigiCoders</a> </p>
                        </div>
                        <ul className="modern-social-links">
                            <li>
                                <a target='_blank' href="https://www.facebook.com/tadiyanhanuman.mandir/" className="social-link">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a target='_blank' href="https://www.instagram.com/tadiyanhanumanmandirtrust.in/?hl=en" className="social-link">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a target='_blank' href="https://www.youtube.com/@TadiyanHanumanMandirTrust" className="social-link">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
