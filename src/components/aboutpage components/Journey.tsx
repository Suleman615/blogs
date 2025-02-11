import Image from 'next/image'
import React from 'react'

export const Journey = () => {
    return (
        <div className='flex flex-col  gap-4 md:flex-row justify-between my-10'>

            <div className='flex pt-4 justify-center   md:justify-start flex-shrink-0 w-full md:w-[50%] '>
                <Image src='/images/journey.jpg' alt='about' width={600} height={200} className='rounded-lg h-72 ' />
            </div>
            <div >
            <h1 className=' text-2xl font-semibold mb-3 font-serif  w-full'>Our<span className={`text-3xl font-bold  text-gray-900 `}> Journey</span></h1>
                <p className='pr-0 md:pr-3'>The idea for <span className='font-serif font-bold text-xl'>The Blogs</span> was born out of a shared passion for writing and storytelling. A group of writers, each with unique interests and experiences, came together with the goal of building a space that encourages open conversation and exploration. What started as a small blog with just a few articles has since blossomed into a community of engaged readers who share a love for learning, discovery, and inspiration.</p>
                <p className='pt-2'>Since then, we’ve grown significantly, but our core values of authenticity, creativity, and curiosity remain the same. We are continuously evolving, expanding our content, and finding new ways to connect with our readers.</p>
            </div>

        </div>)
}
