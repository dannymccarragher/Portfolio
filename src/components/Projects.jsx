import { siGithub, siReact, siNodedotjs, siPython, siOpenjdk, siNextdotjs, siExpress, siPostgresql, siDocker } from 'simple-icons';

const Projects = () => {
    const projects = [
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
                    background: 'linear-gradient(135deg, rgba(100, 108, 255, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                    borderRadius: '16px',
                    border: '1px solid rgba(100, 108, 255, 0.2)',
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
                        background: 'radial-gradient(circle, rgba(100, 108, 255, 0.1) 0%, transparent 70%)',
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
                            color: 'white'
                        }}>
                            {project.title}
                        </h3>

                        {project.collaboration && (
                            <p style={{
                                margin: '0 0 0.8rem 0',
                                fontSize: '0.9em',
                                color: 'rgba(255, 255, 255, 0.7)',
                                fontStyle: 'italic'
                            }}>
                                {project.collaboration}
                            </p>
                        )}

                        <p style={{
                            margin: '0 0 0.8rem 0',
                            fontSize: '0.9em',
                            color: 'rgba(255, 255, 255, 0.8)',
                            lineHeight: '1.4'
                        }}>
                            {project.description}
                        </p>

                        <p style={{
                            margin: '0 0 0.8rem 0',
                            fontSize: '0.9em',
                            color: 'rgba(255, 255, 255, 0.7)',
                            fontStyle: 'italic'
                        }}>
                            Technologies: {project.technologies.join(', ')}
                        </p>

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
                                    background: 'linear-gradient(135deg, #646cff 0%, #764ba2 100%)',
                                    color: 'white',
                                    textDecoration: 'none',
                                    borderRadius: '10px',
                                    fontSize: '1em',
                                    fontWeight: '600',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 4px 20px rgba(100, 108, 255, 0.3)',
                                    border: 'none',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'translateY(-2px)';
                                    e.target.style.boxShadow = '0 8px 30px rgba(100, 108, 255, 0.4)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'translateY(0)';
                                    e.target.style.boxShadow = '0 4px 20px rgba(100, 108, 255, 0.3)';
                                }}
                            >
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill={`#${siGithub.hex}`}
                                    style={{ marginRight: '0.3rem' }}
                                >
                                    <path d={siGithub.path} />
                                </svg>
                                <span>GitHub</span>
                            </a>
                        </div>

                        <ul style={{
                            margin: '0',
                            padding: '0 0 0 1rem',
                            fontSize: '0.95em',
                            color: 'rgba(255, 255, 255, 0.8)',
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
