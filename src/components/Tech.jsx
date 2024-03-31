import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants/constants'

const Tech = ({ isMobile }) => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {
        isMobile
          ? (
            technologies.map(technology => (
              <div className="w-28 h-28" key={technology.name}>
                <img src={technology.icon} />
              </div>
            ))
          )
          : (
            technologies.map(technology => (
              <div className="w-28 h-28" key={technology.name}>
                <BallCanvas icon={technology.icon} />
              </div>
            ))
          )
      }
    </div >
  )
}

export default SectionWrapper(Tech, '')