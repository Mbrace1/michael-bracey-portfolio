import React from 'react'
import Job from './Job'
import Section from './generic/Section'

const WorkSection = ({work_experience}) => {
    return (
        <Section id={"work"} title={"Work"}>
        {work_experience.map(w => {
            return (
                <Section title={w.job + " at " + w.company} id={w.company}>
                    test
                </Section>
            )
        })}
        <div>timeline css</div>
        </Section>
    )
}

export default WorkSection