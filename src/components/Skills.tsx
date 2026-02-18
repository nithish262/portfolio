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
                { name: 'MongoDB', level: 85 },
                { name: 'RESTful APIs', level: 90 },
                { name: 'OAuth2.0 / OIDC', level: 80 },
                { name: 'SCIM', level: 75 },
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

                <div className="skills-container">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category-wrapper">
                            <h3 className="category-title text-center mb-4">
                                <span className="category-icon-main">{category.icon}</span> {category.title}
                            </h3>
                            <div className="skills-grid-new">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="skill-card glass-card fade-in-up"
                                        style={{ animationDelay: `${(index * 4 + skillIndex) * 0.1}s` }}>
                                        <div className="skill-icon-wrapper">
                                            {/* Using a generic code icon if no specific icon is available, or first letter */}
                                            <span className="skill-initial">{skill.name.charAt(0)}</span>
                                        </div>
                                        <span className="skill-name-new">{skill.name}</span>
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
