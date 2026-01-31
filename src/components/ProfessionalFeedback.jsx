const ProfessionalFeedback = () => {

    const feedback = [
        {
            name: "Paul Kim",
            title: "Founding Engineer @ Nummo",
            file: "/Danny Rec Letter.pdf",
            summary: `I am writing to recommend Daniel McCarragher, who worked with me at Nummo, an AI startup
building an AI-native spreadsheet for modern financial modeling. I am a Founding Engineer at Nummo, and I worked closely with Daniel for 3.5 months during a formative phase of our company.At the time, our engineering team consisted of two developers, and we were starting a major
architectural refactor. We had initially built much of the application with a Python backend, but as the product grew, we decided to migrate to a TypeScript architecture to better support a large, native application.`,
        }
    ]

    return (
        <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0.5rem 1rem',
            textAlign: 'left'
        }}>
            <h2 style={{ margin: '0 0 0.8rem 0', textAlign: 'left', fontSize: '1.5em', fontWeight: '600' }}>
                Professional Feedback
            </h2>

            {feedback.map((item, index) => (
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
                    }} />

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.5rem',
                            marginBottom: '1rem'
                        }}>
                            <h3 style={{
                                margin: '0',
                                fontSize: '1.3em',
                                fontWeight: '600',
                                color: '#0F172A'
                            }}>
                                {item.name}
                            </h3>
                            <p style={{
                                margin: '0',
                                fontSize: '1em',
                                color: '#475569',
                                fontWeight: '500'
                            }}>
                                {item.title}
                            </p>
                        </div>

                        {item.summary && (
                            <div style={{
                                marginBottom: '1.25rem',
                                padding: '0.75rem 1rem',
                                background: 'rgba(37, 99, 235, 0.06)',
                                borderRadius: '10px',
                                border: '1px solid rgba(37, 99, 235, 0.15)'
                            }}>
                                <p style={{
                                    margin: '0',
                                    fontSize: '0.9em',
                                    color: '#475569',
                                    lineHeight: '1.5',
                                    fontStyle: 'italic'
                                }}>
                                    {item.summary}
                                </p>
                            </div>
                        )}

                        <a
                            href={item.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="feedback-pdf-btn"
                        >
                            View Full Feedback
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProfessionalFeedback;