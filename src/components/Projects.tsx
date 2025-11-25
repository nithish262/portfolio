import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.',
            tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            image: '🛒',
            gradient: 'var(--gradient-primary)',
            liveLink: '#',
            githubLink: '#',
        },
        {
            title: 'Task Management App',
            description: 'Collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
            tech: ['React', 'Firebase', 'TypeScript', 'Tailwind'],
            image: '📋',
            gradient: 'var(--gradient-accent)',
            liveLink: '#',
            githubLink: '#',
        },
        {
            title: 'Social Media Dashboard',
            description: 'Analytics dashboard for social media metrics with data visualization and automated reporting.',
            tech: ['React', 'D3.js', 'Express', 'PostgreSQL'],
            image: '📊',
            gradient: 'var(--gradient-secondary)',
            liveLink: '#',
            githubLink: '#',
        },
        {
            title: 'Weather Forecast App',
            description: 'Real-time weather application with location-based forecasts, interactive maps, and severe weather alerts.',
            tech: ['React', 'OpenWeather API', 'Mapbox', 'CSS'],
            image: '🌤️',
            gradient: 'var(--gradient-primary)',
            liveLink: '#',
            githubLink: '#',
        },
        {
            title: 'Portfolio CMS',
            description: 'Content management system for portfolio websites with drag-and-drop builder and template customization.',
            tech: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS'],
            image: '🎨',
            gradient: 'var(--gradient-accent)',
            liveLink: '#',
            githubLink: '#',
        },
        {
            title: 'Fitness Tracker',
            description: 'Mobile-responsive fitness tracking app with workout plans, progress tracking, and nutrition logging.',
            tech: ['React Native', 'Firebase', 'Redux', 'Charts'],
            image: '💪',
            gradient: 'var(--gradient-secondary)',
            liveLink: '#',
            githubLink: '#',
        },
    ];

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <h2 className="section-title fade-in-up">Featured Projects</h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card glass-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="project-image" style={{ background: project.gradient }}>
                                <span className="project-emoji">{project.image}</span>
                            </div>

                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>

                                <div className="project-tech">
                                    {project.tech.map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-tag">{tech}</span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    <a href={project.liveLink} className="project-link" target="_blank" rel="noopener noreferrer">
                                        <span>Live Demo</span>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                    <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                                        <span>GitHub</span>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
