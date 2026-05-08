// Contains constant data for using in website
// ! Don't remove anything from here if not sure

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
  fastapi,
  docker,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
  nif,
  artpark,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI / ML Enthusiast",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "fastapi",
    icon: fastapi,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Software Engineering Intern",
    company_name: "National Innovation Foundation (NIF), India",
    icon: nif,
    iconBg: "#ffffff",
    date: "August 2025 - Present",
    points: [
      "Developed and maintained an Inventory Management System automating item tracking, reducing manual errors by 40% and reporting time by 60%.",
      "Implemented secure authentication & authorization workflows safeguarding operations for 100+ active users.",
      "Designed real-time dashboards for monitoring KPIs such as stock levels, approvals, and growth trends, improving decision-making efficiency.",
      "Engineered a Farmer's Decision-Making System using multi-criteria decision modeling with real-time data feeds, improving data processing efficiency by 35%.",
      "Applied machine learning models for knowledge extraction and predictive analytics for crop productivity and resource optimization.",
    ],
  },
  {
    title: "Robotics Intern",
    company_name: "ARTPARK - AI & Robotics Technology Park, IISc",
    icon: artpark,
    iconBg: "#E6DEDD",
    date: "June 2024 - August 2024",
    points: [
      "Applied distributed computing and autonomous navigation algorithms, optimizing routing and real-time telemetry for 3+ robotics prototypes.",
      "Enhanced object detection through advanced debugging and metrics-driven monitoring, achieving 30% higher precision and 45% fewer anomalies.",
      "Integrated SLAM, LIDAR, and API-driven mapping, building dashboards to track performance indicators and ensure secure data transfer.",
      "Collaborated in daily Agile (SCRUM) routines, owned sprints from planning to deployment, and increased system reliability by 25%.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "Pruthvi built our inventory system from scratch — clean code, great communication, and delivered ahead of schedule.",
    name: "NIF Mentor",
    designation: "Senior Researcher",
    company: "National Innovation Foundation",
    image: user1,
  },
  {
    testimonial:
      "His work on our robotics navigation stack was impressive. He picked up complex algorithms quickly and contributed meaningfully.",
    name: "ARTPARK Supervisor",
    designation: "Research Lead",
    company: "IISc ARTPARK",
    image: user2,
  },
  {
    testimonial:
      "Pruthvi is a self-driven developer who takes ownership of projects end-to-end. His full-stack skills are solid for someone still in college.",
    name: "Academic Mentor",
    designation: "Professor",
    company: "Atria Institute of Technology",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Task API – FastAPI Microservice",
    description:
      "A secure RESTful microservice with 99.9% uptime, 15+ API endpoints tested with Pytest and documented via Swagger, achieving sub-100ms latency for all CRUD operations monitored via Prometheus.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "sqlite",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/pruthvideepam",
    live_site_link: "https://github.com/pruthvideepam",
  },
  {
    name: "BlabAI – Prompt Response Generator",
    description:
      "A secure, scalable AI chat platform with OAuth2/Google Sign-In, leveraging OpenRouter API for LLM-powered responses with mean response time under 70ms, increasing session time by 60%.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "streamlit",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/pruthvideepam",
    live_site_link: "https://github.com/pruthvideepam",
  },
  {
    name: "Shortest Path Navigation App",
    description:
      "A full-stack geospatial routing web app processing 10,000+ daily requests with CI/CD and zero downtime releases. Decreased page load by 35% using code splitting and full test automation pipeline.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "leaflet.js",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/pruthvideepam/shortest-path-frontend",
    live_site_link: "https://shortest-path-frontend.vercel.app/",
  },
  {
    name: "NIF Inventory Management System",
    description:
      "An inventory management system for NIF automating item tracking, order processing, and supplier management. Migrated legacy Excel data and built real-time KPI dashboards for 100+ active users.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/pruthvideepam",
    live_site_link: "https://github.com/pruthvideepam",
  },
  {
    name: "SmartCall-Agent",
    description:
      "An AI-enabled automated communication system for educational institutions using n8n workflows, voice AI, and Google APIs to automate outbound calling and student engagement.",
    tags: [
      {
        name: "n8n",
        color: "blue-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
      {
        name: "google-apis",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/pruthvideepam",
    live_site_link: "https://github.com/pruthvideepam",
  },
] as const;

export const SOCIALS = [
  {
    name: "YouTube",
    icon: youtube,
    link: "https://www.youtube.com/@pruthvideepam",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/pruthvideepam",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://x.com/DeepamPruthvi",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/pruthvideepam",
  },
] as const;