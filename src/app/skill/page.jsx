'use client'
import React, { useRef } from 'react'
import { frontendSkills } from '../components/frontendSkills'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Skill() {
    const scrollRef = useRef(null)

    return (
        <div className='min-h-[100vh] px-7 sm:px-28 py-18 sm:py-7 overflow-x-hidden' id='skill'>
            <div className='flex flex-col items-start'>

                <h1 className='text-xl sm:text-3xl font-bold'>My Skill</h1>
                <hr className='border-4 w-14 sm:w-[10%] border-[#4AC8A3] right-0' />
            </div>

            <div className='hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-5'>
                {
                    frontendSkills.map((skill, index) => (
                        <motion.div
                            initial={{ x: "0%", opacity: 0 }}
                            transition={{ duration: 1.0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: false, amount: 0.5 }}
                            key={index} className='flex flex-col items-center justify-center gap-2 border-[1px] rounded-md shadow-sm hover:shadow-md hover:animate-pulse duration-300'>
                            <div className=' flex flex-col items-center justify-center gap-2 px-8 py-4'>
                                <Image src={skill.logo} alt={skill.name} width={100} height={100} className='' />
                                <span className='text-[#4ac8a3] text-xl italic'>{skill.level}</span>
                            </div>
                            <span className='font-semibold py-2'>{skill.name}</span>
                        </motion.div>
                    ))
                }
            </div>

            <div ref={scrollRef} style={{ overflowX: "scroll" }} className="sm:hidden flex gap-2 py-5">
                {frontendSkills.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ root: scrollRef.current }}
                        className="min-w-[240px] flex flex-col items-center justify-center gap-2 border-[1px] rounded-md shadow-sm hover:shadow-md duration-300 h-[40vh]"
                    >
                        <div className="flex flex-col items-center justify-center gap-2 px-8 py-4">
                            <Image src={skill.logo} alt={skill.name} width={100} height={100} />
                            <span className="text-[#4ac8a3] text-xl italic">{skill.level}</span>
                        </div>
                        <span className="font-semibold py-2">{skill.name}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}