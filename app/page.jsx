'use client'

import React from 'react'
import { useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import Link from 'next/link';
import { motion } from 'framer-motion';

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const arr = [
    { id: 1, name: 'Git', img: '/git.png' },
    { id: 2, name: 'Tailwind CSS', img: '/tailw.png' },
    { id: 3, name: 'JavaScript', img: '/js.png' },
    { id: 4, name: 'TypeScrpt', img: '/TS.png' },
    { id: 5, name: 'React', img: '/React.png' },
    { id: 6, name: 'GSAP', img: '/GSAP.png' },
    { id: 7, name: 'Fr. Motion', img: '/Framar.png' },
    { id: 8, name: 'Express', img: '/Expres.png' },
    { id: 9, name: 'Next', img: '/Next.png' },
    { id: 10, name: 'Nest', img: '/Nest.png' },
]

const Hero = () => {

    const containerRef = useRef(null);

    useGSAP(() => {
        if (typeof window === 'undefined') return;

        gsap.set(".skillCard", { opacity: 1, x: 0, scale: 1 });

        const h1Split = new SplitText(".h1FrontEnd", { type: "words" });
        const h1NumeSplit = new SplitText(".h1Nume", { type: "chars" });
        const h1ContactSplit = new SplitText(".h1Contact", { type: "words" });
        const h1DespreMine = new SplitText(".h1DespreMine", { type: "chars" });
        const pDespreMine = new SplitText(".pDEspreMine", { type: "lines" });
        const h1SkillSplit = new SplitText(".h1Skill", { type: "chars" });

        const tl = gsap.timeline({
            defaults: { ease: "power3.out", duration: 0.3 }
        });

        tl.from(".sectiuneaPrincipala", {
            y: 200,
            opacity: 0,
            scale: 0.75,
            duration: 0.8,
            ease: "back.out(1.5)"
        })
        .from(".heroImg", {
            scale: 0,
            rotation: 25,
            opacity: 0,
            duration: 0.2,
            ease: "back.out(2.2)"
        }, "-=0.6")
        .from(h1Split.words, {
            opacity: 0,
            y: 20,
            stagger: 0.06
        }, "-=0.3")
        .from(h1NumeSplit.chars, {
            opacity: 0,
            y: 20,
            stagger: 0.01
        }, "-=0.1")
        .from(h1ContactSplit.words, {
            opacity: 0,
            y: 20,
            stagger: 0.02
        })
        .from(".aEmail, .aTel, .pLocuinta", {
            opacity: 0,
            y: 15,
            stagger: 0.1
        }, "-=0.15")
        .from(h1DespreMine.chars, {
            opacity: 0,
            y: 15,
            stagger: 0.02
        }, "-=0.1")
        .from(pDespreMine.lines, {
            opacity: 0,
            y: 15,
            stagger: 0.15
        }, "-=0.1")
        .from(".educationCard", {
            opacity: 0,
            x: -30,
            scale: 0.9,
            stagger: 0.15,
            duration: 0.4
        }, "-=0.1")
        .from(h1SkillSplit.chars, {
            opacity: 0,
            y: 20,
            stagger: 0.03
        }, "-=0.1")
        .from(".skillCard", {
            opacity: 0,
            x: 50,
            scale: 0.9,
            stagger: 0.1,
            duration: 0.2,
            ease: "expo.in",
            clearProps: "all"
        }, "-=0.1")
        .from(".heroButton", {
            opacity: 0,
            y: 40,
            scale: 0.8,
            duration: 0.2,
            ease: "back.out(1.6)"
        }, "-=0.1");

        gsap.to(".heroImg", {
            y: -8,
            duration: 2.4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        return () => {
            h1Split.revert();
            h1NumeSplit.revert();
            h1ContactSplit.revert();
            h1DespreMine.revert();
            pDespreMine.revert();
            h1SkillSplit.revert();
        };
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className='flex-center w-full min-h-dvh bg-[linear-gradient(135deg,#3795DB_0%,#004CB2_50%,#001C66_100%)] py-8 px-4 sm:py-10 sm:px-6 md:py-12 md:px-10 lg:py-[10px] lg:px-[90px]'>
            <div className='col-center w-full h-full '>
                <div className='w-full h-auto lg:h-[70%] grid grid-cols-1 lg:grid-cols-7 bg-white gap-y-10 lg:gap-y-0 lg:rounded-none rounded-[20px] ' >

                    <div className='w-full h-full p-4 sm:p-5 md:p-[20px] lg:col-span-2 order-2 lg:order-1'>
                        <div>
                            <div>
                                <h1 className='h1DespreMine text-center text-blue-600 text-[22px] sm:text-[26px] md:text-[30px] leading-tight mb-4'>
                                    Despre Mine
                                </h1>
                                <p className='pDEspreMine block text-center text-gray-600 text-[14px] sm:text-[15px] md:text-[16px]'>Dezvoltator Full-Stack pasionat de web development și de propunerea ideilor în proiecte practice. Sunt în căutarea unei oportunități într-o echipă dinamică, unde să-mi extind cunoștințele, să învăț de la cei din jurul meu ,contribuind activ la dezvoltarea proiectelor.</p>
                            </div>
                        </div>
                        <div className='col-center gap-[15px] mt-[29px] '>
                            <div className='educationCard border-gradient py-1 px-4 sm:px-6 text-center text-[14px] sm:text-[16px]'>Educație: Colegiul „I. Hasdeu” Cahul</div>
                            <div className='educationCard border-gradient py-1 px-4 sm:px-6 text-center text-[14px] sm:text-[16px]'>Vârsta: 19 ani</div>
                            <div className='educationCard border-gradient py-1 px-4 sm:px-6 text-center text-[14px] sm:text-[16px]'>Dorința Principală: Învățare - Creștere</div>
                        </div>
                    </div>

                    <div className='w-full lg:col-start-3 lg:col-span-3 relative z-10 order-1 lg:order-2 min-h-[480px] sm:min-h-[520px] md:min-h-[520px] lg:min-h-0 '>
                        <div className='sectiuneaPrincipala absolute inset-x-0 top-0 bottom-0 lg:-top-12 p-2 lg:-bottom-0 gradient-secundar rounded-3xl col-center shadow-[0px_10px_30px_10px_#4b5563] gap-[10px] px-[10px] '>
                            <div className='w-full h-[50%] flex items-end justify-center'>
                                <img src="/IMG-20260220-WA0000.jpg" className='heroImg h-[85%] sm:h-[90%] w-[55%] sm:w-[45%] md:w-[40%] bg-center object-cover rounded-full' alt="" />
                            </div>
                            <div className='w-full text-center h-[20%] border-b border-gray-400 '>
                                <h1 className='h1FrontEnd w-full text-center text-white text-[22px] sm:text-[26px] md:text-[30px] font-semibold'>Frontend Developer</h1>
                                <h1 className='h1Nume w-full text-center text-white text-[18px] sm:text-[21px] md:text-[24px]'>Cirjeu Dumitru</h1>
                            </div>
                            <div className='w-full h-[40%] flex flex-col justify-center items-center gap-1 px-2'>
                                <h1 className='h1Contact text-center text-white text-[20px] sm:text-[24px] md:text-[28px] font-semibold leading-tight mb-2'>
                                    Contact
                                </h1>
                                <a href='mailto:cirjeu.dumitru@elev.cihcahul.md' className='aEmail block text-center text-white text-[13px] sm:text-[15px] md:text-[18px] hover:underline leading-tight break-all'>
                                    Email: cirjeu.dumitru@elev.cihcahul.md
                                </a>
                                <a href='tel:+37367100431' className='aTel block text-center text-white text-[13px] sm:text-[15px] md:text-[18px] hover:underline leading-tight'>
                                    Telefon: +37367100431
                                </a>
                                <p className='pLocuinta text-center text-white text-[13px] sm:text-[15px] md:text-[18px] leading-tight'>
                                    Locuinta: Cahul, Moldova
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='w-full h-full lg:col-span-2 p-4 sm:p-5 md:p-[20px] order-3'>
                        <h1 className='h1Skill text-center font-bold text-blue-600 text-[22px] sm:text-[26px] md:text-[30px] leading-tight mb-8'>
                            Skilluri
                        </h1>
                        <div className='flex flex-wrap justify-center gap-3 sm:gap-4 max-w-2xl mx-auto'>
                            {arr.map((item) => (
                                <div
                                    key={item.id}
                                    className='skillCard flex items-center justify-center gap-3 px-4 py-2.5 bg-white border border-slate-100 shadow-sm rounded-xl hover:shadow-md hover:border-blue-200 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer'
                                >
                                    <img
                                        src={item.img}
                                        className='w-5 h-5 sm:w-6 sm:h-6 object-contain shrink-0'
                                        alt={item.name}
                                    />
                                    <span className='text-[14px] sm:text-[15px] font-medium text-slate-700 whitespace-nowrap'>
                                        {item.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                <div className='w-full h-auto lg:h-[30%] bg-transparent lg:bg-white flex-center p-6 sm:p-8 md:p-[30px]' >
                    <motion.div
                        whileHover={{
                            scale: 1.05,
                            y: -2,
                            x: 0,
                            rotate: 0,
                            opacity: 1,
                            backgroundColor: "#f3f4f6"
                        }}
                        whileTap={{
                            scale: 0.9,
                            y: 1
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 6,
                            mass: 0.8,
                            duration: 0.3,
                        }}
                        className='heroButton min-w-[140px] sm:min-w-[10%] py-2 px-6 sm:px-9 flex justify-center items-start mt-auto border-2 bg-gray-200 border-black rounded-2xl'>
                        <Link href="/portofoliu" className='text-[14px] sm:text-[16px]'>Vezi mai mult</Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero