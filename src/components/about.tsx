import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { SERVICES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { pruthviGhibli } from "../assets";
import { p } from "framer-motion/client";

type ServiceCardProps = {
  index: number;
  title: string;
  icon: string;
};

// Service Card
const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return (
    <Tilt
  tiltMaxAngleX={45}
  tiltMaxAngleY={45}
  scale={1}
  transitionSpeed={450}
  className="xs:w-[250px] w-full"
>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

// About
export const About = () => {
  return (
    <SectionWrapper idName="about">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        {/* Body */}
        <motion.div
  variants={fadeIn(undefined, undefined, 0.1, 1)}
  className="mt-4 flex flex-col md:flex-row items-center md:items-start gap-8"
>
  <p className="text-secondary text-[17px] max-w-3xl leading-[30px]">
    I am an aspiring Software Engineer and full‑stack developer with a strong
    foundation in data structures, algorithms, and scalable system design. I
    enjoy building end‑to‑end products using React, Node.js, FastAPI, and
    modern DevOps practices, with a focus on clean architecture, testing, and
    monitoring. Through internships at NIF and ARTPARK (IISc), and projects
    ranging from geospatial routing apps to AI‑powered platforms, I’ve
    learned to take ownership of the entire lifecycle—from requirements and
    UX to deployment and telemetry. I love solving real‑world problems and
    collaborating with teams to ship reliable, user‑centric software.
  </p>

  <div className="shrink-0">
    <img
      src={pruthviGhibli}
      alt="Pruthvi Deepam"
      className="w-44 h-44 md:w-64 md:h-64 rounded-full object-cover border border-secondary/40 shadow-lg"
    />
  </div>
</motion.div>

        {/* Service Card */}
        <div className="mt-20 flex flex-wrap gap-10">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} index={i} {...service} />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};