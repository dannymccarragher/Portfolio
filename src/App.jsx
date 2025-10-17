import Intro from './components/Intro'
import Education from './components/Education'
import Research from './components/Research'
import Experience from './components/Experience'

function App() {

  return (
    <>
      {/* Animated Starfield Background */}
      <div className="stars"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>

      <Intro />
      <Education />
      <Experience />
      <Research />
    </>
  )
}

export default App
