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
    )
}

export default Experience;