import grcLogo from '../assets/grc.jpg';

const Education = () => {
    return (
        <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0.5rem 1rem',
            textAlign: 'left'
        }}>
            <h2 style={{ margin: '0 0 0.8rem 0', textAlign: 'left', fontSize: '1.5em', fontWeight: '600' }}>Education</h2>

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
                                backgroundImage: `url(${grcLogo})`,
                                backgroundSize: 'cover',
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
                                    Green River College
                                </div>
                                <div style={{ fontSize: '1em', color: 'rgba(255, 255, 255, 0.7)' }}>
                                    B.A.S Software Development
                                </div>
                            </div>
                        </div>
                        <div style={{ fontSize: '1em', color: 'rgba(255, 255, 255, 0.7)' }}>
                            JAN 2023 - JUN 2026
                        </div>
                    </div>

                    <div style={{ marginLeft: '66px', marginTop: '0.5rem' }}>
                        <ul style={{
                            margin: '0',
                            padding: '0',
                            listStyle: 'none',
                            fontSize: '0.9em',
                            color: 'rgba(255, 255, 255, 0.6)'
                        }}>
                            <li style={{ marginBottom: '0.3rem' }}>• GPA: 3.9 (High Honors)</li>
                            <li style={{ marginBottom: '0.3rem' }}>• Dean's List: 4x Honoree (Fall 2023, Winter 2024, Fall 2024, Winter 2025)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;