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
                            Motivated and detail-oriented Junior Software Developer with hands-on experience in building secure,
                            scalable web applications. Skilled in backend development using NestJS, MongoDB, and RESTful APIs.
                        </p>
                        <p>
                            Experienced in developing identity and access management systems, including SCIM and OpenID Connect integrations.
                            Strong understanding of multi-factor authentication flows and API development.
                            Passionate about learning new technologies and contributing to high-impact projects.
                        </p>

                        <div className="education-section">
                            <h4 className="subsection-title">Education</h4>
                            <div className="education-item glass-card">
                                <div className="edu-header">
                                    <h5>Master of Computer Applications (MCA)</h5>
                                    <span className="edu-year">2021 – 2023</span>
                                </div>
                                <p className="edu-school">Ayya Nadar Janaki Ammal College, Sivakasi</p>
                            </div>
                            <div className="education-item glass-card">
                                <div className="edu-header">
                                    <h5>Bachelor of Computer Applications (BCA)</h5>
                                    <span className="edu-year">2018 – 2021</span>
                                </div>
                                <p className="edu-school">VHNSN College, Virudhunagar</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
