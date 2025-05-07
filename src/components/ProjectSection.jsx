import React from 'react'
import Project from './Project'

const ProjectSection = ({projects, projects_title}) => {
    return (
    <section className='mb-2'>
        <h2 className='section-header-1 text-center text-3xl mb-2'>
            {projects_title}
        </h2>
            {projects.map((project, index) => {
            return <Project key={index}
            name={project.name} summary={project.summary} 
            progress={project.progress}
            img={project.img} link={project.link}/>
            })}
    </section>
    )
}

export default ProjectSection