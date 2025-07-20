import React from 'react'
import Section from './generic/Section'

const About = ({text, name, tags}) => {
    
  return (
    <Section id={"about"} title={"About"}>
        <div>
            <h2 className='text-5xl font-bold dark:text-gray-100 mb-2'>{name}</h2>
            <div className='flex flex-wrap mb-4'>
                {tags.map(t => {
                    return (
                    <div className='p-2 mr-2 mb-1 bg-gray-200 dark:bg-gray-700 rounded-xl'>
                        <span className='text-2xl font-bold dark:text-gray-100 mb-4'>
                            {t}
                        </span>
                    </div>
                    )
                })}
            </div>
            <div className='text-2xl font-bold dark:text-gray-100'>
                {text}
            </div>
        </div>
    </Section>
  )
}

export default About