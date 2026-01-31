

import { siJavascript, siTypescript, siReact, siNodedotjs, siPython, siOpenjdk, siGithub, siNextdotjs, siExpress, siPostgresql, siMariadb, siDocker, siGit, siElectron, siMysql } from 'simple-icons';

const Skills = () => {
    const skills = [
        { name: 'Java', icon: siOpenjdk },
        { name: 'JavaScript', icon: siJavascript },
        { name: 'TypeScript', icon: siTypescript },
        { name: 'React', icon: siReact },
        { name: 'Node.js', icon: siNodedotjs },
        { name: 'Python', icon: siPython },
        { name: 'MySQL', icon: siMysql },
        { name: 'Next.js', icon: siNextdotjs },
        { name: 'Express', icon: siExpress },
        { name: 'PostgreSQL', icon: siPostgresql },
        { name: 'MariaDB', icon: siMariadb },
        { name: 'Docker', icon: siDocker },
        { name: 'Git', icon: siGit },
        { name: 'GitHub', icon: siGithub },
        { name: 'Electron', icon: siElectron }
    ];

    return (
        <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0.5rem 1rem',
            textAlign: 'left'
        }}>
            <h2 style={{ margin: '0 0 1rem 0', textAlign: 'left', fontSize: '1.5em', fontWeight: '600' }}>Skills</h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '0.8rem',
                marginBottom: '1rem'
            }}>
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.6rem 0.8rem',
                            backgroundColor: '#F8FAFC',
                            borderRadius: '8px',
                            fontSize: '0.9em',
                            fontWeight: '500',
                            color: '#0F172A',
                            transition: 'all 0.2s ease',
                            cursor: 'default',
                            border: '1px solid rgba(37, 99, 235, 0.1)'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = 'rgba(37, 99, 235, 0.1)';
                            e.target.style.transform = 'translateY(-1px)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#F8FAFC';
                            e.target.style.transform = 'translateY(0)';
                        }}
                    >
                        <span style={{
                            fontSize: '1.1em',
                            fontWeight: '600',
                            minWidth: '20px',
                            textAlign: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill={`#${skill.icon.hex}`}
                                style={{ marginRight: '0.3rem' }}
                            >
                                <path d={skill.icon.path} />
                            </svg>
                        </span>
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills;