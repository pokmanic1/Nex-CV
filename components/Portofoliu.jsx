'use client'

import React from 'react'
import { useState, useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import Link from 'next/link';
import { motion } from 'framer-motion';

let arrSafeNetJunior = [
    {
        id: 1,
        img: "/SafeNet-1.png"
    },
    {
        id: 2,
        img: "/SafeNet-2.png"
    },
    {
        id: 3,
        img: "/SafeNet-3.png"
    },
    {
        id: 4,
        img: "/SafeNet-4.png"
    },
    {
        id: 5,
        img: "/SafeNet-6.png"
    },
    {
        id: 6,
        img: "/SafeNet-5.png"
    },
]
let arrPetCare = [

    {
        id: 1,
        img: '/PetCare-1.png'
    },
    {
        id: 2,
        img: '/PetCare-2.png'
    },
    {
        id: 3,
        img: '/PetCare-3.png'
    },

]
let arrRestaurant = [
    {
        id: 1,
        img: '/Restaurant.png'
    },
    {
        id: 2,
        img: '/Restaurant1.png'
    },
    {
        id: 3,
        img: '/Restaurant2.png'
    },
    {
        id: 3,
        img: '/Restaurant3.png'
    },
]
let arrKarta = [
    {
        id: 1,
        img: '/image 32.png'
    },
    {
        id: 2,
        img: '/image 33.png'
    },
    {
        id: 3,
        img: '/image 34.png'
    },
  
]

const Portofoliu = () => {

    const [curectshowSection, setCurectshowSection] = useState(0)

    const setCurentSection = (x) => {
        console.log("numarul sectiei aratate:", curectshowSection)

        setCurectshowSection((prev) => {
            const next = prev + x;
            if (next > 4) return 0;
            if (next < 0) return 4;
            return next;
        });

    };

    const [currentIndexSafeNetJunior, setCurrentIndexSafeNetJunior] = useState(0);
    const [currentIndexPetCare, setCurrentIndexPetCare] = useState(0);
    const [currentIndexRestaurant, setCurrentIndexRestaurant] = useState(0);
    const [currentIndexKarta, setCurrentIndexKarta] = useState(0);




    const containerRef = useRef(null);
    let time = 1000 * 60 * 5;


    useGSAP(() => {
        if (localStorage.getItem('token')) return;
        const titlu1 = new SplitText(".card1 .titlu", { type: "chars" });
        const pDespreMine1 = new SplitText(".card1 .pDEspreMine", { type: "lines" });
        const detalii1 = new SplitText(".card1 .detalii", { type: "lines" });

        const titlu2 = new SplitText(".card2 .titlu", { type: "chars" });
        const pDespreMine2 = new SplitText(".card2 .pDEspreMine", { type: "lines" });
        const detalii2 = new SplitText(".card2 .detalii", { type: "lines" });

        const titlu3 = new SplitText(".card3 .titlu", { type: "chars" });
        const pDespreMine3 = new SplitText(".card3 .pDEspreMine", { type: "lines" });
        const detalii3 = new SplitText(".card3 .detalii", { type: "lines" });

        const tl = gsap.timeline({
            defaults: { ease: "power3.out", duration: 0.3 }
        });

        tl.from('.card1', {
            backgroundColor: "#000000",
            opacity: 0,
            y: 60,
            scale: 0.9,
            rotate: -2,
            duration: 0.6,
            ease: "back.out(1.5)",
        }).from(titlu1.chars, {
            opacity: 0,
            y: 40,
            rotate: 8,
            stagger: { each: 0.02, from: "center " },
            duration: 0.5,
            ease: "power4.out",
        }).from(pDespreMine1.lines, {
            opacity: 0,
            y: 30,
            stagger: 0.05,
            duration: 0.5,
            ease: "power2.out",
        }).from(detalii1.lines, {
            opacity: 0,
            x: -20,
            stagger: 0.06,
            duration: 0.4,
            ease: "power2.out",
        })
            .from('.card2', {
                backgroundColor: "#000000",
                opacity: 0,
                y: 60,
                scale: 0.9,
                rotate: 2,
                duration: 0.6,
                ease: "back.out(1.5)",
            }, "-=0.1")
            .from(titlu2.chars, {
                opacity: 0,
                y: 40,
                rotate: -8,
                stagger: { each: 0.02, from: "center" },
                duration: 0.5,
                ease: "power4.out",
            }).from(pDespreMine2.lines, {
                opacity: 0,
                y: 30,
                stagger: 0.05,
                duration: 0.5,
                ease: "power2.out",
            }).from(detalii2.lines, {
                opacity: 0,
                x: -20,
                stagger: 0.06,
                duration: 0.4,
                ease: "power2.out",
            })
            .from('.card3', {
                backgroundColor: "#000000",
                opacity: 0,
                y: 50,
                scale: 0.92,
                rotate: -2,
                duration: 0.4,
                ease: "back.out(1.6)",
            }, "-=0.15")
            .from(titlu3.chars, {
                opacity: 0,
                y: 30,
                rotate: 6,
                stagger: { each: 0.012, from: "center" },
                duration: 0.35,
                ease: "power4.out",
            }).from(pDespreMine3.lines, {
                opacity: 0,
                y: 25,
                stagger: 0.04,
                duration: 0.35,
                ease: "power2.out",
            }).from(detalii3.lines, {
                opacity: 0,
                x: -15,
                stagger: 0.045,
                duration: 0.3,
                ease: "power2.out",
            })
            .from('.heroButton', {
                opacity: 0,
                y: 40,
                scale: 0.5,
                rotate: -5,
                duration: 0.6,
                ease: "back.out(2.5)",
            }, "-=0.1");
    });


    if (typeof window !== 'undefined' && !localStorage.getItem('token')) {
        localStorage.setItem('token', 1)
    }

    useEffect(() => {
        const timer = setInterval(() => {
            localStorage.removeItem('token');
        }, time);

        return () => clearInterval(timer);
    }, [time]);
    return (
        <>
            <section ref={containerRef} className=' flex-center relative w-full min-h-dvh bg-[linear-gradient(135deg,#3795DB_0%,#004CB2_50%,#001C66_100%)] py-8 px-4 sm:py-10 sm:px-6 md:py-12 md:px-10 lg:py-[50px] lg:px-[60px]'>
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                <div className={`col-center w-full h-full bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 rounded-2xl shadow-2xl p-[4px] sm:p-[6px] md:p-[8px] lg:p-[10px] ${curectshowSection === 0 ? 'flex' : 'hidden'}`}>



                    <div className='card1 w-full h-full col-center rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 ring-1 ring-black/5'>
                        <div className='w-full h-full flex flex-col text-center p-5 sm:p-6 gap-4 sm:gap-6'>
                            <h1 className='titlu text-2xl sm:text-3xl font-semibold ' >SafeNet Junior</h1>
                            <div>
                                <p className='pDEspreMine block text-center text-black text-[15px] sm:text-[15px] md:text-[16px] mb-3'>
                                    <span className='font-semibold text-blue-800'>SafeNet Junior</span> este o platformă educațională creată special pentru elevii claselor 1–4, oferind o experiență interactivă și captivantă de învățare.
                                </p>

                                <ul className='detalii text-left mx-auto w-fit space-y-1.5 text-[14px] sm:text-[15px] text-black/80'>
                                    <li>&bull;  <span className='font-semibold text-blue-600'>4 jocuri de bază </span>concepute pentru învățarea securității cibernetice într-un mod distractiv.</li>
                                    <li>&bull;  <span className='font-semibold text-blue-600'>Pagină cu teste, misiuni și insigne</span> pentru monitorizarea progresului elevilor.</li>
                                    <li>&bull;  <span className='font-semibold text-blue-600'>Dark Mode</span> pentru o experiență vizuală modernă și confortabilă.</li>
                                    <li>&bull;  <span className='font-semibold text-blue-600'>Autentificare pentru elevi și profesori</span>, cu date stocate în Firebase.</li>
                                </ul></div>
                            <div className="relative w-full h-[180px] sm:h-[200px] md:h-[220px] max-w-[550px] mx-auto mt-auto border-2 border-gray-800 rounded-xl overflow-hidden shadow-xl">
                                <img
                                    src={`${arrSafeNetJunior[currentIndexSafeNetJunior].img}`} alt=""
                                    className="w-full h-full max-w-[550px]   rounded-xl shadow-sm"
                                />

                                <button
                                    onClick={() =>
                                        setCurrentIndexSafeNetJunior(prev =>
                                            prev === 0 ? arrSafeNetJunior.length - 1 : prev - 1
                                        )
                                    }>
                                    <img
                                        src="/left-arrow.png" alt=""
                                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 cursor-pointer"
                                    />
                                </button>
                                <button
                                    onClick={() =>
                                        setCurrentIndexSafeNetJunior(prev =>
                                            prev === arrSafeNetJunior.length - 1 ? 0 : prev + 1
                                        )
                                    }>
                                    <img
                                        src="/right-arrow.png" alt=""
                                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 cursor-pointer"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                    {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                    {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                    {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}


                    <div className='card2 w-full h-full col-center rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 ring-1 ring-black/5'>
                        <div className='w-full h-full flex flex-col p-5 sm:p-6 text-center gap-4 sm:gap-6'>
                            <h1 className='titlu text-2xl sm:text-3xl font-semibold ' >Velvet Pour</h1>
                            <div>
                                <p className='pDEspreMine block text-center text-black text-[15px] sm:text-[15px] md:text-[16px]  mb-3'>
                                    <span className='font-semibold text-blue-800'>Velvet Pour</span> este un site creat pentru un bar, oferind utilizatorilor informații clare despre servicii și atmosfera locației.
                                </p>

                                <ul className='detalii text-left mx-auto w-fit space-y-1.5 text-[14px] sm:text-[15px] text-black/80'>
                                    <li>&bull; <span className='font-semibold text-blue-600'>Efecte de scroll</span> interactive și animații fluide la derulare.</li>
                                    <li>&bull; <span className='font-semibold text-blue-600'>Secțiuni dedicate imaginilor</span> și prezentării barului.</li>
                                    <li>&bull; <span className='font-semibold text-blue-600'>Accent pe design modern</span> și experiență vizuală plăcută.</li>
                                    <li>&bull; Proiect realizat pentru aprofundarea animațiilor cu GSAP.</li>
                                </ul>
                            </div>
                            <video src="/Screen Recording 2026-07-03 132204.mp4" className='block w-full h-[180px] sm:h-[200px] md:h-[220px]   object-center rounded-xl mt-auto shadow-sm'
                                muted playsInline preload='auto' autoPlay loop></video>
                        </div>
                    </div>

                    {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                    {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                    {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}



                    <div className='card3 w-full h-full col-center rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 ring-1 ring-black/5'>
                        <div className='w-full h-full flex flex-col p-5 sm:p-6 gap-4 sm:gap-6'>

                            <h1 className='titlu text-2xl sm:text-3xl font-semibold  text-center' >Pet Care</h1>
                            <div>
                                <p className='pDEspreMine block text-center text-black text-[15px] sm:text-[15px] md:text-[16px] mb-3'>
                                    <span className='font-semibold text-blue-800'>Pet Care</span> este un site creat pentru o clinică veterinară, oferind utilizatorilor acces rapid la informații și servicii utile.
                                </p>

                                <ul className='detalii text-left mx-auto w-fit space-y-1.5 text-[14px] sm:text-[15px] text-black/80'>
                                    <li>&bull;  <span className='font-semibold text-blue-600'>Sistem de recenzii și programări</span> pentru consultații de diferite tipuri.</li>
                                    <li>&bull;  <span className='font-semibold text-blue-600'>Secțiuni dedicate echipei medicale</span> și serviciilor oferite.</li>
                                    <li>&bull;  <span className='font-semibold text-blue-600'>Sistem de filtrare</span> pentru găsirea rapidă a informațiilor dorite.</li>
                                    <li>&bull;  <span className='font-semibold text-blue-600'>Autentificare pentru utilizatori</span>, cu date stocate în PostgreSQL.</li>
                                </ul>
                            </div>
                            <div className="relative max-w-[550px] mx-auto w-full h-[180px] sm:h-[200px] md:h-[220px] mt-auto border-2 border-gray-800 rounded-xl overflow-hidden shadow-xl">
                                <img
                                    src={arrPetCare[currentIndexPetCare].img}
                                    className="w-full h-full max-w-[550px] rounded-xl shadow-sm"
                                    alt=""
                                />

                                <button
                                    onClick={() =>
                                        setCurrentIndexPetCare(
                                            prev => (prev - 1 + arrPetCare.length) % arrPetCare.length
                                        )
                                    }>
                                    <img
                                        src="/leftArrowWhite.png"
                                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 cursor-pointer"
                                        alt=""
                                    />
                                </button>

                                <button
                                    onClick={() =>
                                        setCurrentIndexPetCare(
                                            prev => (prev + 1) % arrPetCare.length
                                        )
                                    }>
                                    <img
                                        src="/rightArrowWhite.png"
                                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 cursor-pointer"
                                        alt=""
                                    />
                                </button>
                            </div>

                        </div>
                    </div>



                </div>

                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}

                <div className={`col-center w-full h-full bg-white  ${curectshowSection === 1 ? 'flex' : 'hidden'}`}>

                    <div className='col-center w-full h-full  '>


                        <h1 className='text-4xl sm:text-3xl font-semibold'>4 Express.js Projects</h1>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-2 rounded-2xl shadow-2xl p-1 '>


                            <div className='card1 w-full h-full col-center rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 ring-1 ring-black/5'>
                                <div className='w-full h-full flex flex-col text-center p-5 sm:p-3 gap-4 sm:gap-6'>
                                    <h1 className='titlu text-2xl sm:text-3xl font-semibold ' >proiect 1</h1>
                                    <div>
                                        <p className='pDEspreMine block text-center text-black text-[15px] sm:text-[15px] md:text-[16px] mb-3'>
                                            <span className='font-semibold text-blue-800'>Primul proiect</span> dedicat invatarii Express include autentificarea utilizatorilor si trimiterea  recenziilor
                                        </p>

                                        <ul className='detalii text-left mx-auto w-fit space-y-1.5 text-[14px] sm:text-[15px] text-black/80'>
                                            <li>&bull;  <span className='font-semibold text-blue-600'>Express.js </span>pentru backend</li>
                                            <li>&bull;  <span className='font-semibold text-blue-600'>MongoDB</span> pentru baza de date.</li>
                                            <li>&bull;  <span className='font-semibold text-blue-600'>Bcrypt</span> pentru hashuirea parolei.</li>
                                            <li>&bull;  <span className='font-semibold text-blue-600'>JWT</span> pentru token </li>
                                        </ul>
                                    </div>
                                    <div className="relative w-full h-[180px] sm:h-[200px] md:h-[220px] max-w-[550px] mx-auto mt-auto border-2 border-gray-800 rounded-xl overflow-hidden shadow-xl">
                                        <img
                                            src='/image 20.png' alt=""
                                            className="w-full h-full max-w-[550px]   rounded-xl shadow-sm"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                            {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                            {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                            {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}

                            <div className='card2 w-full h-full col-center rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 ring-1 ring-black/5'>
                                <div className='w-full h-full flex flex-col text-center p-5 sm:p-3 gap-2 sm:gap-2'>
                                    <h1 className='titlu text-2xl sm:text-3xl font-semibold ' >proiect 2</h1>
                                    <div>
                                        <p className='pDEspreMine block text-center text-black text-[15px] sm:text-[15px] md:text-[16px] mb-3'>
                                            <span className='font-semibold text-blue-800'>Al 2 proiect</span> este realizat pentru aprofundarea Express.js și include autentificarea utilizatorilor și administrarea unei platforme de filme . Avand si adaugarea stergerea crearea si statului filmelor utilizatorului
                                        </p>

                                        <ul className='detalii text-left mx-auto w-fit space-y-1.5 text-[14px] sm:text-[15px] text-black/80'>
                                            <li>&bull;  <span className='font-semibold text-blue-600'>Express.js </span>pentru backend</li>
                                            <li>&bull;  <span className='font-semibold text-blue-600'>Neon si Prisma</span> pentru baza de date.</li>
                                            <li>&bull;  <span className='font-semibold text-blue-600'>Bcrypt</span> pentru hashuirea parolei.</li>
                                            <li>&bull;  <span className='font-semibold text-blue-600'>JWT</span> pentru token </li>
                                        </ul>
                                    </div>
                                    <div className="relative w-full h-[180px] sm:h-[200px] md:h-[220px] max-w-[550px] mx-auto mt-auto border-2 border-gray-800 rounded-xl overflow-hidden shadow-xl">
                                        <img
                                            src='/image 26.png' alt=""
                                            className="w-full h-full max-w-[550px]   rounded-xl shadow-sm"
                                        />
                                    </div>
                                </div>
                            </div>


                            {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                            {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                            {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}



                            <div className='card3 w-full h-full col-center rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 ring-1 ring-black/5'>
                                <div className='w-full h-full flex flex-col p-5 sm:p-3 gap-4 sm:gap-6'>

                                    <h1 className='titlu text-2xl sm:text-3xl font-semibold  text-center' >proiect 3</h1>
                                    <div>
                                        <p className='pDEspreMine block text-center text-black text-[15px] sm:text-[15px] md:text-[16px] mb-3'>
                                            <span className='font-semibold text-blue-800'>Al 3 proiect</span> dedicat invatarii Express include autentificarea utilizatorilor si pagine de contact
                                        </p>

                                        <ul className='detalii text-left mx-auto w-fit space-y-1.5 text-[14px] sm:text-[15px] text-black/80'>
                                            <li>&bull;  <span className='font-semibold text-blue-600'>Express.js </span>pentru backend</li>
                                            <li>&bull;  <span className='font-semibold text-blue-600'>MongoDB</span> pentru baza de date.</li>
                                            <li>&bull;  <span className='font-semibold text-blue-600'>Bcrypt</span> pentru hashuirea parolei.</li>
                                            <li>&bull;  <span className='font-semibold text-blue-600'>JWT</span> pentru token </li>
                                        </ul>
                                    </div>
                                    <div className="relative max-w-[550px] mx-auto w-full h-[180px] sm:h-[200px] md:h-[220px] mt-auto border-2 border-gray-800 rounded-xl overflow-hidden shadow-xl">
                                        <img
                                            src='/image 22.png'
                                            className="w-full h-full max-w-[550px] rounded-xl shadow-sm"
                                            alt=""
                                        />
                                    </div>

                                </div>
                            </div>
                            {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                            {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                            {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}



                            <div className='card3 w-full h-full col-center rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 ring-1 ring-black/5'>
                                <div className='w-full h-full flex flex-col p-5 sm:p-3 gap-4 sm:gap-6'>

                                    <h1 className='titlu text-2xl sm:text-3xl font-semibold  text-center' >proiect 4</h1>
                                    <div>
                                        <p className='pDEspreMine block text-center text-black text-[15px] sm:text-[15px] md:text-[16px] mb-3'>
                                            <span className='font-semibold text-blue-800'>Al 4 proiect</span> dedicat invatarii Express include autentificarea utilizatorilor si sistem de programare
                                        </p>

                                        <ul className='detalii text-left mx-auto w-fit space-y-1.5 text-[14px] sm:text-[15px] text-black/80'>
                                            <li>&bull;  <span className='font-semibold text-blue-600'>Express.js </span>pentru backend</li>
                                            <li>&bull;  <span className='font-semibold text-blue-600'>MongoDB</span> pentru baza de date.</li>
                                            <li>&bull;  <span className='font-semibold text-blue-600'>Bcrypt</span> pentru hashuirea parolei.</li>
                                            <li>&bull;  <span className='font-semibold text-blue-600'>JWT</span> pentru token </li>
                                        </ul>
                                    </div>
                                    <div className="relative max-w-[550px] mx-auto w-full h-[180px] sm:h-[200px] md:h-[220px] mt-auto border-2 border-gray-800 rounded-xl overflow-hidden shadow-xl">
                                        <img
                                            src='/image 24.png'
                                            className="w-full h-full max-w-[550px] rounded-xl shadow-sm"
                                            alt=""
                                        />

                                    </div>

                                </div>
                            </div>

                        </div>


                    </div>


                </div>
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}

                <div className={`col-center w-full h-full bg-white  ${curectshowSection === 2 ? 'flex' : 'hidden'}`}>

                    <div className='col-center w-full h-full  '>


                        <h1 className='text-4xl sm:text-3xl font-semibold'>2 Next.js Projects</h1>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-2 rounded-2xl shadow-2xl p-1 '>



                            {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                            {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                            {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}



                            <div className='card3 w-full h-full col-center rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 ring-1 ring-black/5'>
                                <div className='w-full h-full flex flex-col p-5 sm:p-3 gap-4 sm:gap-6'>

                                    <h1 className='titlu text-2xl sm:text-3xl font-semibold  text-center' >proiect 1</h1>
                                    <div>
                                        <p className='pDEspreMine block text-center text-black text-[15px] sm:text-[15px] md:text-[16px] mb-3'>
                                            <span className='font-semibold text-blue-800'>Primul</span> dedicat învățării Next.js, axat pe randarea pe server și gestionarea eficientă a rutelor:
                                        </p>

                                        <ul className='detalii text-left mx-auto w-fit space-y-1.5 text-[14px] sm:text-[15px] text-black/80'>
                                            <li>&bull; <span className='font-semibold text-blue-600'>Server-Side Rendering (SSR)</span> pentru viteză și SEO.</li>
                                            <li>&bull; <span className='font-semibold text-blue-600'>App Router</span> pentru structurarea modernă a paginilor.</li>
                                            <li>&bull; <span className='font-semibold text-blue-600'>Server Actions</span> pentru logica și procesarea datelor.</li>
                                            <li>&bull; <span className='font-semibold text-blue-600'>API Routes</span> pentru conectarea backend-ului nativ.</li>
                                        </ul>

                                    </div>
                                    <div className="relative max-w-[550px] mx-auto w-full h-[180px] sm:h-[200px] md:h-[220px] mt-auto border-2 border-gray-800 rounded-xl overflow-hidden shadow-xl">
                                        <img
                                            src='/image 27 (1).png'
                                            className="w-full h-full max-w-[550px] rounded-xl shadow-sm"
                                            alt=""
                                        />
                                    </div>

                                </div>
                            </div>
                            {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                            {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                            {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}



                            <div className='card3 w-full h-full col-center rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 ring-1 ring-black/5'>
                                <div className='w-full h-full flex flex-col p-5 sm:p-3 gap-4 sm:gap-6'>

                                    <h1 className='titlu text-2xl sm:text-3xl font-semibold  text-center ' >proiect 2</h1>
                                    <div>
                                        <p className='pDEspreMine block text-center text-black text-[15px] sm:text-[15px] md:text-[16px] mb-3'>
                                            <span className='font-semibold text-blue-800'>Al Doilea Proiect</span> reprezintă un pas avansat în stăpânirea ecosistemului Next.js:
                                        </p>

                                        <ul className='detalii text-left mx-auto w-fit space-y-1.5 text-[14px] sm:text-[15px] text-black/80'>
                                            <li>&bull; <span className='font-semibold text-blue-600'>Randare Hibridă</span> prin optimizarea paginilor direct pe server.</li>
                                            <li>&bull; <span className='font-semibold text-blue-600'>Navigare Dinamică</span> realizată prin noul sistem de rute (Routing).</li>
                                            <li>&bull; <span className='font-semibold text-blue-600'>Preluare de Date</span> directă și rapidă (Data Fetching).</li>
                                        </ul>


                                    </div>
                                    <div className="relative max-w-[550px] mx-auto w-full h-[180px] sm:h-[200px] md:h-[220px] mt-auto border-2 border-gray-800 rounded-xl overflow-hidden shadow-xl">
                                        <img
                                            src='/image 19 (1).png'
                                            className="w-full h-full max-w-[550px] rounded-xl shadow-sm"
                                            alt=""
                                        />

                                    </div>

                                </div>
                            </div>

                        </div>


                    </div>


                </div>
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}


                <div className={`col-center w-full h-full bg-white  gap-4 sm:gap-5 md:gap-6 rounded-2xl shadow-2xl p-[4px] sm:p-[6px] md:p-[8px] lg:p-[10px] ${curectshowSection === 3 ? 'flex' : 'hidden'}`}>


                    {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                    {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                    {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                    <div className='card1 w-full h-full col-center rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 ring-1 ring-black/5'>
                        <div className='w-full h-full flex flex-col text-center p-5 sm:p-6 gap-4 sm:gap-6'>
                            <h1 className='titlu text-2xl sm:text-3xl font-semibold ' >1 Proiect Nest js</h1>
                            <div>
                                <p className='pDEspreMine block text-center text-black text-[15px] sm:text-[15px] md:text-[16px] mb-3'>
                                    <span className='font-semibold text-blue-800'>Karta</span> este o platformă  pentru crearea de notițe, dezvoltată cu scopul de a exersa și stăpâni autentificarea în NestJS.
                                </p>

                                <ul className='detalii text-left mx-auto w-fit space-y-1.5 text-[14px] sm:text-[15px] text-black/80'>
                                    <li>&bull; <span className='font-semibold text-blue-600'>JWT :</span> Autentificare securizată prin tokeni</li>
                                    <li>&bull; <span className='font-semibold text-blue-600'>Bcrypt & Securitate:</span> Criptare avansată a parolelor și o secțiune dedicată recenziilor utilizatorilor.</li>
                                    <li>&bull; <span className='font-semibold text-blue-600'>Bază de date MongoDB:</span> Integrată prin API-uri REST pentru stocarea și gestionarea sigură a datelor.</li>
                                    <li>&bull; <span className='font-semibold text-blue-600'>Arhitectură NestJS:</span> Utilizare de Pipes, Controllers, Middleware și Guards pentru un flux clar și feedback intuitiv.</li>
                                </ul>

                            </div>
                            <div className="relative  mx-auto mt-auto rounded-xl  ">
                                <img
                                    src={`${arrKarta[currentIndexKarta].img}`}
                                    alt=""
                                    className="block w-full h-full max-w-[550px] rounded-xl shadow-sm object-cover border-2 border-gray-800 shadow-2xl "
                                />
                                <button
                                    onClick={() =>
                                        setCurrentIndexKarta(prev =>
                                            prev === 0 ? arrKarta.length - 1 : prev - 1
                                        )
                                    }>
                                    <img
                                        src="/leftArrowWhite.png" alt=""
                                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 cursor-pointer border"
                                    />
                                </button>
                                <button
                                    onClick={() =>
                                        setCurrentIndexKarta(prev =>
                                            prev === arrKarta.length - 1 ? 0 : prev + 1
                                        )
                                    }>
                                    <img
                                        src="/rightArrowWhite.png" alt=""
                                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 cursor-pointer"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                    {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                    {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                    {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}



                </div>


                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}

                <div className={`col-center w-full h-full bg-white  gap-4 sm:gap-5 md:gap-6 rounded-2xl shadow-2xl p-[4px] sm:p-[6px] md:p-[8px] lg:p-[10px] ${curectshowSection === 4 ? 'flex' : 'hidden'}`}>


                    {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                    {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                    {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                    <div className='card1 w-full h-full col-center rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 ring-1 ring-black/5'>
                        <div className='w-full h-full flex flex-col text-center p-5 sm:p-6 gap-4 sm:gap-6'>
                            <h1 className='titlu text-2xl sm:text-3xl font-semibold ' >1 Proiect Next js</h1>
                            <div>
                                <p className='pDEspreMine block text-center text-black text-[15px] sm:text-[15px] md:text-[16px] mb-3'>
                                    <span className='font-semibold text-blue-800'>Loughi</span> este o platformă modernă pentru un restaurant, dotată cu un sistem complet de rezervări și un meniu interactiv:
                                </p>

                                <ul className='detalii text-left mx-auto w-fit space-y-1.5 text-[14px] sm:text-[15px] text-black/80'>
                                    <li>&bull; <span className='font-semibold text-blue-600'>Animații premium</span> realizate cu GSAP și Framer Motion pentru un design atractiv.</li>
                                    <li>&bull; <span className='font-semibold text-blue-600'>Sistem de programări</span> și secțiune dedicată pentru recenziile clienților.</li>
                                    <li>&bull; <span className='font-semibold text-blue-600'>Bază de date MongoDB</span> conectată prin API-uri pentru stocarea sigură a datelor.</li>
                                    <li>&bull; <span className='font-semibold text-blue-600'>Gestionare erori</span> cu efecte vizuale și mesaje intuitive pentru utilizatori.</li>
                                </ul>

                            </div>
                            <div className="relative  mx-auto mt-auto b">
                                <img
                                    src={`${arrRestaurant[currentIndexRestaurant].img}`}
                                    alt=""
                                    className="block w-full h-full max-w-[550px]  object-cover border-2 border-gray-800 rounded-xl  shadow-xl"
                                />
                                <button
                                    onClick={() =>
                                        setCurrentIndexRestaurant(prev =>
                                            prev === 0 ? arrRestaurant.length - 1 : prev - 1
                                        )
                                    }>
                                    <img
                                        src="/leftArrowWhite.png" alt=""
                                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 cursor-pointer border"
                                    />
                                </button>
                                <button
                                    onClick={() =>
                                        setCurrentIndexRestaurant(prev =>
                                            prev === arrRestaurant.length - 1 ? 0 : prev + 1
                                        )
                                    }>
                                    <img
                                        src="/rightArrowWhite.png" alt=""
                                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 cursor-pointer"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                    {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                    {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}
                    {/* ------------------------------------------------------------------------------------------------------------------------------------------- */}



                </div>




















                <div
                    onClick={() => setCurentSection(-1)}
                    className='absolute bottom-1/2  left-5 sm:left-10 md:left-17 lg:left-24 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center bg-transparent '>
                    <img
                        src="/left-arrow.png" alt=""
                        className="scale-95 hover:scale-110 transition ease-in w-10 h-10 cursor-pointer"
                    />
                </div>

                <div
                    onClick={() => setCurentSection(1)}
                    className='absolute bottom-1/2  right-5 sm:right-10 md:right-17 lg:right-24 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center bg-transparent '>
                    <img
                        src="/right-arrow.png" alt=""
                        className="scale-95 hover:scale-110 transition ease-in w-10 h-10 cursor-pointer"
                    />
                </div>

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
                    className='absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[140px] sm:min-w-[10%] py-2 px-6 sm:px-9 flex justify-center items-center border-2 bg-gray-200 border-black rounded-2xl shadow-2xl'>
                    <Link href="/" className='text-[14px] sm:text-[16px]'>Sectiunea Principala</Link>
                </motion.div>

            </section>

        </>
    )
}

export default Portofoliu