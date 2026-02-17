import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';
import { SiJavascript } from "react-icons/si";

import profileImg from '../assets/profile.jpeg';
import projectImg1 from '../assets/project1.avif';//meri image lgni hai 
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';


export const assets = {
  profileImg,
}


export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: 'Innovative',
    description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
    color: 'text-purple'
  },
  {
    icon: FaPaintBrush,
    title: 'Design Oriented',
    description: 'Beautiful design and user experience are at the heart of everything I create.',
    color: 'text-pink'
  },
  {
    icon: FaCode,
    title: 'Clean Code',
    description: 'I write maintainable, efficient code following best practices and modern patterns.',
    color: 'text-blue'
  }
];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React', 'Tailwind.css',  ]
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express.js', 'RestFul APIs']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB','Mongoose']
  },
  {
    title: 'Languages',
    icon: SiJavascript,
    description: 'Writing dynamic, interactive, and efficient web applications using modern ES6+ features and also use other language',
  tags: ["JavaScript (ES6+)", "HTML5", "CSS3"]
  },
  // {
  //   title: 'Other Libraries',
  //   icon: FaCloud,
  //   description: 'A JavaScript library for building fast, interactive, and component-based user interfaces.',
  //   tags: ["CSS", "Bootstrap", "Material UI"]
  // },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ["Git", "Github", "Postman", "Netlify", "Figma", "Vercel"]
  }
];



// export const projects = [
//   {
//     title: "E-Commerce Platform",
//     description: "A full-featured online store with shopping cart, user authentication, and payment processing.",
//     image: projectImg1,
//     tech: ["React", "Node.js", "MongoDB", "Stripe"],
//     icons: [FaReact, FaNodeJs, FaDatabase, FaStripe],
//     demo: "#",
//     code: "#",
//   },
//   {
//     title: "Task Management App",
//     description: "A productivity application with drag-and-drop functionality and real-time updates.",
//     image: projectImg2,
//     tech: ["Vue.js", "Firebase", "Tailwind CSS", "WebSockets"],
//     icons: [FaVuejs, FaFire, FaCloud, FaDatabase],
//     demo: "#",
//     code: "#",
//   },
//   {
//     title: "Fitness Tracker",
//     description: "A mobile app for tracking workouts, nutrition, and health metrics.",
//     image: projectImg3,
//     tech: ["React Native", "GraphQL", "MySQL", "Chart.js"],
//     icons: [FaReact, FaDatabase],
//     demo: "#",
//     code: "#",
//   },
//   {
//     title: "Portfolio Website",
//     description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
//     image: projectImg4,
//     tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Markdown"],
//     icons: [FaReact, FaCloud],
//     demo: "#",
//     code: "#",
//   },
//   {Ecommerce. Project. 
//     title: "Chat App",
//     description: "A real-time chat application with group messaging, emojis, and file sharing.",
//     image: projectImg5,
//     tech: ["Socket.IO", "React", "Node.js", "MongoDB"],
//     icons: [FaReact, FaNodeJs, FaDatabase],
//     demo: "#",
//     code: "#",
//   },
//   {
//     title: "AI Image Generator",
//     description: "Generate images using AI prompts powered by OpenAI's DALL·E model and Cloudinary.",
//     image: projectImg6,
//     tech: ["React", "OpenAI API", "Cloudinary", "Tailwind CSS"],
//     icons: [FaRobot, FaReact, FaCloud],
//     demo: "#",
//     code: "#",
//   }
// ];


export const workData = [
  {
    role: "React.js Developer (Intern)",
    company: "Detechie.",
    duration: "Ausgust 2025 - Jan-2026",
    description:
      ` Developed production-ready, responsive single-page applications using React.js,     JavaScript (ES6+), and Tailwind CSS.
       Optimized UI components and fixed frontend bugs, improving performance and cross browser compatibility. 
        Integrated REST APIs and collaborated using Git and GitHub version control. 
        Solved 300+ output-based coding challenges, strengthening debugging and problem solving skills.`,
    color: "purple"
  },

];
