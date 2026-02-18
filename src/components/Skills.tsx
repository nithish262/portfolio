import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend',
            icon: '🎨',
            skills: [
                { name: 'React', level: 90 },
                { name: 'TypeScript', level: 85 },
                { name: 'HTML/CSS', level: 95 },
                { name: 'Tailwind CSS', level: 88 },
            ],
        },
        {
            title: 'Backend',
            icon: '⚙️',
            skills: [
                { name: 'Node.js', level: 85 },
                { name: 'Express', level: 82 },
                { name: 'Python', level: 80 },
                { name: 'REST APIs', level: 90 },
            ],
        },
        {
            title: 'Database',
            icon: '💾',
            skills: [
                { name: 'MongoDB', level: 85 },
                { name: 'PostgreSQL', level: 80 },
                { name: 'Firebase', level: 75 },
                { name: 'Redis', level: 70 },
            ],
        },
        {
            title: 'Tools & Others',
            icon: '🛠️',
            skills: [
                { name: 'Git', level: 90 },
                { name: 'Docker', level: 75 },
                { name: 'AWS', level: 70 },
                { name: 'CI/CD', level: 78 },
            ],
        },
    ];

    return (
        <section id="skills" className="section skills">
            <div className="container">
                <h2 className="section-title fade-in-up">Skills & Technologies</h2>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category glass-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="category-header">
                                <span className="category-icon">{category.icon}</span>
                                <h3>{category.title}</h3>
                            </div>

                            <div className="skills-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="skill-item">
                                        <div className="skill-info">
                                            <span className="skill-name">{skill.name}</span>
                                            <div className="skill-bar">
                                                <div
                                                    className="skill-progress"
                                                    style={{ width: `${skill.level}%` }}
                                                ></div>
                                            </div>
                                        </div>
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
