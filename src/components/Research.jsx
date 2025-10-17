import { siGithub } from 'simple-icons';

const Research = () => {

    return (
        <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0.5rem 1rem',
            textAlign: 'left'
        }}>
            <h2 style={{ margin: '0 0 0.8rem 0', textAlign: 'left', fontSize: '1.5em', fontWeight: '600' }}>Research</h2>

            <div style={{
                marginBottom: '1rem',
                padding: '1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
                <h3 style={{
                    margin: '0 0 0.5rem 0',
                    fontSize: '1.2em',
                    fontWeight: '600',
                    color: 'white'
                }}>
                    Salamander Tracker
                </h3>

                <p style={{
                    margin: '0 0 0.8rem 0',
                    fontSize: '0.9em',
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontStyle: 'italic'
                }}>In Collaboration with The Ohio State University</p>

                <p style={{
                    margin: '0 0 0.8rem 0',
                    fontSize: '0.9em',
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontStyle: 'italic'
                }}>
                    Technologies: React, Next.js, Docker, Maven, Java, JavaCV, REST API, Postman
                </p>

                <div style={{ marginBottom: '0.8rem' }}>
                    <a
                        href="https://github.com/Jameson789/salamander-next"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.5rem 1rem',
                            backgroundColor: 'rgba(100, 108, 255, 0.2)',
                            color: '#646cff',
                            textDecoration: 'none',
                            borderRadius: '6px',
                            fontSize: '0.9em',
                            fontWeight: '500',
                            border: '1px solid rgba(100, 108, 255, 0.3)',
                            transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-1px)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0)';
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
                    <li style={{ marginBottom: '0.5rem' }}>
                        Developed a full-stack video processing application using Next.js and React for tracking salamander movement through centroid detection and coordinate output.
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                        Processes video frames using image binarization and graph search algorithms to find connected pixels, identifying the largest matching region and its centroid, with a RESTful API for video processing.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Research;