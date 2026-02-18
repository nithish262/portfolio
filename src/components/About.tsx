import './About.css';

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="container">
                <h2 className="section-title fade-in-up">About Me</h2>

                <div className="about-content">
                    <div className="about-image fade-in-up">
                        <div className="image-wrapper">
                            <div className="image-placeholder">
                                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" style={{ stopColor: '#667eea', stopOpacity: 1 }} />
                                            <stop offset="100%" style={{ stopColor: '#764ba2', stopOpacity: 1 }} />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="100" cy="100" r="80" fill="url(#grad1)" />
                                    <text x="100" y="110" fontSize="60" fill="white" textAnchor="middle" fontWeight="bold">N</text>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="about-text fade-in-up">
                        <h3>Hello! I'm Nithish Kumar P</h3>
                        <p>
                            I'm a passionate Full Stack Developer with a love for creating beautiful and functional web applications.
                            With expertise in modern web technologies, I specialize in building responsive, user-friendly interfaces
                            and robust backend systems.
                        </p>
                        <p>
                            My journey in web development started with a curiosity about how things work on the internet,
                            and it has evolved into a career where I get to solve complex problems and bring creative ideas to life every day.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                            or sharing knowledge with the developer community.
                        </p>

                        <div className="about-highlights">
                            <div className="highlight-item glass-card">
                                <div className="highlight-icon">🎯</div>
                                <h4>Detail Oriented</h4>
                                <p>Meticulous attention to code quality and user experience</p>
                            </div>

                            <div className="highlight-item glass-card">
                                <div className="highlight-icon">🚀</div>
                                <h4>Fast Learner</h4>
                                <p>Quick to adapt to new technologies and frameworks</p>
                            </div>

                            <div className="highlight-item glass-card">
                                <div className="highlight-icon">💡</div>
                                <h4>Problem Solver</h4>
                                <p>Creative solutions to complex technical challenges</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
