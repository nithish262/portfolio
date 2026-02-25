import './Skills.css';
import { FaReact, FaNodeJs, FaAngular, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiExpress, SiJavascript, SiTailwindcss, SiNestjs, SiMongodb, SiApachekafka, SiRedis, SiTypescript } from 'react-icons/si';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend',
            skills: [
                { name: 'React.js', icon: <FaReact size={40} color="#61DAFB" /> },
                { name: 'Angular', icon: <FaAngular size={40} color="#DD0031" /> },
                { name: 'JavaScript', icon: <SiJavascript size={40} color="#F7DF1E" /> },
                { name: 'TypeScript', icon: <SiTypescript size={40} color="#3178C6" /> },
                { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} color="#06B6D4" /> },
            ],
        },
        {
            title: 'Backend',
            skills: [
                { name: 'Node.js', icon: <FaNodeJs size={40} color="#339933" /> },
                { name: 'Express.js', icon: <SiExpress size={40} color="#ffffff" /> },
                { name: 'NestJS', icon: <SiNestjs size={40} color="#E0234E" /> },
            ],
        },
        {
            title: 'Database & Messaging',
            skills: [
                { name: 'MongoDB', icon: <SiMongodb size={40} color="#47A248" /> },
                { name: 'Redis', icon: <SiRedis size={40} color="#DC382D" /> },
                { name: 'Kafka', icon: <SiApachekafka size={40} color="#231F20" className="icon-white" /> },
                { name: 'Git', icon: <FaGitAlt size={40} color="#F05032" /> },
                { name: 'Docker', icon: <FaDocker size={40} color="#2496ED" /> },
            ],
        },
    ];

    return (
        <section id="skills" className="section skills">
            <div className="container">
                <h2 className="section-title fade-in-up">Skills & Technologies</h2>

                <div className="skills-container">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                            <h3 className="category-title">
                                <span className="category-bullet">•</span> {category.title}
                            </h3>
                            <div className="skills-grid">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="skill-card">
                                        <div className="skill-icon">
                                            {skill.icon}
                                        </div>
                                        <span className="skill-name">{skill.name}</span>
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
