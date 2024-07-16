import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion"

export default function MobileNav() {
  return (
    <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2 }}
     className='absolute top-[10%] left-0 w-[100vw] rounded-bl-[80%] bg-[#4ac8a3] p-10'>
        <Image src='/mylogo.svg' alt='Logo' width={20} height={20}/>
        <div>
            <ul className='flex flex-col space-y-5 items-end justify-end'>
                <li>
                    <Link href='/' className='text-base font-bold text-[#332932] hover:text-[#4AC8A3] duration-300 focus:text-[#4AC8A3]'>Home</Link>
                </li>
                <li>
                    <Link href='/About' className='text-base font-bold text-[#332932] hover:text-[#4AC8A3] duration-300 focus:text-[#4AC8A3]'>About</Link>
                </li>
                <li>
                    <Link href='/Skills' className='text-base font-bold text-[#332932] hover:text-[#4AC8A3] duration-300 focus:text-[#4AC8A3]'>Skills</Link>
                </li>
                <li>
                    <Link href='/Projects' className='text-base font-bold text-[#332932] hover:text-[#4AC8A3] duration-300 focus:text-[#4AC8A3]'>Projects</Link>
                </li>
                <li>
                    <Link href='/contact' className='text-base font-bold text-[#332932] hover:text-[#4AC8A3] duration-300 focus:text-[#4AC8A3]'>Contact</Link>
                </li>
            </ul>
        </div>
    </motion.div>
  )
}
