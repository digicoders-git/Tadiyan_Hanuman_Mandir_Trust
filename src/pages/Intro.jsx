import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Intro.css';

const Intro = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        document.body.classList.add('intro-body');
        return () => {
            document.body.classList.remove('intro-body');
        };
    }, []);

    const playAudio = () => {
        const audio = document.getElementById("audio");
        if (audio) {
            audio.play().catch(e => console.log("Audio play failed:", e));
        }
    };

    const handleRopeClick = (e) => {
        e.preventDefault();
        if (!isOpen) {
            setIsOpen(true);
            playAudio();
            setTimeout(() => {
                navigate('/home');
            }, 3000);
        }
    };

    return (
        <>
            <audio id="audio" src="/image/bell.mp3"></audio>
            
            <div className={`leftcurtain ${isOpen ? 'open' : ''}`} id="e">
                <img src="/image/frontcurtain.jpg" alt="curtain" />
            </div>
            
            <div className={`rightcurtain ${isOpen ? 'open' : ''}`} id="e">
                <img src="/image/frontcurtain.jpg" alt="curtain" />
            </div>
            
            <div style={{ cursor: 'pointer' }} onClick={handleRopeClick}>
                <img 
                    src="/image/rope.png" 
                    className={`rope ${isOpen ? 'open' : ''}`} 
                    alt="rope"
                />
            </div>
        </>
    );
};

export default Intro;
