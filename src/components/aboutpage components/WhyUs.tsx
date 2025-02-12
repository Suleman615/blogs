import React from 'react'

const WhyUs = () => {
  return (
    <div>
        <div className=' gap-4  justify-between my-10'>
    
        <h3 className='text-3xl py-2 font-bold text-center font-serif my-4'>Why Us</h3>

            <div className='flex pt-4 flex-wrap  justify-center font-semibold text-center  gap-3'>

                
                <div className='py-4 max-w-72  px-4 rounded-lg border border-b-4  bg-gray-300'>
                    <h1 className='text-gray-900 text-2xl font-semibold font-serif '>Variety of Topics</h1>
                    <p>We offer content on a wide range of subjects to ensure there’s always something for everyone.</p>
                </div>
                <div className='py-4 max-w-72 px-4 rounded-lg border border-b-4  bg-gray-300'>
                    <h1 className='text-gray-900 text-2xl font-semibold font-serif '>Expert Contributors</h1>
              <p> Our team includes professionals, specialists, and passionate hobbyists who bring diverse perspectives.</p>
                </div>
                <div className='py-4 max-w-72 px-4 rounded-lg border border-b-4  bg-gray-300'>
                    <h1 className='text-gray-900 text-2xl font-semibold font-serif '>Engaging Writing</h1>
                <p>Our articles are written in a conversational tone, ensuring you feel connected to the content.</p>
                </div>
                <div className='py-4 max-w-72 px-2 rounded-lg border border-b-4  bg-gray-300'>
                    <h1 className='text-gray-900 text-2xl font-semibold font-serif '>Community Engagement</h1>
               <p>We love hearing from our readers. Join our community through comments, social media, and newsletters.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyUs