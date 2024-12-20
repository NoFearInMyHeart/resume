"use client";

import {Tilt} from "react-tilt";
import {motion} from "framer-motion";
import Image from 'next/image';

import {styles} from "@/app/styles";
import {serviceItl, services} from "@/constants";
import {fadeIn, textVariant} from "@/utils/motion";
import SectionWrapper from "@/components/section-wrapper";

interface ServiceCardProps {
    service: serviceItl
    index: number
}

const ServiceCard = ({service, index}: ServiceCardProps) => {
    const {title, icon} = service

    return (
        <Tilt className='xs:w-[250px] w-full' options={{
            max: 45,
            scale: 1,
            speed: 450,
        }}>
            <motion.div
                variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
            >
                <div
                    className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
                >
                    <Image
                        src={icon}
                        priority={true}
                        alt='web-development'
                        className='w-16 h-16 object-contain'
                    />

                    <h3 className='text-white text-[20px] font-bold text-center'>
                        {title}
                    </h3>
                </div>
            </motion.div>
        </Tilt>
    )
}

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>引言</p>
                <h2 className={styles.sectionHeadText}>概述.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
                简单介绍一下，生于95年光棍节，天蝎座♏️，目前是一名前端工程师，年近30，蹉跎中练就了一丢丢的生存吃饭的技能，但是目前还是菜鸡儿🐔一个，努力升级打怪中💪。<br />
                平常主要用 React, Vue 来搞一些SPA和后台，写 App 的话用 Flutter, 小程序是用 Taro, uni-app, 如果涉及到 SSR 服务端渲染的话用过 Nuxt 和 Next, 可以快速学习上手一些框架和类库。
                近期对后端技术有点感兴趣并实践中...
            </motion.p>

            <div className='mt-20 flex flex-wrap gap-10'>
                {services.map((service: serviceItl, index: number) => (
                    <ServiceCard key={service.title} index={index} service={service}/>
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(About, 'about');
