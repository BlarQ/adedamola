import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoArrowForward, IoLogoGithub, IoLogoLinkedin, IoMail } from 'react-icons/io5'

export default function HomePage() {
  return (
    <div className='px-20 flex justify-center items-center min-h-[80vh]'>
        <div className='relative w-1/2 px-20'>
            <h1 className='text-6xl font-bold text-[#332932] pb-7'>Adedamola<br />Ogunlala<span className='text-[#4AC8A3]'>.</span></h1>

            <hr className='border-4 w-28 border-[#4AC8A3]'/>

            <div className='py-10 flex justify-start items-center gap-4'>
                <Link href='/'>
                    <IoLogoLinkedin className='text-3xl text-[#332932] hover:text-[#4AC8A3] duration-300 hover:scale-110'/>
                </Link>
                <Link href='/'>
                    <IoLogoGithub className='text-3xl text-[#332932] hover:text-[#4AC8A3] duration-300 hover:scale-110'/>
                </Link>
                <Link href='/'>
                    <IoMail className='text-3xl text-[#332932] hover:text-[#4AC8A3] duration-300 hover:scale-110'/>
                </Link>
            </div>

            <div className='absolute -top-[100%] -right-[30%] -z-[1]'>
                <Image src='/myimage.svg' alt='Adedamola Ogunlala' title='Adedamola Ogunlala' width={500} height={500} />
            </div>
        </div>
        <div className='w-1/2'>

            <div className='pl-[25%] text-[#332932]'>
                <p className='text-2xl font-semibold border-[#332932] border-b-2 w-fit'>Introduction</p>
                <h2 className='text-2xl py-4 font-semibold'>
                    FrontEnd Developer
                </h2>
                <p className='text-sm text-[#332932] w-[90%] pb-4'>
                I am a frontend engineer from Lagos, Nigeria, who has a keen interest in building innovative solutions for various industries specializing in React.js, Next.js, and Tailwind CSS. My key project, TrendLuxe Ecommerce, demonstrates my ability to create engaging user interfaces using React hooks and Context API. I am committed to continuous learning and staying updated with web development trends
                </p>

                <Link href='/' className='text-[#332932] border-b-2 border-[#4AC8A3] flex justify-center items-center w-fit gap-1 hover:gap-2 duration-300'>
                    Know me
                    <IoArrowForward />
                </Link>
            </div>
        </div>
    </div>
  )
}
