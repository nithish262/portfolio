import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', message: '' });
        }, 3000);
    };

    const socialLinks = [
        {
            name: 'GitHub',
            label: 'Visit my GitHub profile',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
            ),
            url: 'https://github.com/nithish262'
        },
        {
            name: 'LinkedIn',
            label: 'Connect with me on LinkedIn',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
            url: 'https://linkedin.com'
        },
        {
            name: 'Email',
            label: 'Send me an email',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
            ),
            url: 'mailto:nithishkumar2622001@gmail.com'
        },
    ];

    return (
        <section id="contact" className="section contact" aria-label="Contact section">
            <div className="container">
                <h2 className="section-title fade-in-up">Get In Touch</h2>

                <div className="contact-content">
                    <div className="contact-info fade-in-up">
                        <h3>Let's Work Together</h3>
                        <p>
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                            Feel free to reach out through the form or connect with me on social media.
                        </p>

                        <address className="contact-details" aria-label="Contact details">
                            <div className="detail-item">
                                <span className="detail-icon" aria-hidden="true">📍</span>
                                <div>
                                    <h4>Location</h4>
                                    <p>Virudhunagar, Tamil Nadu</p>
                                </div>
                            </div>

                            <div className="detail-item">
                                <span className="detail-icon" aria-hidden="true">📞</span>
                                <div>
                                    <h4>Phone</h4>
                                    <p><a href="tel:+916383316537">+91 6383316537</a></p>
                                </div>
                            </div>

                            <div className="detail-item">
                                <span className="detail-icon" aria-hidden="true">📧</span>
                                <div>
                                    <h4>Email</h4>
                                    <p><a href="mailto:nithishkumar2622001@gmail.com">nithishkumar2622001@gmail.com</a></p>
                                </div>
                            </div>
                        </address>

                        <nav className="social-links" aria-label="Social media links">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    className="social-link glass-card"
                                    target={link.url.startsWith('mailto') ? undefined : '_blank'}
                                    rel={link.url.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                                    aria-label={link.label}
                                    title={link.name}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div className="contact-form-wrapper fade-in-up">
                        <form
                            className="contact-form glass-card"
                            onSubmit={handleSubmit}
                            aria-label="Send a message"
                            noValidate
                        >
                            <div className="form-group">
                                <label htmlFor="name">Name <span aria-hidden="true">*</span></label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Name"
                                    autoComplete="name"
                                    aria-required="true"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email <span aria-hidden="true">*</span></label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="your@email.com"
                                    autoComplete="email"
                                    aria-required="true"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message <span aria-hidden="true">*</span></label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    placeholder="Your message here..."
                                    aria-required="true"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className={`btn btn-primary submit-btn ${isSubmitted ? 'submitted' : ''}`}
                                aria-label={isSubmitted ? 'Message sent successfully' : 'Send your message'}
                                disabled={isSubmitted}
                            >
                                {isSubmitted ? '✓ Message Sent!' : 'Send Message'}
                            </button>

                            {/* Screen reader live region for form submission feedback */}
                            <div
                                role="status"
                                aria-live="polite"
                                aria-atomic="true"
                                className="sr-only"
                            >
                                {isSubmitted ? 'Your message has been sent successfully. We will get back to you soon.' : ''}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
