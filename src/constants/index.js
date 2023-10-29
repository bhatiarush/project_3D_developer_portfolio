import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  smallcase,
  starbucks,
  tesla,
  webknot,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  cyberflow,
  mui,
  bootstrap,
  mernfitness,
  utubeclone,
  photogram,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

// const services = [
//   {
//     title: "Web Developer",
//     icon: web,
//   },
//   {
//     title: "React Native Developer",
//     icon: mobile,
//   },
//   {
//     title: "Backend Developer",
//     icon: backend,
//   },
//   {
//     title: "Content Creator",
//     icon: creator,
//   },
// ];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material UI",
    icon: mui,
  },
  {
    name: "Bootstrap CSS",
    icon: bootstrap,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Frontend Developer Intern",
    company_name: "smallcase",
    icon: smallcase,
    iconBg: "white",
    date: "Aug 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to contribute to their products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Webknot Technologies Pvt Ltd",
    icon: webknot,
    iconBg: "white",
    date: "May 2023 - Aug 2023",
    points: [
      "Developing the client applications using React.js and typescript.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design, suitable for client and ensuring cross-browser compatibility.",
      "Contributing to framing documentary and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "CyberFlow",
    icon: cyberflow,
    iconBg: "white",
    date: "Feb 2023 - Apr 2023",
    points: [
      "Developing and maintaining their dashboard using React.js and Material-UI.",
      "Collaborating with senior developers to create high-quality product.",
      "Implementing responsive design.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Arush have been consistent in delivering the tasks provided to him within the stipulated time alloted. He has been a good debugger as well for resolving bugs.",
    name: "Sumanth Hegde",
    designation: "Senior Full stack developer",
    company: "Webknot Technologies",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I am happy to have worked with Arush as a fellow-developer. He brings fresh ideas and views in the team, and is always ready to take up the challenging tasks.",
    name: "Ayan Srivastava",
    designation: "Senior Front end developer",
    company: "Webknot Technologies",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Arush has been very consistent in serving the requirements of a fast-paced environment. He is very curious to learn and explore new things in development.",
    name: "Harsha",
    designation: "Manager",
    company: "Webknot Technologies",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "FITNESS APP",
    description:
      "A CRUD application that helps users organize their exercise schedules.",
    tags: [
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "white",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
    ],
    image: mernfitness,
    source_code_link: "https://github.com/bhatiaji27/mern-app",
  },
  {
    name: "YouTube Clone App",
    description:
      "A clone of the YouTube app built using React that fetches latest feed to your screen.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "white",
      },
      {
        name: "material-ui",
        color: "green-text-gradient",
      },
    ],
    image: utubeclone,
    source_code_link: "https://github.com/bhatiaji27/yt_clone",
  },
  {
    name: "Photo-gram Feed App",
    description:
      "A Next.js web application that serves the latest feed and user profiles from an API.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "white",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: photogram,
    source_code_link: "https://github.com/bhatiaji27/feed_assgn",
  },
];

export { technologies, experiences, testimonials, projects };
