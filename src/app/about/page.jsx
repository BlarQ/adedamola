import React from 'react'

export default function About() {
  return (
    <div className='min-h-[100vh] px-7 sm:px-28 py-20 sm:py-24' id='about'>
      <div className='flex flex-col items-end'>

        <h1 className='text-xl sm:text-3xl font-bold'>About Me</h1>
        <hr className='border-4 w-14 sm:w-20 border-[#4AC8A3] right-0' />
      </div>

      <div className='flex flex-col sm:flex-row sm:items-center justify-center w-full'>
        <div className='sm:w-1/2'>

          <p className='py-4'>Dear Viewer,</p>
          <p className='text-justify'>Hello! My name is Adedamola Ogunlala, and I am a passionate Front-End developer dedicated to bringing projects to life with my skills. Although I graduated from Yaba College of Technology with a Higher National Degree in Microbiology, my true passion lies in web development. I became a certified Front-End developer in 2019 and have since built numerous mini-projects. Recently, I specialized in ReactJs development and earned a certification from Univelcity. <br /><br />
          As a certified Front-End developer with expertise in ReactJs, I have developed a wide range of projects, which are showcased on my project page. My skills are also highlighted on my skills page. Thank you for visiting!
          </p>

          <p className='py-4'>Thanks, <br />Adedamola.</p>
        </div>
        <div className='sm:w-1/2 flex items-center justify-center'>
          <p>holla!</p>
        </div>

      </div>
  
    </div>
  )
}
