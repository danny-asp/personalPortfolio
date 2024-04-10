
import { Tilt } from 'react-tilt'
import {motion} from "framer-motion"

import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn, textVariant} from "../utils/motion.js"

import SectionWrapper from '../hoc/SectionWrapper.jsx'

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);



const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[1.5rem] max-w-3xl leading-[2.5rem] pl-[1rem]'>
 I'm a Frontend Developer with a twist of hospitality expertise. Formerly a Chief Concierge at Sofia's top 5-star hotel, I've transitioned seamlessly into crafting captivating digital experiences.

In my role as a Junior Frontend Developer, I've immersed myself in React and React Native projects, mastering responsive UI design and expanding into backend technologies like Node.js. With a solid foundation from an intensive internship, I bring a blend of creativity, technical skill, and a knack for effective communication to every project.

Join me in exploring the intersection of technology and hospitality, where every pixel tells a story of innovation and impeccable service.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((serviceItem, index)=>(
          <ServiceCard key={serviceItem.title} index={index} {...serviceItem}/>
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(About, "about");