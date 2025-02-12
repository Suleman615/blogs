import Image from 'next/image'
import React from 'react'

const Welcome = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row justify-between my-10'>

      {/* left side  */}
      <div>
        <h1 className='my-4 text-2xl font-semibold  font-serif'>Welcome to <span className={`text-3xl font-bold  text-gray-900 `}>My Blogs</span></h1>
        <p className='pr-0 md:pr-3'>We believe that <b>stories have the power to inspire, educate,</b> and <b>connect</b> people from all walks of life. Our mission is to provide insightful, well-researched, and thought-provoking content that enriches your daily life. Whether you're a curious reader, a knowledge seeker, or just someone looking for some entertainment, you've come to the right place!</p>
        <p className='pt-2'>Our blog covers a wide variety of topics, making sure there’s always something for everyone. From the latest tech trends to wellness tips, life hacks to travel adventures, we strive to offer a fresh perspective and creative insights on the things that matter most.</p>
      </div>

      {/* right side */}
      <div className='flex justify-center items-center   md:justify-end flex-shrink-0 w-full md:w-[50%] '>
        <Image src='/images/about.jpg' alt='about' width={500} height={500} className='rounded-lg h-56 w-full' />
      </div>
    </div>)
}

export default Welcome