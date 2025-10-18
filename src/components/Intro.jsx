import danny from '../assets/danny.jpg';

const Intro = () => {

    return (
        <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '1rem 1rem',
            textAlign: 'left'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <h1 style={{ margin: 0 }}>Hi, I'm Daniel 👋</h1>
                <img src={danny} alt="Daniel" style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    objectFit: 'cover'
                }} />
            </div>


            <h2 style={{ margin: '0 0 0.3rem 0', textAlign: 'left' }}>About</h2>
            <p style={{ margin: '0 0 1rem 0', textAlign: 'left' }}>
                Sales Professional turned Software Development student at Green River College with a passion for building efficient, user-focused applications. I enjoy working on full-stack projects and collaborating with others to solve meaningful problems. 
                Outside of coding, I spend my time coaching hockey and enjoying the beauty of the Pacific Northwest, while always looking for ways to grow both personally and professionally.
            </p>
        </div>
    )
}

export default Intro;