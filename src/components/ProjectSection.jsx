import React from 'react'

const ProjectSection = ({name, summary, img, start_date, end_date, link}) => {
    let date = `${start_date} - ${end_date}`;
    let has_img = img ? "" : false
    return (
        <div className='mb-4'>
            <h3 className='section-header-2 mb-2 text-2xl font-bold'>{name}</h3>
            <p className='italic mb-1'>{date}</p>
            <p className='mb-1'>{summary}</p>
            {has_img &&
            <img src={project_img} alt={summary} />
            }
            <p>{link}</p>
        </div>
    )
}

export default ProjectSection