import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaMapMarked, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {



    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className='min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]'
            id='contact'
        >
            <div className="container mx-auto px-6">
                <h2 className='text-3xl font-bold text-center mb-4'>
                    Get In
                    <span className='text-purple'>Touch</span>
                </h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Have a project in mind or want or went to collaborate? Let's talk!</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

                    <div>
                        <form className='space-y-6'>
                            <div>
                                <label htmlFor="name" className='block text-gray-300 mb-2'>Your Name</label>
                                <input type="Name" className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' />
                            </div>
                            <div>
                                <label htmlFor="email" className='block text-gray-300 mb-2'>Email address</label>
                                <input type="Email" className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' />
                            </div>
                            <div>
                                <label htmlFor="message" className='block text-gray-300 mb-2'>Your Message</label>
                                <textarea type="Message" className='w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' />
                            </div>
                            <button type='submit' className='w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer'>
                                Send
                            </button>
                        </form>
                    </div>


                    <div className='space-y-8'>
                        <div className="flex items-start">
                            <div className='text-purple text-2xl mr-4'>

                                <FaMapMarkerAlt className='' />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Location</h3>
                                <p className='text-gray-400'>Dwarka Mor, New Delhi-110059</p>
                            </div>
                        </div>

                        <div className='space-y-8'>
                            <div className="flex items-start">
                                <div className='text-purple text-2xl mr-4'>


                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h3 className='text-lg font-semibold mb-2'>Email</h3>
                                    <p className='text-gray-400'>deepuxd06@gmail.com</p>
                                </div>
                            </div>
                        </div>


                        <div className='space-y-8'>
                            <div className="flex items-start">
                                <div className='text-purple text-2xl mr-4'>

                                    <FaPhone />
                                </div>
                                <div>
                                    <h3 className='text-lg font-semibold mb-2'>Phone</h3>
                                    <p className='text-gray-400'>9990404319</p>
                                </div>
                            </div>

                            <div className='pt-4'>
                                <h3 className='text-lg font-semibold mb-4'>Follow Me</h3>
                                <div className="flex space-x-4 ">
                                    <a href="https://github.com/Deepukumarr" className='w-12 h-12 rounded-full bg-dark-400  flex items-center justify-center text-white hover:bg-dark-300'>
                                        <FaGithub />
                                    </a>

                                    {/* <a href="" className='w-12 h-12 rounded-full bg-dark-400  flex items-center justify-center text-white hover:text-blue-300'>
                                            <FaEnvelope/>
                                        </a> */}

                                    <a
                                        href="mailto:deepuxd06@gmail.com"
                                        className='w-12 h-12 rounded-full bg-dark-400 flex items-center justify-center text-white hover:text-blue-300'
                                    >
                                        <FaEnvelope />
                                    </a>

                                </div>
                            </div>

                        </div>





                    </div>


                </div>
            </div>



        </motion.div>
    )
}

export default Contact