import React from 'react'
import { motion } from 'framer-motion'
import { skills as skillsData } from '../assets/assets'
import { span } from 'framer-motion/client'

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id='skills'
      className='py-20 bg-dark-100'
    >
      <div className="container mx-auto px-6">
        <h2 className='text-3xl font-bold text-center mb-4'>
          My <span className='text-purple'>Skills</span>
        </h2>

        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
          Technologies I work with to bring ideas to life
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* {skillsData.map((skill, index) => (
            <div
              key={index}
              className='bg-dark-300 rounded-2xl p-6 transition duration-300 hover:scale-105 cursor-pointer'
            >
              <skill.icon className='text-4xl text-purple mb-4' />
              <h3 className='text-xl font-semibold mb-2'>{skill.title}</h3>
              <p className='text-gray-400 text-sm'>{skill.description}</p>
              <div>{skill.tags.map((tech)=>(
                <span></span>
              ))}</div>

            </div>
          ))} */}
          {skillsData.map((skill, index) => (
  <div
    key={index}
    className="bg-dark-300 rounded-2xl p-6 transition duration-300 hover:scale-105"
  >

    <skill.icon className="text-4xl text-purple mb-4" />


    <h3 className="text-xl font-semibold mb-2">
      {skill.title}
    </h3>

    <p className="text-gray-400 text-sm mb-4">
      {skill.description}
    </p>

    <div className="flex flex-wrap gap-2">
      {skill.tags.map((tag, i) => (
        <span
          key={i}
          className="text-x bg-dark-400  text-white px-3 py-1 font-weight-2 rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
))}
        </div>
      </div>
    </motion.div>
  )
}

export default Skills
