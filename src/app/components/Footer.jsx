import Link from 'next/link'
import React from 'react'
import { BsFileEarmarkPdfFill } from 'react-icons/bs'
import { IoLogoGithub, IoLogoLinkedin, IoMail } from 'react-icons/io5'

const currentYear = new Date().getFullYear();

export default function Footer() {
    return (
        <div className='sm:px-28 py-10 mt-10 sm:mt-0 flex sm:flex-row flex-col justify-between items-center bg-[#332932] text-white md:mt-80 lg:mt-10'>
            <div className='space-y-8'>
                {/* socials */}
                <div className='flex sm:justify-start justify-center items-center gap-4'>

                    <Link href='https://shorturl.at/4Zmcz' target='_blank'>
                        <IoLogoLinkedin className='text-3xl text-white hover:text-[#4AC8A3] duration-300 hover:scale-110' />
                    </Link>
                    <Link href='https://shorturl.at/QaLAT' target='_blank'>
                        <IoLogoGithub className='text-3xl text-white hover:text-[#4AC8A3] duration-300 hover:scale-110' />
                    </Link>
                    <Link href='mailto:collinsogunlala@gmail.com' target='_blank'>
                        <IoMail className='text-3xl text-white hover:text-[#4AC8A3] duration-300 hover:scale-110' />
                    </Link>
                    <Link href='/Adedamola.pdf' type='application/pdf' download target='_blank'>

                        <BsFileEarmarkPdfFill className='text-3xl text-white hover:text-[#4AC8A3] duration-300 hover:scale-110 h-5' />
                    </Link>
                </div>

                <h1 className='text-2xl'>Adedamola Ogunlala<span className='text-[#4AC8A3] text-4xl'>.</span></h1>
            </div>
            <div>
                <p>&copy; {currentYear} Adedamola. All rights reserved.</p>
            </div>
        </div>
    )
}
