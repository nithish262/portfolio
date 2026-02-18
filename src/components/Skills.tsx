import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            icon: '💻',
            skills: [
                { name: 'JavaScript', level: 90 },
                { name: 'TypeScript', level: 85 },
                { name: 'HTML', level: 95 },
                { name: 'CSS', level: 88 },
            ],
        },
        {
            title: 'Frameworks',
            icon: '⚛️',
            skills: [
                { name: 'NestJS', level: 85 },
                { name: 'Angular', level: 80 },
                { name: 'Node.js', level: 85 },
                { name: 'React', level: 82 },
            ],
        },
        {
            title: 'Database & Protocols',
            icon: '🗄️',
            skills: [
                { name: 'MongoDB', level: 0 },
                { name: 'Redis', level: 0 },
                { name: 'Kafka', level: 0 },
                { name: 'RESTful APIs', level: 0 },
                { name: 'OAuth2.0 / OIDC', level: 0 },
                { name: 'SCIM', level: 0 },
            ],
        },
        {
            title: 'Tools',
            icon: '🛠️',
            skills: [
                { name: 'Git', level: 88 },
                { name: 'Docker', level: 75 },
                { name: 'GitLab CI/CD', level: 78 },
                { name: 'Postman', level: 85 },
            ],
        },
    ];

    return (
        <section id="skills" className="section skills">
            <div className="container">
                <h2 className="section-title fade-in-up">Skills & Technologies</h2>

                <div className="skills-grid-bento">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-bento-card glass-card fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="bento-header">
                                <span className="bento-icon">{category.icon}</span>
                                <h3>{category.title}</h3>
                            </div>
                            <div className="bento-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="bento-item">
                                        {skill.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
