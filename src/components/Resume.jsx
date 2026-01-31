import { File } from 'lucide-react';

const Resume = () => {
    return (
        <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0.5rem 1rem',
            textAlign: 'left'
        }}>
            <h2 style={{ margin: '0 0 1.2rem 0', textAlign: 'left', fontSize: '1.5em', fontWeight: '600' }}>Resume</h2>

            <div style={{
                marginBottom: '1rem',
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
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        marginBottom: '1.5rem'
                    }}>
                        <div style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '12px',
                            background: '#2563EB',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.5rem',
                            boxShadow: '0 4px 15px rgba(37, 99, 235, 0.3)',
                            color: 'white'
                        }}>
                            <File />
                        </div>
                        <div>
                            <h3 style={{
                                margin: '0 0 0.3rem 0',
                                fontSize: '1.3em',
                                fontWeight: '600',
                                color: '#0F172A'
                            }}>
                                Resume
                            </h3>
                            <p style={{
                                margin: '0',
                                fontSize: '0.9em',
                                color: '#475569'
                            }}>
                                PDF Document • Updated February 2026
                            </p>
                        </div>
                    </div>

                    <p style={{
                        margin: '0 0 1.5rem 0',
                        fontSize: '1em',
                        color: '#0F172A',
                        lineHeight: '1.6'
                    }}>
                        Resume featuring my work experience, technical skills,
                        educational background, and professional achievements.
                    </p>

                    <div style={{
                        display: 'flex',
                        gap: '1rem',
                        alignItems: 'center'
                    }}>
                        <a
                            href="/Daniel McCarragher Resume.pdf"
                            target='_blank'
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
                            <span>Download Resume</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;