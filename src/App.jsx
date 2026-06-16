import CV from '../cv-data.json'
import Navbar from './components/Navbar'
import ProjectSection from './components/ProjectSection'
import About from './components/About'

function App() {

  return (
    <>
      <Navbar/>
      <About text={CV.about} name={CV.name} jobTitle={CV.job_title} tags={CV.tags}/>
      <ProjectSection projects={CV.projects}/>
    </>
  )
}

export default App
