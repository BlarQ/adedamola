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
     className='absolute top-[100%] left-0 w-[100vw] rounded-bl-[80%] bg-[#4ac8a3] p-10'>
        <Image src='/mylogo.svg' alt='Logo' width={20} height={20}/>
        <div>
            <ul className='flex flex-col space-y-5 items-end justify-end'>
                <li>
                    <Link href='#home' className='text-base font-bold text-[#332932]'>Home</Link>
                </li>
                <li>
                    <Link href='#about' className='text-base font-bold text-[#332932]'>About</Link>
                </li>
                <li>
                    <Link href='/Skills' className='text-base font-bold text-[#332932]'>Skills</Link>
                </li>
                <li>
                    <Link href='/Projects' className='text-base font-bold text-[#332932]'>Projects</Link>
                </li>
                <li>
                    <Link href='/contact' className='text-base font-bold text-[#332932]'>Contact</Link>
                </li>
            </ul>
        </div>
    </motion.div>
  )
}
