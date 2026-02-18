import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            company: 'Skillmine Technology Consulting',
            location: 'Sivakasi',
            role: 'Junior Software Developer',
            period: 'June 2023 – Present',
            description: 'Specializing in Identity and Access Management (IDAM) solutions.',
            projects: [
                {
                    name: 'Authenticator (IDAM Solution)',
                    details: [
                        'Enhanced and maintained identity and access management systems using NestJS and MongoDB.',
                        'Implemented multi-factor authentication modules (Email, SMS, Face, FIDO, Push, Pattern).',
                        'Developed SCIM 2.0-based user and group provisioning APIs.',
                        'Integrated external identity providers through connector modules.',
                        'Followed DevOps practices with GitLab CI/CD.'
                    ]
                },
                {
                    name: 'e-Compass',
                    details: [
                        'Role: Backend Developer',
                        'Created API Documents using Swagger & added logger across the project.',
                        ' focused on bug fixes and system stability.'
                    ]
                }
            ]
        },
        {
            company: 'Cooldreamers',
            location: 'Sivakasi',
            role: 'Intern – Hostel Management System Project',
            period: 'January 2023 – June 2023',
            description: 'Developed a web-based hostel management system using Angular, NestJS, and MongoDB.',
            projects: [
                {
                    name: 'Hostel Management System',
                    details: [
                        'Created modules for student room allocation, fee management, and digital record-keeping.',
                        'Improved administrative efficiency by digitalizing manual hostel operations.'
                    ]
                }
            ]
        }
    ];

    return (
        <section id="experience" className="section experience">
            <div className="container">
                <h2 className="section-title fade-in-up">Work Experience</h2>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item fade-in-up">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content glass-card">
                                <div className="exp-header">
                                    <h3>{exp.role}</h3>
                                    <span className="exp-period">{exp.period}</span>
                                </div>
                                <div className="exp-subheader">
                                    <h4>{exp.company}</h4>
                                    <span className="exp-location">{exp.location}</span>
                                </div>
                                <p className="exp-description">{exp.description}</p>

                                <div className="exp-projects">
                                    {exp.projects.map((project, pIndex) => (
                                        <div key={pIndex} className="project-item">
                                            <h5>{project.name}</h5>
                                            <ul>
                                                {project.details.map((detail, dIndex) => (
                                                    <li key={dIndex}>{detail}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
