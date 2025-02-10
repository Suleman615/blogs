import React from 'react'

const Loading = () => {
    return (
        <div>
            <div className='max-w-7xl  mx-auto  px-4 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <div className='bg-gray-100 p-4  flex flex-col justify-between rounded-xl animate-pulse'>
                        <h2 className='text-xl text-center font-bold'>Loading...</h2>
                        <p className='h-16 bg-gray-200 rounded-xl animate-pulse'></p>
                    </div>
                    <div className='bg-gray-100 p-4  flex flex-col justify-between rounded-xl animate-pulse'>
                        <h2 className='text-xl text-center font-bold'>Loading...</h2>
                        <p className='h-16 bg-gray-200 rounded-xl animate-pulse'></p>
                    </div>
                    <div className='bg-gray-100 p-4  flex flex-col justify-between rounded-xl animate-pulse'>
                        <h2 className='text-xl text-center font-bold'>Loading...</h2>
                        <p className='h-16 bg-gray-200 rounded-xl animate-pulse'></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading