import React, { useEffect, useState } from 'react'
import { BlogCard } from './BlogCard'
import { fetchPosts, Post } from '@/pages/api'
import Loading from './Loading';







const AllBlogs = () => {


    const [blogs, setBlogs] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getPosts() {
            try {
                const data = await fetchPosts();
                setBlogs(data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                setLoading(false);
            }
        }

        getPosts();
    }, []);

    if (loading) return (
        <Loading/>
    );

    return (
        <div className='max-w-7xl  mx-auto mb-4 px-4 sm:px-6 lg:px-8'>
            <h1 className='text-3xl font-bold pb-8'>Latest Blogs</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {blogs.map(blog => (
                    <BlogCard key={blog.id} id={blog.id} title={blog.title} body={blog.body} />
                ))}
            </div>
        </div>
    )
}

export default AllBlogs