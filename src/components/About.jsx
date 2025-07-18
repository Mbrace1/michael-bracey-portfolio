import React from 'react'
import Section from './generic/Section'

const About = ({text, name, tags}) => {
    
  return (
    <Section id={"about"} title={"About"}>
        <div>
            <h2>{name}</h2>
            <h3>
                {tags}
            </h3>
            <div>
                {text}
            </div>
        </div>
    </Section>
  )
}

export default About