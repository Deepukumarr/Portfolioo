// 



import React from 'react'
import { motion } from 'framer-motion'
import projectResume from '../assets/image1.jpeg'
import projectyt from "../assets/image2.jpeg"
import projectAI from "../assets/image3.jpeg"



const projects = [
  {
    title: "Learning Management System",
    description: "A platform for online courses with video lectures and quizzes.",
    image: projectyt,
    tech: [],
    demo: "",
    code: "",
  },
  {
    title: "E-commerce Website",
    description: "An E-commerce platform with product listings and shopping cart.",
    image: projectResume,
    tech: [],
    demo: "https://super-meringue-7a538f.netlify.app/",
    code: "https://github.com/Deepukumarr/Ecommerce",
  },
  {
       title: "Quick Chat App",
    description: "A real-time chat application with group messaging, emojis, and file sharing.",
    image: projectAI,
    tech: [],
    demo: "https://chat-app-client-eight-gold.vercel.app/login",
    code: "https://github.com/Deepukumarr/Chat-APP",
  }
]

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id="projects"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          My <span className="text-purple">Projects</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          A selection of my recent work
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-fitr"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-dark-400 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-purple rounded-lg font-medium hover:bg-purple-700 transition"
                  >
                    View Demo
                  </a>

                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 border border-purple rounded-lg font-medium hover:bg-purple/40 transition"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Projects
