import Intro from './components/Intro'
import Education from './components/Education'
import Research from './components/Research'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import SocialDock from './components/SocialDock'
import Resume from './components/Resume'
import Leadership from './components/Leadership'
import ascii from './scripts/ascii'

function App() {

  ascii();
  
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
      <Skills />
      <Projects />
      <SocialDock />
      <Leadership />
      <Resume />
      
    </>
  )
}

export default App
