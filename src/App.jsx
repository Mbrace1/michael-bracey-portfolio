import { useState } from 'react'
import './App.css'
import CV from '../cv-data.json'
import SkilsAndEducationSection from './components/SkilsAndEducationSection'
import WorkSection from './components/WorkSection'
import ProjectSection from './components/ProjectSection'

function App() {

  return (
    <>
      <header className='p-2 border-b-2 border-b-stone-300 text-center'>
        <h1 className='text-3xl mb-2 font-bold'>{CV.name}</h1>
        <p className='mb-2'>{`${CV.email} | ${CV.telephone} | ${CV.address}`}</p>
        <p>{CV.social.map((s) => {
          return <a className="mx-2 font-medium text-blue-600 dark:text-blue-500 hover:underline" 
          href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>
        })}
        </p>
        <p><b>{`I am a ${CV.job_title}.`}</b> {CV.summary_1}</p>
        <p>{`${CV.summary_2}`}</p>
      </header>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6'>
        
        <div className="lg:col-start-2 lg:col-span-2">
          <WorkSection
            work_experience={CV.work_experience}
            work_title={"Work Experience"}
          />
        </div>
       
       <div className="lg:col-span-2">
          <SkilsAndEducationSection
            skills={CV.skills}
            education={CV.education}
          />
        </div>

        <div className="lg:col-start-2 md:col-span-4">
          <ProjectSection
            projects={CV.projects}
            projects_title={"Projects"}
          />
        </div>
      </div>
    </>
  )
}

export default App
