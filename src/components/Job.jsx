import React from 'react'

const Job = (
    {company, job, start_date, end_date, 
        summary, highlights
    }) => {

    let date = `${start_date} - ${end_date}`;
    let role = `${job} at ${company}`
    return (
        <section className='p-2 md:p-4'>
            <h3 className='section-header-2 mb-2 text-2xl font-bold'>
                {role}
            </h3>
            <p className='italic mb-1'>{date}</p>
            <p className='mb-1'>{summary}</p>
            <ul className='list-disc ml-4'>
                {
                    highlights.map((duty, index) => {
                        return (
                        <li key={index}>
                            <p>{duty}</p>
                        </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default Job