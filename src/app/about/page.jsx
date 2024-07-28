'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className='min-h-[100vh] px-5 sm:px-28 py-20 sm:py-24 overflow-x-hidden text-[#332932]' id='about'>
      <div className='flex flex-col items-end'>

        <h1 className='text-xl sm:text-3xl font-bold'>About Me</h1>
        <hr className='border-4 w-14 sm:w-20 border-[#4AC8A3] right-0' />
      </div>

      <div className='flex flex-col-reverse sm:flex-row sm:items-center justify-center w-full pt-10 sm:pt-0 gap-10'>
        <div className='sm:w-1/2 space-y-2'>

          <p>Hi there! I’m Adedamola Ogunlala, a Certified Front-End developer from Lagos, Nigeria. I’ve dedicated myself to creating impactful digital experiences.</p>

          <div className='text-justify'>
            <h2 className='font-bold border-b-2 border-[#4AC8A3] w-fit text-lg sm:text-xl'>What I Do</h2>

            <p>🌟 Frontend Craftsmanship: I bring creative designs to life with HTML, CSS, and JavaScript, crafting everything from sleek SPAs to complex web solutions.</p>

            <p>🎨 Aesthetic Advocate: I excel in creating visually appealing interfaces, always exploring design trends and infusing them into my work.</p>

            <p>⚡ Performance Optimizer: I prioritize speed and efficiency, optimizing projects for fast load times and smooth user interactions.</p>

            <p className='font-bold border-b-2 border-[#4AC8A3] w-fit text-lg sm:text-xl pt-1'>My Toolbox</p>

            <p>🛠️ Languages: HTML, CSS, JavaScript (Learning TypeScript😉)</p>

            <p>⚙️ Frameworks & Libraries: Bootstrap, TailwindCSS, React.js, Next.js (because server-side rendering is awesome!)</p>

            <p>🧰 Tools: VS Code (my go-to editor), Git (version control master), and a strong coffee (essential for those late-night coding sessions)</p>
          </div>

          <p>Every project is a chance to innovate and improve the web. Thanks for visiting and checking out my work! 🌐</p>
        </div>
        <div className='sm:w-1/2 flex items-center justify-center max-h-screen'>

          <motion.div
            initial={{ x: '10%', opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: false, amount: 0.5 }}
            className='min-h-full'>
            <Image src='/about.svg' className='rounded-br-full rounded-tl-full rounded-bl-full w-full shadow-xl' alt='Hands on Deck' title='Hand of a man on a laptop' width={500} height={500} />

          </motion.div>
        </div>

      </div>

    </div>
  )
}
