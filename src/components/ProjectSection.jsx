import React, {useState} from 'react'
import Project from './Project'
import Section from './generic/Section'
import Card from './generic/Card'

const ProjectSection = ({projects}) => {
    const [flippedProject, setFlippedProject] = useState(null)

    function handleFlip(idx) {
        setFlippedProject(prev => prev === idx ? null : idx)
    }

    return (
        <Section id={"projects"} title={"Projects"}>
            <div className='flex flex-row flex-wrap justify-center'>
                {projects.map((p, idx) => {
                    return (
                    <div className='w-full lg:w-1/2 p-4'>
                        <Card key={idx}>
                            <Project 
                            name={p.name}
                            summary={p.summary}
                            img={p.img}
                            progress={p.progress}
                            link={p.link}
                            tags={p.tags}
                            flipped={flippedProject === idx}
                            onFlip={() => handleFlip(idx)}
                            />
                        </Card>
                    </div>
                    )
                })}
            </div>
        </Section>
    )
}

export default ProjectSection