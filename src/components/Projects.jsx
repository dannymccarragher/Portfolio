import { siGithub } from 'simple-icons';

const Projects = () => {
    const projects = [
        {
            title: "Forq",
            description: "A cross-platform mobile app (iOS/Android) that tracks 3 core macronutrients in real-time against personalized goals.",
            technologies: ["React Native", "TypeScript", "Expo", "Node.js", "Express", "Drizzle", "MySQL", "Azure App Service"],
            githubUrl: "https://github.com/dannymccarragher/Forq",
            features: [
                "Built a cross-platform mobile app (iOS/Android) that tracks 3 core macronutrients in real-time against personalized goals, using Azure MySQL Flexible Server to store user meal logs and retrieve up to 180+ days of history in under 1 second",
                "Integrated barcode scanning connected to a 500,000+ item food database via RESTful API, cutting meal logging time from ≈1 minute to under 10 seconds and displaying detailed nutritional breakdowns including protein, carbs, fats, fiber, and 15+ other key nutrients",
                "Implemented CI/CD pipelines with automated testing, deploying backend services to Azure App Service, enabling fully tested changes to go live in 1 minute, ensuring reliable production hosting"
            ]
        },
        {
            title: "Personal Portfolio",
            description: "A modern, responsive portfolio website showcasing my projects, skills, and experience.",
            technologies: ["React", "Vite", "CSS3", "JavaScript"],
            githubUrl: "https://github.com/dannymccarragher/Portfolio",
            features: [
                "Built with React and Vite for optimal performance and development experience.",
                "Responsive design with modern UI/UX principles.",
                "Modular component architecture for maintainability."
            ]
        },
        {
            title: "Assignment Buddy",
            description: "A full-stack simple and efficient tool designed to help students manage their assignments. With features like adding new assignments, viewing assignment details, sorting by priority, and checking past-due assignments",
            technologies: ["Node.js", "Express", "Mariadb", "EJS"],
            githubUrl: "https://github.com/dannymccarragher/Assignment-Buddy",
            features: [
                "RESTful API built with Node.js and Express.",
                "Mariadb database with proper schema design.",
                "EJS for server-side rendering of HTML templates."
            ]
        }
    ];

    return (
        <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0.5rem 1rem',
            textAlign: 'left'
        }}>
            <h2 style={{ margin: '0 0 0.8rem 0', textAlign: 'left', fontSize: '1.5em', fontWeight: '600' }}>Projects</h2>

            {projects.map((project, index) => (
                <div key={index} style={{
                    marginBottom: '1.5rem',
                    padding: '2rem',
                    background: '#F8FAFC',
                    borderRadius: '16px',
                    border: '1px solid rgba(37, 99, 235, 0.2)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Background decoration */}
                    <div style={{
                        position: 'absolute',
                        top: '-50px',
                        right: '-50px',
                        width: '100px',
                        height: '100px',
                        background: 'radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 70%)',
                        borderRadius: '50%'
                    }}></div>

                    <div style={{
                        position: 'relative',
                        zIndex: 1
                    }}>
                        <h3 style={{
                            margin: '0 0 0.5rem 0',
                            fontSize: '1.2em',
                            fontWeight: '600',
                            color: '#0F172A'
                        }}>
                            {project.title}
                        </h3>

                        {project.collaboration && (
                            <p style={{
                                margin: '0 0 0.8rem 0',
                                fontSize: '0.9em',
                                color: '#475569',
                                fontStyle: 'italic'
                            }}>
                                {project.collaboration}
                            </p>
                        )}

                        <p style={{
                            margin: '0 0 0.8rem 0',
                            fontSize: '0.9em',
                            color: '#0F172A',
                            lineHeight: '1.4'
                        }}>
                            {project.description}
                        </p>

                        <p style={{
                            margin: '0 0 0.8rem 0',
                            fontSize: '0.9em',
                            color: '#475569',
                            fontStyle: 'italic'
                        }}>
                            Technologies: {project.technologies.join(', ')}
                        </p>

                        {project.title !== "Forq" && (
                            <div style={{ marginBottom: '0.8rem' }}>
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.7rem',
                                        padding: '0.8rem 1.8rem',
                                        background: '#2563EB',
                                        color: 'white',
                                        textDecoration: 'none',
                                        borderRadius: '10px',
                                        fontSize: '1em',
                                        fontWeight: '600',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 4px 20px rgba(37, 99, 235, 0.3)',
                                        border: 'none',
                                        cursor: 'pointer'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = 'translateY(-2px)';
                                        e.target.style.boxShadow = '0 8px 30px rgba(37, 99, 235, 0.4)';
                                        e.target.style.background = '#1d4ed8';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = 'translateY(0)';
                                        e.target.style.boxShadow = '0 4px 20px rgba(37, 99, 235, 0.3)';
                                        e.target.style.background = '#2563EB';
                                    }}
                                >
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="#FFFFFF"
                                        style={{ marginRight: '0.3rem' }}
                                    >
                                        <path d={siGithub.path} />
                                    </svg>
                                    <span>GitHub</span>
                                </a>
                            </div>
                        )}

                        <ul style={{
                            margin: '0',
                            padding: '0 0 0 1rem',
                            fontSize: '0.95em',
                            color: '#0F172A',
                            lineHeight: '1.5'
                        }}>
                            {project.features.map((feature, featureIndex) => (
                                <li key={featureIndex} style={{ marginBottom: '0.5rem' }}>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Projects;
