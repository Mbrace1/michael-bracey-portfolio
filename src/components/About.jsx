import React from 'react'
import Section from './generic/Section'

const About = ({text, name, jobTitle, tags}) => {

  return (
    <Section id={"about"} title={"About"}>
        <div>
            <h1 className='text-5xl font-bold dark:text-gray-100 mb-1'>{name}</h1>
            {jobTitle && (
                <p className='text-2xl text-gray-500 dark:text-gray-300 mb-3'>{jobTitle}</p>
            )}
            <div className='flex flex-wrap mb-4'>
                {tags.map(t => {
                    return (
                    <div className='p-2 mr-2 mb-1 bg-gray-200 dark:bg-gray-800 rounded-xl'>
                        <span className='text-2xl dark:text-gray-100 mb-4'>
                            {t}
                        </span>
                    </div>
                    )
                })}
            </div>
            <div className='text-2xl dark:text-gray-100'>
                {text}
            </div>
        </div>
    </Section>
  )
}

export default About