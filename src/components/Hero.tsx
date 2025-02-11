import React from 'react'
import Image from 'next/image'
import { FiSearch } from 'react-icons/fi'



export const Hero: React.FC = () => {
 

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

     

      {/* Hero card */}
      <div className='bg-gray-400 bg-opacity-15 py-6 rounded-xl gap-4 mb-10 mt-4 flex flex-col items-center'>
        <div className='flex gap-3 justify-center'>
          <Image src="/images/profile.jpg" alt='hero' height={50} width={50} className='rounded-full object-contain h-30' />
          <div>
            <p className='font-bold m-0 p-0 text-lg'>Ghulam Suleman</p>
            <p className='m-0 p-0 text-gray-600 font-semibold'>Contributor</p>
          </div>
        </div>
        <p className='max-w-[30rem] mx-auto text-center text-gray-500'>
          A "blogger" is an individual who regularly publishes written content on an online platform, often referred to as a "blog," sharing their thoughts, experiences, or information on a specific topic, typically accessible to a public audience, and can utilize AI tools to assist with research, content generation, and optimization.
        </p>
      </div>

      
    </div>
  )
}
