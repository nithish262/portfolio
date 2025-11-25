import { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const fullText = 'Full Stack Developer';

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setDisplayText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 100);

        return () => clearInterval(timer);
    }, []);

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="hero">
            <div className="hero-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
            </div>

            <div className="hero-content container">
                <div className="hero-text fade-in-up">
                    <p className="hero-greeting">Hi, I'm</p>
                    <h1 className="hero-name">
                        <span className="gradient-text">Nithish</span>
                    </h1>
                    <h2 className="hero-title">
                        <span className="typing-text">{displayText}</span>
                        <span className="cursor">|</span>
                    </h2>
                    <p className="hero-description">
                        I create beautiful, functional, and user-friendly web experiences.
                        Passionate about turning ideas into reality through clean code and elegant design.
                    </p>

                    <div className="hero-buttons">
                        <button className="btn btn-primary" onClick={scrollToProjects}>
                            View My Work
                        </button>
                        <button className="btn btn-outline" onClick={scrollToContact}>
                            Get In Touch
                        </button>
                    </div>
                </div>

                <div className="scroll-indicator">
                    <div className="mouse">
                        <div className="wheel"></div>
                    </div>
                    <p>Scroll Down</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
