import React from 'react'
import WorkSection from './WorkSection'
import ProjectSection from './ProjectSection'

const ColumnLeft = ({work_experience, work_title, projects, projects_title}) => {
    return (
      <main className='pt-6 grid lg:col-start-2 lg:col-span-3'>
        <section className='mb-2'>
          <h2 className='section-header-1 text-center text-3xl mb-2'>
            {work_title}
          </h2>
          {work_experience.map((work, index) => {
            return <WorkSection key={index}
            company={work.company} job={work.job} 
            start_date={work.start_date} end_date={work.end_date} 
            summary={work.summary} highlights={work.highlights}/>
          })}
        </section>
        <section className='mb-2'>
          <h2 className='section-header-1 text-center text-3xl mb-2'>
              {projects_title}
          </h2>
          {projects.map((project, index) => {
            return <ProjectSection key={index}
            name={project.name} summary={project.summary} 
            start_date={project.start_date} end_date={project.end_date} 
            img={project.img} link={project.link}/>
          })}
        </section>
    </main>
    )
}

export default ColumnLeft