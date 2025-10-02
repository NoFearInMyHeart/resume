"use client";

import Link from 'next/link'
import { styles } from "@/app/styles";
import {navLinkItl, navLinks} from "@/constants";
import {logo, menu, close, avatar} from "@/assets";
import {useEffect, useState} from "react";

const Navbar = () => {
    const [active, setActive] = useState<string>("");
    const [toggle, setToggle] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, [])

    return (
        <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link href="/" className="flex items-center gap-2" onClick={() => {
                    setActive('')
                    window.scrollTo(0, 0)
                }}>
                    <img src={avatar.src} alt="logo" className='w-9 h-9 object-contain' />
                    <p className='text-white text-[18px] font-bold cursor-pointer flex '>
                        {/*yzZ &nbsp;*/}
                        <span className='sm:block hidden'> 🚀</span>
                    </p>
                </Link>
                <ul className='list-none hidden sm:flex flex-row gap-10'>
                    {navLinks.map((nav: navLinkItl) => (
                        <li
                            key={nav.id}
                            className={`${
                                active === nav.title ? "text-white" : "text-secondary"
                            } hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(nav.title)}
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                    <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
                        <a href="/resume.pdf">简历</a>
                    </li>
                </ul>

                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img
                        src={toggle ? close.src : menu.src}
                        alt='menu'
                        className='w-[28px] h-[28px] object-contain'
                        onClick={() => setToggle(!toggle)}
                    />

                    <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                        <ul className='list-none flex justify-end items-start flex-col gap-4'>
                            {navLinks.map((nav: navLinkItl) => (
                                <li
                                    key={nav.id}
                                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                                        active === nav.title ? "text-white" : "text-secondary"
                                    }`}
                                    onClick={() => {
                                        setToggle(!toggle)
                                        setActive(nav.title)
                                    }}
                                >
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            ))}
                            <li className="font-poppins font-medium cursor-pointer text-[16px] text-secondary">
                                <a href="/resume.pdf">简历</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
