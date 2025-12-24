import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <>
            {/* Mobile Navigation Overlay */}
            <div className={`mobile-overlay ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
            
            {/* Mobile Sidebar */}
            <aside className={`mobile-sidebar ${isMenuOpen ? 'active' : ''}`}>
                <div className="mobile-sidebar-header">
                    <Link className="mobile-logo" to="/home" onClick={toggleMenu}>
                        <img src="/assets/img/logoq.png" alt="logo" />
                    </Link>
                    <button className="close-btn" onClick={toggleMenu}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                <nav className="mobile-nav">
                    <ul>
                        <li className={`mobile-menu-item ${isActive('/home') ? 'active' : ''}`}>
                            <Link to="/home" onClick={toggleMenu}>होम</Link>
                        </li>
                        <li className={`mobile-menu-item ${isActive('/about') ? 'active' : ''}`}>
                            <Link to="/about" onClick={toggleMenu}>हमारे विषय में</Link>
                        </li>
                        <li className={`mobile-menu-item ${isActive('/gallery') ? 'active' : ''}`}>
                            <Link to="/gallery" onClick={toggleMenu}>पिक्चर गैलरी</Link>
                        </li>
                        <li className={`mobile-menu-item ${isActive('/video') ? 'active' : ''}`}>
                            <Link to="/video" onClick={toggleMenu}>वीडियो गैलरी</Link>
                        </li>
                        <li className={`mobile-menu-item ${isActive('/contact') ? 'active' : ''}`}>
                            <Link to="/contact" onClick={toggleMenu}>सम्पर्क</Link>
                        </li>
                        <li className="mobile-menu-item">
                            <Link to="/donation" className="mobile-donate-btn" onClick={toggleMenu}>
                                Donation
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Main Header */}
            <header className={`modern-header ${isScrolled ? 'scrolled' : ''}`}>
                <div className="header-container">
                    {/* Logo */}
                    <div className="header-logo">
                        <Link to="/home">
                            <img src="/assets/img/logoq.png" alt="logo" />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="desktop-nav">
                        <ul className="nav-menu">
                            <li className={`nav-item ${isActive('/home') ? 'active' : ''}`}>
                                <Link to="/home" className="nav-link">होम</Link>
                            </li>
                            <li className={`nav-item ${isActive('/about') ? 'active' : ''}`}>
                                <Link to="/about" className="nav-link">हमारे विषय में</Link>
                            </li>
                            <li className={`nav-item ${isActive('/gallery') ? 'active' : ''}`}>
                                <Link to="/gallery" className="nav-link">पिक्चर गैलरी</Link>
                            </li>
                            <li className={`nav-item ${isActive('/video') ? 'active' : ''}`}>
                                <Link to="/video" className="nav-link">वीडियो गैलरी</Link>
                            </li>
                            <li className={`nav-item ${isActive('/contact') ? 'active' : ''}`}>
                                <Link to="/contact" className="nav-link">सम्पर्क</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Header Actions */}
                    <div className="header-actions">
                        <Link to="/donation" className="donate-btn">
                            <i className="fas fa-heart"></i>
                            अभी दान करें
                        </Link>
                        <button className="mobile-menu-toggle" onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </header>

            <style jsx>{`
                .modern-header {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                    padding: 0;
                }

                .modern-header.scrolled {
                    background: rgba(255, 255, 255, 0.98);
                    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
                }

                .header-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 20px;
                    height: 80px;
                }

                .header-logo img {
                    height: 80px;
                    width: auto;
                    transition: transform 0.3s ease;
                }

                .header-logo:hover img {
                    transform: scale(1.05);
                }

                .desktop-nav {
                    display: flex;
                    align-items: center;
                }

                .nav-menu {
                    display: flex;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    gap: 30px;
                }

                .nav-item {
                    position: relative;
                }

                .nav-link {
                    text-decoration: none;
                    color: #333;
                    font-weight: 500;
                    font-size: 16px;
                    padding: 10px 0;
                    transition: all 0.3s ease;
                    position: relative;
                }

                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 50%;
                    width: 0;
                    height: 2px;
                    background: linear-gradient(45deg, #ff6b35, #f7931e);
                    border-radius: 2px;
                    transition: all 0.3s ease;
                    transform: translateX(-50%);
                }

                .nav-link:hover {
                    color: #ff6b35;
                }

                .nav-item.active .nav-link {
                    color: #ff6b35;
                }

                .nav-item.active .nav-link::after,
                .nav-link:hover::after {
                    width: 100%;
                }

                .header-actions {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                }

                .contact-info {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    text-decoration: none;
                    color: #333;
                    transition: all 0.3s ease;
                }

                .contact-info:hover {
                    color: #ff6b35;
                }

                .contact-icon {
                    width: 40px;
                    height: 40px;
                    background: linear-gradient(45deg, #ff6b35, #f7931e);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 16px;
                    transform: rotate(0deg);
                }

                .contact-details {
                    display: flex;
                    flex-direction: column;
                }

                .contact-label {
                    font-size: 12px;
                    color: #666;
                    margin-bottom: 2px;
                }

                .contact-number {
                    font-weight: 600;
                    font-size: 14px;
                }

                .donate-btn {
                    background: linear-gradient(45deg, #ff6b35, #f7931e);
                    color: white;
                    text-decoration: none;
                    padding: 12px 24px;
                    border-radius: 25px;
                    font-weight: 600;
                    font-size: 14px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
                    position: relative;
                    overflow: hidden;
                }

                .donate-btn::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(45deg, #f7931e, #ff6b35);
                    transition: left 0.3s ease;
                    z-index: -1;
                }

                .donate-btn:hover {
                    color: white;
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(255, 107, 53, 0.4);
                }

                .donate-btn:hover::before {
                    left: 0;
                }

                .mobile-menu-toggle {
                    display: none;
                    flex-direction: column;
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 5px;
                    gap: 4px;
                }

                .mobile-menu-toggle span {
                    width: 25px;
                    height: 3px;
                    background: #333;
                    border-radius: 2px;
                    transition: all 0.3s ease;
                }

                .mobile-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.5);
                    z-index: 1998;
                    opacity: 0;
                    visibility: hidden;
                    transition: all 0.3s ease;
                }

                .mobile-overlay.active {
                    opacity: 1;
                    visibility: visible;
                }

                .mobile-sidebar {
                    position: fixed;
                    top: 0;
                    left: -300px;
                    width: 300px;
                    height: 100vh;
                    background: white;
                    z-index: 1999;
                    transition: all 0.3s ease;
                    box-shadow: 2px 0 20px rgba(0, 0, 0, 0.1);
                }

                .mobile-sidebar.active {
                    left: 0;
                }

                .mobile-sidebar-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 20px;
                    border-bottom: 1px solid #eee;
                }

                .mobile-logo img {
                    height: 50px;
                }

                .close-btn {
                    background: none;
                    border: none;
                    font-size: 20px;
                    cursor: pointer;
                    color: #666;
                    padding: 5px;
                }

                .mobile-nav ul {
                    list-style: none;
                    padding: 20px 0;
                    margin: 0;
                }

                .mobile-menu-item {
                    margin-bottom: 5px;
                }

                .mobile-menu-item a {
                    display: block;
                    padding: 15px 20px;
                    text-decoration: none;
                    color: #333;
                    font-weight: 500;
                    transition: all 0.3s ease;
                }

                .mobile-menu-item:hover a,
                .mobile-menu-item.active a {
                    background: #f8f9fa;
                    color: #ff6b35;
                    padding-left: 30px;
                }

                .mobile-donate-btn {
                    background: linear-gradient(45deg, #ff6b35, #f7931e) !important;
                    color: white !important;
                    margin: 10px 20px;
                    border-radius: 25px;
                    text-align: center;
                }

                .mobile-donate-btn:hover {
                    background: linear-gradient(45deg, #f7931e, #ff6b35) !important;
                    padding-left: 20px !important;
                }

                /* Responsive Design */
                @media (max-width: 1024px) {
                    .contact-info {
                        display: none;
                    }
                    
                    .nav-menu {
                        gap: 20px;
                    }
                }

                @media (max-width: 768px) {
                    .desktop-nav {
                        display: none;
                    }
                    
                    .mobile-menu-toggle {
                        display: flex;
                    }
                    
                    .header-container {
                        padding: 0 15px;
                        height: 70px;
                    }
                    
                    .header-logo img {
                        height: 50px;
                    }
                    
                    .donate-btn {
                        padding: 10px 16px;
                        font-size: 12px;
                    }
                }

                @media (max-width: 480px) {
                    .donate-btn span {
                        display: none;
                    }
                    
                    .donate-btn {
                        padding: 10px;
                        border-radius: 50%;
                        width: 40px;
                        height: 40px;
                        justify-content: center;
                    }
                }
            `}</style>
        </>
    );
};

export default Header;
