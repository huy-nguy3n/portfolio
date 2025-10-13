import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Keysight from '../assets/img/kslogo.png';
import Integem from '../assets/img/intelogo.png';
import UCSC from '../assets/img/ucsc.png';
import GT from '../assets/img/GeorgiaTech.png'

const experiences = [
  {
    title: "M.S Computer Science",
    company: "Georgia Institute of Technology",
    date: "September 2025 - Present",
    description: "Specialization in AI and Machine Learning",
    icon: GT,
    backgroundColor: "#f9f9f9",
  },
  {
    title: "R&D Software Engineer II",
    company: "Keysight Technologies",
    date: "July 2024 - Present",
    description: "Specialized in AI and system automation, collaborating with cross-functional teams to define system requirements and design architectures, developing innovative solutions that addressed critical client needs, and contributing to securing high-value partnerships.",
    icon: Keysight,
    backgroundColor: "#e9ecef",
  },
  {
    title: "Software Engineer Intern",
    company: "Keysight Technologies",
    date: "January 2024 - June 2024",
    description: "Developed a Generative AI system using GPT4, Azure, LangChain, and Flask. Web scraped, chunked, and vectorized relevant data to enhance Retrieval Augmented Generation (RAG), saving test engineers' time by 75% compared to manual coding",
    icon: Keysight,
    backgroundColor: "#e9ecef",
  },
  {
    title: "AR & AI Project Intern",
    company: "Integem Inc",
    date: "June 2022 - August, 2023",
    description: "Designed Artificial Intelligence and Augmented Reality projects for students, and mentored junior interns to improve their skill sets.",
    icon: Integem,
    backgroundColor: "#e9ecef",
  },
  {
    title: "B.S Computer Science",
    company: "UC Santa Cruz",
    date: "September 2020 - June 2024",
    description: "Graduated with honors, where I studied Software Engineering, Artificial Intelligence, Machine Learning, Data Structures & Algorithms.",
    icon: UCSC,
    backgroundColor: "#f9f9f9",
  },
];

const ExperienceTimeline = () => {
  return (
    <section className="experience-timeline" id="experience">
      <h2>My Experiences</h2>
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            date={experience.date}
            icon={<img src={experience.icon} alt="icon" style={{ width: '100%', height: '100%' }} />}
            iconStyle={{ background: experience.backgroundColor, color: '#fff', borderRadius: '50%' }}
            contentStyle={{ background: '#fff', color: '#333' }}
            contentArrowStyle={{ borderRight: `7px solid ${experience.backgroundColor}` }}
            dateClassName="date-white"
          >
            <h3 className="vertical-timeline-element-title">{experience.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{experience.company}</h4>
            <p>{experience.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default ExperienceTimeline;
