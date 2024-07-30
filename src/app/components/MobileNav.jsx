import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { motion } from "framer-motion"

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false)

    const handleLinkClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: setIsOpen ? 1 : 0, x: setIsOpen ? 0 : '100%' }}
            transition={{ duration: 0.3 }}
            className={`${setIsOpen ? '' : ''} absolute top-[100%] left-0 w-[100vw] rounded-bl-[80%] bg-[#4ac8a3] p-10`}>
            <Image src='/mylogo.svg' alt='Logo' width={20} height={20} />
            <div>
                <ul className='flex flex-col space-y-5 items-end justify-end'>
                    <li>
                        <Link onClick={handleLinkClick} href='#home' className='text-base font-bold text-[#332932]'>Home</Link>
                    </li>
                    <li>
                        <Link onClick={handleLinkClick} href='#about' className='text-base font-bold text-[#332932]'>About</Link>
                    </li>
                    <li>
                        <Link onClick={handleLinkClick} href='#skill' className='text-base font-bold text-[#332932]'>Skills</Link>
                    </li>
                    <li>
                        <Link onClick={handleLinkClick} href='#project' className='text-base font-bold text-[#332932]'>Projects</Link>
                    </li>
                    <li>
                        <Link onClick={handleLinkClick} href='#contact' className='text-base font-bold text-[#332932]'>Contact</Link>
                    </li>
                </ul>
            </div>
        </motion.div>
    )
}
