import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function MobileNav({ setIsOpen }) {
    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <div className='absolute top-[100%] left-0 w-[100vw] rounded-bl-[80%] bg-[#4ac8a3] p-10'>
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
        </div>
    )
}
