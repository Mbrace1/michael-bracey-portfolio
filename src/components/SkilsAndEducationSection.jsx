import React from 'react'

const SkilsAndEducationSection = ({skills, education, interests}) => {
    return (
        <section className='md:pt-6 md:border-l-2 md:border-l-stone-300 md:ps-2'>
            <h3 className='section-header-1 text-center text-3xl mb-2'>Skills</h3>
            <ul className='content p-2 md:p-4 flex flex-wrap'>
                {skills.map((skill, index) => {
                    return (
                        <li key={index} className='border-2 border-stone-300 m-1 p-2'>
                            {skill.name}
                        </li>
                    )
                })}
            </ul>
            <h3 className='section-header-1 text-center text-3xl mb-2'>Education</h3>
            <div className='content p-2 md:p-4'>
                <ul className='content p-2 md:p-4'>
                    {education.map((ed, index) => {

                        let date = `${ed.start_date} - ${ed.end_date}`;
                        return (
                            <li key={index} className='mb-4'>
                                <h4 className='font-bold mb-2'>{ed.name}</h4>
                                <p className='italic mb-1'>{date}</p>
                                <p>{ed.summary}</p>
                            </li>

                        )
                    })}
                </ul>
            </div>
            
            {/* <h3 className='section-header-1 text-center text-3xl mb-2'>Interests</h3>
            <ul className='content p-4'>
                {interests.map((skill) => {
                    return (
                        <li>{skill}</li>
                    )
                })}
            </ul> */}

        </section>
    )
}

export default SkilsAndEducationSection