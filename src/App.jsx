import { useState, useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Video from './pages/Video'
import Donation from './pages/Donation'
import { initPlugins } from './utils/initPlugins'

import Intro from './pages/Intro'

function App() {
  const location = useLocation();

  useEffect(() => {
    // Small timeout to ensure DOM is ready for jQuery plugins
    const timer = setTimeout(() => {
      initPlugins();
    }, 100);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <Routes>
        <Route path="/" element={<Intro />} />
        
        <Route path="/home" element={<Layout><Home /></Layout>} />
        <Route path="/main_index" element={<Navigate to="/home" replace />} />
        
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/about_us" element={<Navigate to="/about" replace />} />
        
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/contact-us" element={<Navigate to="/contact" replace />} />
        
        <Route path="/gallery" element={<Layout><Gallery /></Layout>} />
        
        <Route path="/video" element={<Layout><Video /></Layout>} />
        
        <Route path="/donation" element={<Layout><Donation /></Layout>} />
    </Routes>
  )
}

export default App
