'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoLogoGithub, IoLogoLinkedin, IoMail } from 'react-icons/io5'
import { motion } from 'framer-motion'
import { BsFileEarmarkPdfFill } from "react-icons/bs";


export default function HomePage() {
    return (
        <div id='home' className='px-5 sm:px-20 pt-[18%] sm:pt-[8%] flex flex-col sm:flex-row justify-center items-center sm:min-h-[100vh] overflow-x-hidden'>
            <div className='flex flex-col-reverse sm:relative sm:w-1/2 sm:px-20'>

                <div className='-mt-7 sm:mt-0 backdrop-blur-[.07rem] sm:backdrop-blur-none'>
                    <motion.h1
                     initial={{ x: "30%", opacity: 0 }}
                     transition={{ duration: 1.5 }}
                     whileInView={{ x: 0, opacity: 1 }}
                     viewport={{ once: false, amount: 0.5 }}
                     className='text-6xl font-bold text-[#332932] pb-7'>Adedamola<br />Ogunlala<span className='text-[#4AC8A3]'>.</span>
                    </motion.h1>
                        
                    <motion.hr 
                    initial={{ x: "250%", opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: false, amount: 0.5 }}
                    className='border-4 w-28 border-[#4AC8A3]' /> 

                    <div className='py-10 flex justify-start items-center gap-4'>
                        <motion.div
                        initial={{ x: "250%", opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: false, amount: 0.5 }}
                        >

                        <Link href='https://shorturl.at/4Zmcz' target='_blank'>
                            <IoLogoLinkedin className='text-3xl text-[#332932] hover:text-[#4AC8A3] duration-300 hover:scale-110' />
                        </Link>
                        </motion.div>

                        <motion.div 
                        initial={{ x: "250%", opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.3 }}
                        viewport={{ once: false, amount: 0.5 }}
                        >

                        <Link href='https://shorturl.at/QaLAT' target='_blank'>
                            <IoLogoGithub className='text-3xl text-[#332932] hover:text-[#4AC8A3] duration-300 hover:scale-110' />
                        </Link>
                        </motion.div>

                        <motion.div
                        initial={{ x: "250%", opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.6 }}
                        viewport={{ once: false, amount: 0.5 }}
                        >

                        <Link href='mailto:collinsogunlala@gmail.com' target='_blank'>
                            <IoMail className='text-3xl text-[#332932] hover:text-[#4AC8A3] duration-300 hover:scale-110' />
                        </Link>
                        </motion.div>

                        <motion.div 
                        initial={{ x: "250%", opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2 }}
                        viewport={{ once: false, amount: 0.5 }}
                        >
                            
                        <Link href='/Adedamola.pdf' type='application/pdf' download target='_blank'>
                            
                            <BsFileEarmarkPdfFill className='text-3xl text-[#332932] hover:text-[#4AC8A3] duration-300 hover:scale-110 h-5'/>
                        </Link>
                        </motion.div>

                    </div>
                </div>

                <motion.div
                 initial={{ x: "-30%", opacity: 0 }}
                 whileInView={{ x: 0, opacity: 1 }}
                 transition={{ duration: 2 }}
                 viewport={{ once: false, amount: 0.5 }}
                 className='sm:absolute mt-[-20%] sm:mt-0 sm:-top-[100%] sm:-right-[30%] w-fit sm:w-max -z-[1]'>
                    <Image src='/myimage.svg' alt='Adedamola Ogunlala' title='Adedamola Ogunlala' width={500} height={500} />
                </motion.div>
            </div>
            <div className='sm:w-1/2'>

                <motion.div 
                initial={{ x: "10%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.0 }}
                viewport={{ once: false, amount: 0.5 }}
                className='sm:pl-[25%] text-[#332932]'>
                    <p className='text-2xl font-semibold border-[#332932] border-b-2 w-fit'>Introduction</p>
                    <motion.h2
                    initial={{ x: "0%", opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: false, amount: 0.5 }}
                    className='text-2xl py-4 font-semibold'>
                        FrontEnd Developer
                    </motion.h2>
                    <p className='text-sm text-[#332932] text-justify sm:w-[90%] pb-4'>
                        I&apos;m a FrontEnd Developer from Lagos, Nigeria, specializing in React.js, Next.js, and Tailwind CSS. My key project, TrendLuxe Ecommerce, showcases my ability to create user-friendly interfaces using React hooks and Context API. With a solid foundation in HTML, CSS, TailwindCSS, JavaScript, and React.js, I&apos;m eager to apply my skills to real-world projects and continue learning new technologies. I&apos;m committed to writing clean, efficient code and staying updated with web development trends. Excited to collaborate with experienced developers and contribute to innovative projects.
                    </p>

                    <Link href='/' className='text-[#332932] border-b-2 border-[#4AC8A3] flex justify-center items-center w-fit gap-1 hover:gap-2 duration-300'>
                        Read more...
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}
