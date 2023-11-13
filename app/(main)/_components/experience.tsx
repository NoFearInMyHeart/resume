"use client";

const {
    VerticalTimeline,
    VerticalTimelineElement,
} = require("react-vertical-timeline-component");
import "react-vertical-timeline-component/style.min.css";
import Image from 'next/image';
import { motion } from "framer-motion";
import { styles } from "@/app/styles";
import {experienceItl, experiences} from "@/constants";
import SectionWrapper from "@/components/section-wrapper";
import { textVariant } from "@/utils/motion";

interface ExperienceCardProps {
    experience: experienceItl
}
const ExperienceCard = ({experience}: ExperienceCardProps) => (
    <VerticalTimelineElement
        visible={true}
        contentStyle={{
            background: "#1d1836",
            color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #232631" }}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        icon={
            <div className='flex justify-center items-center w-full h-full'>
                <Image
                    src={experience.icon}
                    alt={experience.company_name}
                    className='w-[60%] h-[60%] object-contain'
                />
            </div>
        }
    >
        <div>
            <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
            <p
                className='text-secondary text-[16px] font-semibold'
                style={{ margin: 0 }}
            >
                {experience.company_name}
            </p>
        </div>

        <ul className="mt-5 list-disc ml-5 space-y-2">
            {experience.points.map((point: string, idx: number) => (
                <li key={`experience-point-${idx}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
                    {point}
                </li>
            ))}
        </ul>
    </VerticalTimelineElement>
)

const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>
                    到目前为止
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    工作经历.
                </h2>
            </motion.div>

            <div className="mt-20 flex flex-col">
                <VerticalTimeline lineColor="">
                    {experiences.map((experience: experienceItl, index: number) => (
                        <ExperienceCard
                            key={`experience-${index}`}
                            experience={experience}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    )
}

export default SectionWrapper(Experience, 'work')
