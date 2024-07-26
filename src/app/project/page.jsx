'use client'
import React from 'react'
import { projects } from '../components/project'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Project() {
    return (
        <div className='py-20 px-5 sm:px-28 sm:py-24 min-h-screen' id='project'>
            <div className='flex flex-col items-end'>

                <h1 className='text-xl sm:text-3xl font-bold'>Project</h1>
                <hr className='border-4 w-11 sm:w-16 border-[#4AC8A3] left-0' />
            </div>

            <div className='py-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 cursor-pointer'>
                {
                    projects.map((project, index) => (
                        <motion.div
                            initial={{ x: "0%", opacity: 0 }}
                            transition={{ duration: 1.0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: false, amount: 0.5 }}
                            key={index} className='flex flex-col items-center justify-center gap-2 border-[1px] rounded-md shadow-sm duration-300'>
                            <div className=' flex flex-col items-center justify-center gap-2 px-8 py-4'>
                                <Image src={project.image} alt={project.name} width={300} height={300} className='rounded-md' />
                                <h1 className='text-[#4ac8a3] text-xl italic'>{project.name}</h1>

                                <p className='text-center text-[#332932]'>{project.stack}</p>
                            </div>
                            <div className='py-8 grid grid-cols-2 gap-4'>
                                <Link 
                                className='py-2 px-6 bg-[whitesmoke] shadow-sm hover:shadow-md text-[#332932] duration-300 border-[1px] rounded-md hover:bg-[#4AC8A3] hover:text-white'
                                href={project.liveLink} target='_blank'>Website</Link>
                                <Link 
                                className='py-2 px-6 bg-[#332932] text-white shadow-sm hover:shadow-md duration-300 border-[1px] rounded-md'
                                href={project.githubLink} target='_blank'> S. Code</Link>
                            </div>
                        </motion.div>
                    ))
                }
            </div>

        </div>
    )
}
