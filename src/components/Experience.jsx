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
                flexDirection: 'column',
                gap: '1rem',
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
                        fontSize: '20px'
                    }}>

                    </div>
                    <div>
                        <div style={{ fontSize: '1.2em', fontWeight: '600', color: '#0F172A', marginBottom: '0.2rem' }}>
                            Nummo
                        </div>
                        <div style={{ fontSize: '1em', color: '#475569' }}>
                            Software Engineer Intern
                        </div>
                    </div>
                </div>

                <div>
                    <div style={{ fontSize: '0.9em', color: '#475569', fontWeight: '500', marginBottom: '0.1rem' }}>
                        JUN 2025 - SEP 2025
                    </div>
                    <p style={{
                        margin: '0',
                        fontSize: '0.95em',
                        color: '#0F172A',
                        lineHeight: '1.5'
                    }}>
                        Nummo is an AI-powered financial modeling platform that automates spreadsheet workflows for investment banking and private equity professionals
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Experience;