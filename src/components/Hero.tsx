import './Hero.css';
import { useEffect, useState } from 'react';

const Hero = () => {
    const fullText = 'Full Stack Developer';
    // Start with full text for immediate LCP (Largest Contentful Paint)
    const [displayText, setDisplayText] = useState(fullText);

    useEffect(() => {
        // Only start typing animation after initial render to avoid LCP delay
        const timer = setTimeout(() => {
            let index = 0;
            const typingInterval = setInterval(() => {
                if (index <= fullText.length) {
                    setDisplayText(fullText.slice(0, index));
                    index++;
                } else {
                    clearInterval(typingInterval);
                }
            }, 100);
            return () => clearInterval(typingInterval);
        }, 1000); // 1s delay before re-typing

        return () => clearTimeout(timer);
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
        <section id="home" className="hero" aria-label="Hero — introduction">
            {/* Decorative background orbs — hidden from assistive tech */}
            <div className="hero-background" aria-hidden="true">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
            </div>

            {/* Skip-link target */}
            <div id="main-content" className="hero-content container">
                <div className="hero-text fade-in-up">
                    <p className="hero-greeting">Hi, I'm</p>
                    <h1 className="hero-name">
                        <span className="gradient-text">Nithish Kumar P</span>
                    </h1>
                    <h2 className="hero-title" aria-label={`Role: ${fullText}`}>
                        <span className="typing-text" aria-live="polite">{displayText}</span>
                        <span className="cursor" aria-hidden="true">|</span>
                    </h2>
                    <p className="hero-description">
                        I create beautiful, functional, and user-friendly web experiences.
                        Passionate about turning ideas into reality through clean code and elegant design.
                    </p>

                    <div className="hero-buttons">
                        <button
                            className="btn btn-primary"
                            onClick={scrollToProjects}
                            aria-label="View my work — scroll to projects section"
                        >
                            View My Work
                        </button>
                        <button
                            className="btn btn-outline"
                            onClick={scrollToContact}
                            aria-label="Get in touch — scroll to contact section"
                        >
                            Get In Touch
                        </button>
                    </div>
                </div>

                <div className="scroll-indicator" aria-hidden="true">
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
