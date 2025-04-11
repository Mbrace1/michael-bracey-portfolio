import { useState } from 'react'
import './App.css'
import CV from '../cv-data.json'
import ColumnLeft from "./components/ColumnLeft"
import ColumnRight from './components/ColumnRight'


function App() {

  return (
    <>
      <header className='p-2 border-b-2 border-b-stone-300 text-center'>
        <h1 className='text-3xl mb-2 font-bold'>{CV.name}</h1>
        <p className='mb-2'>{`${CV.email} | ${CV.telephone} | ${CV.address}`}</p>
        <p><b>{`I am a ${CV.job_title}.`}</b> {CV.summary_1}</p>
        <p>{`${CV.summary_2}`}</p>
      </header>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6'>
          <ColumnLeft 
          work_experience={CV.work_experience}
          work_title={"Work Experience"}
          projects={CV.projects}
          projects_title={"Projects"}/>
          <ColumnRight skills={CV.skills} education={CV.education}/>
      </div>
    </>
  )
}

export default App
