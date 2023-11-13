"use client";

import {Tilt} from "react-tilt";
import {motion} from "framer-motion";
import {styles} from "@/app/styles";
import {github} from "@/assets";
import SectionWrapper from "@/components/section-wrapper";
import {projectItl, projects} from "@/constants";
import {fadeIn, textVariant} from "@/utils/motion";

interface ProjectCardProps {
    index: number
    project: projectItl
}

const ProjectCard = ({index, project}: ProjectCardProps) => {
    const {
        name,
        description,
        tags,
        image,
        source_code_link,
    } = project

    return (
        <motion.div  onClick={() => window.open(source_code_link, '_blank')} variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
            >
                <div className="relative w-full h-[230px]">
                    <img src={image.src} alt={name} className="w-full h-full object-cover rounded-2xl" />

                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                        <div
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                        >
                            &gt;
                        </div>
                    </div>
                </div>

                <div className='mt-5'>
                    <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                    <p className='mt-2 text-secondary text-[14px]'>{description}</p>
                </div>

                <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                        <p
                            key={`${name}-${tag.name}`}
                            className={`text-[14px] ${tag.color}`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    )
}

const Projects = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>项目</p>
                <h2 className={`${styles.sectionHeadText}`}>经历.</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
                >
                    以下是项目介绍，点击相关项目支持跳转，并且展示了项目中所用到的技术栈
                </motion.p>
            </div>

            <div className='mt-20 flex flex-wrap gap-7'>
                {projects.map((project: projectItl, index: number) => (
                    <ProjectCard key={`project-${index}`} index={index} project={project}/>
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Projects, 'projects');
