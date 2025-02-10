import Link from 'next/link';
import React from 'react'

interface BlogCardProps {
  id: number;
  title: string;
  body: string;
}

export const BlogCard = ({id,title,body}:BlogCardProps) => {
  return (
    <div key={id} className='bg-gray-100 p-4  flex flex-col justify-between rounded-xl'>
    <Link href={`/post/${id}`} className='text-xl capitalize font-bold hover:underline'>{title}</Link>
    <p>{body.length > 100 ? `${body.slice(0, 100)}...` : body}
    </p>
    <Link href={`/post/${id}`} className='self-end font-semibold text-blue-800 hover:text-blue-500 hover:underline '>Read More</Link>

</div>
  )
}

