

const Leadership = () => {

    const ACTIVITIES = [
        {
            title: "BoardMasters",
            membership: "Club Member",
            description: "Work with peers to solve weekly LeetCode problems focused on algorithms and data structures.",
            date: "SEP 2024 - Present"
        },
        {
            title: "Software Development Tutor",
            membership: "Green River College",
            description: "Provide tutoring in Software Development, assisting students with programming concepts and debugging",
            date: "SEP 2025 - Present"
        },
        {
            title: "Hockey Coach",
            membership: "Pierce County Parks & Rec",
            description: "Focus on player development, promoting skill improvement and sportsmanship",
            date: "AUG 2024 - Present"
        }
    ]

    return (
        <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0.5rem 1rem',
            textAlign: 'left'
        }}>
            <h2 style={{ margin: '0 0 0.8rem 0', textAlign: 'left', fontSize: '1.5em', fontWeight: '600' }}>Leadership</h2>

            {ACTIVITIES.map((activity, index) => (
                <div key={index} style={{
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
                            <div>
                                <h3 style={{
                                    margin: '0 0 0.3rem 0',
                                    fontSize: '1.3em',
                                    fontWeight: '600',
                                    color: 'white'
                                }}>
                                    {activity.title}
                                </h3>
                                <p style={{
                                    margin: '0',
                                    fontSize: '1em',
                                    color: 'rgba(255, 255, 255, 0.7)',
                                    fontWeight: '500'
                                }}>
                                    {activity.membership}
                                </p>
                            </div>
                            <div style={{
                                fontSize: '0.9em',
                                color: 'rgba(255, 255, 255, 0.6)',
                                fontWeight: '500',
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                padding: '0.3rem 0.7rem',
                                borderRadius: '6px',
                                border: '1px solid rgba(255, 255, 255, 0.2)'
                            }}>
                                {activity.date}
                            </div>
                        </div>

                        <p style={{
                            margin: '0',
                            fontSize: '0.95em',
                            color: 'rgba(255, 255, 255, 0.8)',
                            lineHeight: '1.5'
                        }}>
                            {activity.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Leadership;