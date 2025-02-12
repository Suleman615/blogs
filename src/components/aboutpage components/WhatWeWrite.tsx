import React from 'react'

const WhatWeWrite = () => {
    return (
        <div>
            <h1 className='text-3xl py-2 font-bold text-center font-serif'>What we write about:</h1>
            <p className='px-2 lg:px-72  text-center'>We cover a wide range of topics to ensure there’s something for everyone. Our goal is to provide valuable, informative, and entertaining content that meets the diverse interests of our audience. Below are some of the categories we focus on, along with what you can expect from each:</p>
           


           
            <div className='flex my-10 flex-wrap justify-center gap-10 px-10 '>
                <div className=' p-4 rounded-lg  bg-[url(/images/lifestyle.jpg)] h-64 w-64   bg-contain bg-no-repeat '>
                    <h1 className='text-xl font-semibold text-black font-serif text-center  '>Lifestyle</h1>
                    <p className='text-center pt-2 text-gray-900 font-semibold'>Tips and advice on how to live a more fulfilling and balanced life. From mindfulness to organization, personal finance to home decor, our lifestyle section is designed to inspire and empower.</p>
                </div>
                <div className=' p-4 rounded-lg  bg-[url(/images/technology.jpg)] h-64 w-64 bg-contain bg-no-repeat '>
                    <h1 className='text-xl font-semibold text-white font-serif text-center'>Technology</h1>
                    <p className='text-center pt-2 text-white font-semibold'>Stay ahead of the curve with our tech articles, covering everything from gadgets and apps to digital trends and innovations. We simplify complex tech concepts, making them accessible to everyone.</p>
                </div>
                <div className=' p-4 rounded-lg  bg-[url(/images/travel.jpeg)] h-64 w-64 bg-contain bg-no-repeat '>
                    <h1 className='text-xl font-semibold text-black font-serif text-center'>Travel</h1>
                    <p className='text-center pt-2 text-white font-semibold'>Explore the world through our travel guides, destination recommendations, and adventure stories. Whether you're planning your next vacation or just daydreaming about far-off places, we bring the world to you.</p>
                </div>
                <div className=' p-4 rounded-lg  bg-[url(/images/creativity.jpg)] h-64 w-64 bg-contain bg-no-repeat '>
                    <h1 className='text-xl font-semibold text-black font-serif text-center'>Creativity & Design</h1>
                    <p className='text-center pt-2 text-black font-semibold'>For those passionate about design, art, and creativity, we offer articles on graphic design, creative processes, and how to tap into your artistic potential.</p>
                </div>
                <div className=' p-4 rounded-lg  bg-[url(/images/food.jpg)] h-64 w-64 bg-contain bg-no-repeat '>
                    <h1 className='text-xl font-semibold text-black font-serif text-center'>Food & Drink:</h1>
                    <p className='text-center pt-2 text-black text-xl font-semibold'>For foodies and home cooks, we offer recipes, cooking tips, and recommendations on the best food and drink experiences.</p>
                </div>
                <div className=' p-4 rounded-lg  bg-[url(/images/sports.jpg)] h-64 w-64 bg-contain bg-no-repeat '>
                    <h1 className='text-xl font-semibold text-black font-serif text-center'>Sports</h1>
                    <p className='text-center pt-2 text-gray-300 font-semibold'>Get the latest match analysis, player spotlights, and sports news from football, basketball, cricket, and more. Stay updated with fitness tips and expert insights into the world of athletics.</p>
                </div>
            </div>

        </div>
    )
}

export default WhatWeWrite