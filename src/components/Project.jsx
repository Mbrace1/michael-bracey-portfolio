import React from 'react'

const Project = ({name, summary, img, progress, link}) => {
    let has_img = img ? "" : false
    return (
        <div className='p-4'>
            <h3 className='section-header-2 mb-2 text-2xl font-bold'>{name}</h3>
            <p className='italic mb-1'>{progress}</p>
            <p className='mb-1'>{summary}</p>
            {has_img &&
            <img src={project_img} alt={summary} />
            }
            <p>Link to live project: <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href={link} target="_blank" rel="noopener noreferrer">{link}</a></p>
        </div>
    )
}

export default Project