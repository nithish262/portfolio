import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "Nivi's Stitching Studio",
            description: 'Comprehensive admin panel for a Tailoring Boutique featuring dynamic dashboards, Kanban-style order management, and customer measurement tracking. Includes automated WhatsApp order tracking integration, rewards management system, and detailed business reports.',
            tech: ['React', 'NestJS', 'MongoDB'],
            image: '🧵',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            liveLink: 'https://nivis-stitching-hub-front-end-ljmi-k1s8gi17s.vercel.app/login',
            githubLink: 'https://github.com/nithish262/nivis-stitching-hub-front-end',
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
