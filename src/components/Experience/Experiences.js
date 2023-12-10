import uniqid from 'uniqid'
import { experiences } from '../../portfolio'
import './Experiences.css'
import ExperienceContainer from '../ExperienceContainer/ExperienceContainer'

const Experiences = () => {
  if (!experiences.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Experiences</h2>

      <div className='projects__grid'>
        {experiences.map((experience) => (
          <ExperienceContainer key={uniqid()} project={experience} />
        ))}
      </div>
    </section>
  )
}

export default Experiences
