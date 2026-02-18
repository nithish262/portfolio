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
        // In a real application, you would send this data to a backend
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', message: '' });
        }, 3000);
    };

    const socialLinks = [
        { name: 'GitHub', icon: '💻', url: 'https://github.com' },
        { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com' },
        { name: 'Twitter', icon: '🐦', url: 'https://twitter.com' },
        { name: 'Email', icon: '📧', url: 'mailto:contact@example.com' },
    ];

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <h2 className="section-title fade-in-up">Get In Touch</h2>

                <div className="contact-content">
                    <div className="contact-info fade-in-up">
                        <h3>Let's Work Together</h3>
                        <p>
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                            Feel free to reach out through the form or connect with me on social media.
                        </p>

                        <div className="contact-details">
                            <div className="detail-item">
                                <span className="detail-icon">📍</span>
                                <div>
                                    <h4>Location</h4>
                                    <p>India</p>
                                </div>
                            </div>

                            <div className="detail-item">
                                <span className="detail-icon">📧</span>
                                <div>
                                    <h4>Email</h4>
                                    <p>contact@example.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="social-links">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    className="social-link glass-card"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={link.name}
                                >
                                    <span>{link.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="contact-form-wrapper fade-in-up">
                        <form className="contact-form glass-card" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary submit-btn">
                                {isSubmitted ? '✓ Message Sent!' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <p>&copy; 2025 Nithish. Built with React & ❤️</p>
            </footer>
        </section>
    );
};

export default Contact;
