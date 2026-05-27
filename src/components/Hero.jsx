import React from 'react'
import { motion } from 'framer-motion'
import TypeWriter from './Typewriter'
import { assets } from '../assets/assets'
import resume from "../assets/resume.pdf"

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className='min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]'
      id='home'
    >

      <div className="container mx-auto px-6 flex flex-col md:flex-row items justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0 ">
          <h1 className='text-4xl md:text-7xl font-semibold mb-4 '>
            Hi, I'm <br /><span className='text-purple'>Deepu Kumar</span>
          </h1>
     
          <TypeWriter />
          <p className='text-lg text-gray-300 mb-8'>I create stunning web experience with modern 
            technologies and innovative Design</p>

          <div className="flex space-x-4">
            <a href="#projects" className='px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300'>View work</a>
            <a href={resume} className='px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition decoration-purple-300'>Resume</a>

          </div>

        </div>


        <div className="md:w-1/2 flex justify-center">
        <div className='relative w-64 h-64 md:w-80 md:h-80'>
          <div className='absolute inset-0 rounded-full bg-gradient-to-r from-purple to-pinkopacity-70'>
         <motion.img 
         animate={{y:[0,-20,0]}}
         transition={{
          duration:4,
          repeat:Infinity,
          repeatType:"loop",
          ease:"easeOut"
         }}
         className='relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10 animate-float' 
         src={assets.profileImg}/>

          </div>
           </div>
        </div>
      </div>

    </motion.div>
  )
}

export default Hero