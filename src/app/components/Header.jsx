"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoClose, IoMenu } from "react-icons/io5";
import MobileNav from './MobileNav';
import { motion } from "framer-motion"


export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const setHamburger = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div className='px-5 sm:px-28 py-5 sm:py-5 flex items-center justify-between'>
        <motion.div 
        initial={{ x: "0%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: false, amount: 0.5 }}
        className='flex items-center justify-start space-x-2 sm:space-x-5'>
            <Image className='w-7 sm:w-10' src='/mylogo.svg' alt='Logo' title='Logo' width={50} height={50} />
            <Link href='/' className='text-2xl font-bold text-[#332932]'>Adedamola</Link>
        </motion.div>

        {/* Desktop Navbar */}
        {/* className={`text-base font-bold focus:text-[#4AC8A3]  ${`focus: ? text-[#332932] :  `} duration-300`} */}
        <motion.div 
        initial={{ x: "-10%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.0 }}
        viewport={{ once: false, amount: 0.5 }}
        className='hidden lg:flex'>
            <ul className='flex items-center justify-end space-x-10'>
                <li>
                    <Link href='#home' className='text-base font-bold text-[#332932] hover:text-[#4AC8A3] duration-300 focus:text-[#4AC8A3]'>Home</Link>
                </li>
                <li>
                    <Link href='#about' className='text-base font-bold text-[#332932] hover:text-[#4AC8A3] duration-300 focus:text-[#4AC8A3]'>About</Link>
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
        </motion.div>

        <div className='flex lg:hidden'>
            {/* Mobile Navbar */}
            <IoMenu onClick={setHamburger} className={`${isOpen ? 'hidden' : 'h-8 w-8 text-[#4ac8a3] animate active:animate-spin duration-300 cursor-pointer'}`} />
            <IoClose onClick={setHamburger} className={`${!isOpen ? 'hidden' : 'h-8 w-8 text-[#4ac8a3] animate active:animate-spin duration-300 cursor-pointer'}`} />
        </div>

        {isOpen && 

            <MobileNav />
        }
  
    </div>
  )
}
