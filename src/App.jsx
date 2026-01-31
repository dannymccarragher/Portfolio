import Intro from './components/Intro'
import Education from './components/Education'
import Research from './components/Research'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import SocialDock from './components/SocialDock'
import Resume from './components/Resume'
import Leadership from './components/Leadership'
import ProfessionalFeedback from './components/ProfessionalFeedback'
import ascii from './scripts/ascii'

function App() {

  ascii();
  
  return (
    <>
      <Intro />
      <Education />
      <Experience />
      <ProfessionalFeedback />
      <Research />
      <Skills />
      <Resume />
      <Projects />
      <SocialDock />
      <Leadership />
      
    </>
  )
}

export default App
