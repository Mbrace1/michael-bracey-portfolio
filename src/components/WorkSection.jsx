import React from 'react'
import Job from './Job'

const WorkSection = ({work_experience, work_title}) => {
    return (
        <section className='pt-6 mb-2'>
            <h2 className='section-header-1 text-center text-3xl mb-2'>
                {work_title}
            </h2>
                {work_experience.map((work, index) => {
                return <Job key={index}
                company={work.company} job={work.job} 
                start_date={work.start_date} end_date={work.end_date} 
                summary={work.summary} highlights={work.highlights}/>
                })}
        </section>
    )
}

export default WorkSection