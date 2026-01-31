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
                        backgroundImage: `url(${grcLogo})`,
                        backgroundSize: 'cover',
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
                            Green River College
                        </div>
                        <div style={{ fontSize: '1em', color: '#475569' }}>
                            B.A.S Software Development
                        </div>
                    </div>
                </div>

                <div style={{ fontSize: '0.9em', color: '#475569', fontWeight: '500' }}>
                    JAN 2023 - JUN 2026
                </div>

                <div style={{ marginTop: '0.5rem' }}>
                    <ul style={{
                        margin: '0',
                        padding: '0',
                        listStyle: 'none',
                        fontSize: '0.9em',
                        color: '#475569'
                    }}>
                        <li style={{ marginBottom: '0.3rem' }}>• GPA: 3.9 (High Honors)</li>
                        <li style={{ marginBottom: '0.3rem' }}>• Dean's List: 4x Honoree (Fall 2023, Winter 2024, Fall 2024, Winter 2025)</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Education;