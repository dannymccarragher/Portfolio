import nummoLogo from '../assets/logo.png';
const Experience = () => {
    return (
        <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0.5rem 1rem',
            textAlign: 'left'
        }}>
            <h2 style={{ margin: '0 0 0.8rem 0', textAlign: 'left', fontSize: '1.5em', fontWeight: '600' }}>Experience</h2>

            <div style={{
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
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '1rem'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                backgroundImage: `url(${nummoLogo})`,
                                backgroundSize: '103%',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '20px',
                                color: 'white'
                            }}>

                            </div>
                            <div>
                                <div style={{ fontSize: '1.2em', fontWeight: '600', color: 'white', marginBottom: '0.2rem' }}>
                                    Nummo
                                </div>
                                <div style={{ fontSize: '1em', color: 'rgba(255, 255, 255, 0.7)' }}>
                                    Software Engineer Intern
                                </div>
                            </div>
                        </div>
                        <div style={{ fontSize: '1em', color: 'rgba(255, 255, 255, 0.7)' }}>
                            JUN 2025 - SEP 2025
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;