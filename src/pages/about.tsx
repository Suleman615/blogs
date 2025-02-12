import React from 'react'
import Welcome from '@/components/aboutpage components/Welcome';
import { Journey } from '@/components/aboutpage components/Journey';
import WhatWeWrite from '@/components/aboutpage components/WhatWeWrite';
import WhyUs from '@/components/aboutpage components/WhyUs';
import Head from 'next/head';


const about = () => {
  return (
    <>
      <Head>
        <title>About | My Blogs</title>
        <meta name="description" content="Welcome to findmyblogs.vercel.app. Read the latest blogs and explore exciting content." />
        <meta name="keywords" content="blogs, articles, latest news, technology, lifestyle" />
        <meta name="author" content="Ghulam Suleman" />

        {/* Favicon */}
        <link rel="icon" href="images/favicon.svg" />
      </Head>
      
      <div className='max-w-7xl mt-0 mx-auto text-gray-700  px-4 sm:px-6 lg:px-8 '>
        <div className='bg-[url(/images/blog-cover.jpg)] my-10 h-48 flex justify-center items-center  p-8  rounded-md  bg-cover'>
          <h1 className='text-center font-bold font-serif text-5xl'>About Us</h1>
        </div>

        <Welcome />
        <Journey />
        <WhatWeWrite />
        <WhyUs />
      </div>
    </>
  )
}

export default about