import {
    mobile,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    vuejs,
    Flutter,
    uniapp,
    redux,
    tailwind,
    nodejs,
    git,
    figma,
    docker,
    zhibai,
    shangrui,
    shanqu,
    smbq,
    hjqt,
    kkjp,
    niuniu,
    modesens,
    shanmeng,
    threejs, nextjs, nuxtjs, taro,
} from "../assets";
import {StaticImageData} from "next/image";

export interface navLinkItl {
    id: string
    title: string
}
const navLinks: navLinkItl[] = [
    {
        id: "about",
        title: "关于",
    },
    {
        id: "work",
        title: "工作经历",
    },
    {
        id: "tech",
        title: "技能",
    },
    {
        id: "projects",
        title: "项目",
    },
];

export interface serviceItl {
    title: string
    icon: StaticImageData
}
const services: serviceItl[] = [
    {
        title: "Web 开发",
        icon: web,
    },
    {
        title: "App 开发",
        icon: mobile,
    },
    {
        title: "小程序 开发",
        icon: creator,
    },
];

export interface technologyItl {
    name: string
    icon: StaticImageData
}
const technologies: technologyItl[] = [
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
        name: "Vue JS",
        icon: vuejs,
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
        name: "Flutter",
        icon: Flutter,
    },
    {
        name: "Taro",
        icon: taro,
    },
    {
        name: "uni-app",
        icon: uniapp,
    },
    {
        name: "Next.js",
        icon: nextjs,
    },
    {
        name: "Nuxt.js",
        icon: nuxtjs,
    },
    {
        name: "git",
        icon: git,
    },
];

export interface experienceItl {
    title: string
    company_name: string
    icon: StaticImageData
    iconBg: string
    date: string
    points: string[]
}
const experiences: experienceItl[] = [
    {
        title: "前端工程师",
        company_name: "北京知白软件",
        icon: zhibai,
        iconBg: "#383E56",
        date: "2018.12 - 2019.09",
        points: [
            "使用 Vue.js 和其他相关技术开发和维护Web应用程序和小程序.",
            "与包括设计师、产品经理和其他开发人员在内的跨职能团队合作，创造高质量的产品.",
            "实施响应式设计并确保跨浏览器兼容性.",
            "参与代码审查并向其他开发人员提供建设性反馈.",
        ],
    },
    {
        title: "前端工程师",
        company_name: "北京尚睿科技",
        icon: shangrui,
        iconBg: "#383E56",
        date: "2019.10 - 2020.09",
        points: [
            "使用 Nuxt.js 和其他相关技术开发和维护公司跨境电商Web应用程序.",
            "与包括设计师、产品经理和其他开发人员在内的跨职能团队合作，创造高质量的产品.",
            "实施响应式设计并确保跨浏览器兼容性.",
            "参与代码审查并向其他开发人员提供建设性反馈.",
        ],
    },
    {
        title: "前端工程师",
        company_name: "北京闪趣信息技术",
        icon: shanqu,
        iconBg: "#383E56",
        date: "2020.11 - 2022.09",
        points: [
            "使用 Nuxt.js 技术开发和维护公司 KK 键盘输入法 Hybrid App.",
            "使用 Flutter 技术开发和维护公司 闪萌表情，闪萌牛牛 App 相关功能模块.",
            "使用 uni-app 技术开发和维护公司 闪萌表情(微信，QQ，快手)，火箭趣图(抖音)，天天表情(抖音)等不同平台小程序 相关功能模块.",
            "与包括设计师、产品经理和其他开发人员在内的跨职能团队合作，创造高质量的产品.",
            "实施响应式设计并确保跨浏览器兼容性.",
            "参与代码审查并向其他开发人员提供建设性反馈.",
        ],
    },
];

interface projectTagItl {
    name: string
    color: string
}
export interface projectItl {
    name: string
    description: string
    tags: projectTagItl[]
    image: StaticImageData
    source_code_link: string
}
const projects: projectItl[] = [
    // {
    //     name: "闪萌表情(Flutter App)",
    //     description: "一款图片表情diy制作的工具类App.",
    //     tags: [
    //         {
    //             name: "Flutter",
    //             color: "blue-text-gradient",
    //         },
    //     ],
    //     image: smbq,
    //     source_code_link: "http://haipei.weshineapp.com/",
    // },
    {
        name: "火箭取图(Flutter App)",
        description: "一款表情包原创作者投稿App, 去除其他平台复杂冗余的表情投稿过程，作者从注册到上传第一个作品只需要在一分钟内即可完成.",
        tags: [
            {
                name: "Flutter",
                color: "blue-text-gradient",
            },
        ],
        image: hjqt,
        source_code_link: "http://haipei.weshineapp.com/",
    },
    {
        name: "KK键盘(Hybrid App)",
        description: "一款移动端手机输入法，支持表情斗图，语音包，花样特殊字体，特殊符号等一系列功能，让聊天更有趣.",
        tags: [
            {
                name: "Nuxt.js",
                color: "green-text-gradient",
            },
        ],
        image: kkjp,
        source_code_link: "http://kk.weshineapp.com/",
    },
    {
        name: "闪萌牛牛(Flutter App)",
        description: "一款基于区块链技术的表情数字藏品收藏交流平台，解锁数字藏品新领域，打造超级表情包、超级头像新类别的收藏交流平台.",
        tags: [
            {
                name: "Flutter",
                color: "blue-text-gradient",
            },
        ],
        image: niuniu,
        source_code_link: "http://meta.weshineapp.com/",
    },
    {
        name: "ModeSens(跨境电商)",
        description: "国际化跨境电商, 主营时尚奢侈品领域, 与一些国外时尚领域的电商有合作关系, 主要提供奢侈品信息并且还有合作电商折扣与其他优惠福利信息, 此外可以帮助用户代下单, 以及有自己独立的社区和博文板块.",
        tags: [
            {
                name: "Nuxt.js",
                color: "green-text-gradient",
            },
        ],
        image: modesens,
        source_code_link: "https://modesens.cn/",
    },
    {
        name: "闪萌表情(PC，APP，微信,QQ,快手平台小程序)",
        description: "闪萌是一家中文GIF动图搜索和分发平台，于2016年06月上线，以发现有趣的GIF为目的，致力于让年轻人的交流沟通更有趣.",
        tags: [
            {
                name: "Nuxt.js",
                color: "green-text-gradient",
            },
            {
                name: "Flutter",
                color: "blue-text-gradient",
            },
            {
                name: "uni-app",
                color: "green-text-gradient",
            },
        ],
        image: shanmeng,
        source_code_link: "https://u.weshineapp.com/",
    },
];

export { navLinks, services, technologies, experiences, projects };
