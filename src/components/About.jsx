import React from 'react'
import { motion } from 'framer-motion'
import { aboutInfo, assets } from '../assets/assets'
import { div } from 'framer-motion/client'

const About = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className='py-20 bg-dark-200'
      id='about'>
      <div className="container mx-auto px-6">


        <h2 className='text-3xl font-bold text-center mb-4'>About
          <span className='text-purple'>
            Me
          </span></h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Get to know more about my background and passion </p>

        <div className='flex flex-col md:flex-row items-center gap-12'>
          <div className="md:w-1/2 rounded-2xl overflow-hidden">
            <motion.img
              initial={{ opecity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.2 }}
              className='w-full h-full object-cover'

              src={assets.profileImg} alt="profile" />
          </div>

          <motion.div
            initial={{ opecity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            className='md:w-1/2'>
            <div className="rounded 2xl p-8">
              <h3 className='text-2xl font-semibold mb-6'>My Journey</h3>
              <p className='text-gray-300 mb-6'>I am a passionate Full-Stack Developer who enjoys building modern, scalable, and user-focused web applications. My journey began with creating simple websites using HTML and CSS, and over time, it evolved into developing complete applications using modern frontend and backend technologies.</p>
              <p className='text-gray-300 mb-6' >I have worked on multiple self-driven projects that helped me gain a strong understanding of frontend frameworks, backend APIs, databases, and application flow. I focus on writing clean, maintainable code and creating smooth user experiences.</p>
              <p className='text-gray-300 mb-6' >I love learning new technologies, experimenting with ideas, and continuously improving my skills by building real-world projects. For me, development is not just about writing code, but about solving problems and creating meaningful digital experiences.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                {
                  aboutInfo.map((data, index) => (
                    <div key={index} className='bg-dark-300 rounded-2xl p-6 transition-tranform duration-300 hover:-translate-y-2 cursor-pointer'>
                      <div className="text-purple text-4xl mb-4  ">
                        <data.icon/>

                      </div>
                      <h3 className='text-xl font-semibold mb-3'>{data.title}</h3>
                      <p className='text-gray-400'  > {data.description}</p>
                    </div>
                  ))
                }


              </div>
            </div>


          </motion.div>

        </div>
      </div>

    </motion.div>
  )
}

export default About