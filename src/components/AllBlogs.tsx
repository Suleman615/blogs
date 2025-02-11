import React, { useEffect, useState } from 'react'
import { BlogCard } from './BlogCard'
import { fetchPosts, Post } from '@/pages/api'
import Loading from './Loading';
import { FiSearch } from 'react-icons/fi';







const AllBlogs = () => {


    const [blogs, setBlogs] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [filteredPosts, setFilteredPosts] = useState<Post[]>([])
    const [tagValue, setTagValue] = useState(false)


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


    const handleSearchTag = (value: string) => {
        if (value.includes('#')) {
            value = value.slice(1)
        }
        const filtered = blogs.filter(post => post.title.includes(value))
        console.log(filtered)
        setFilteredPosts(filtered)
        setTagValue(true)

    }

    


    if (loading) return (
        <Loading />
    );

    return (
        <div className='max-w-7xl  mx-auto mb-4 px-4 sm:px-6 lg:px-8'>


            {/* search  */}
            <div className="top-16 mt-3">
                <div className="relative">
                    <input
                        onChange={(e) => handleSearchTag(e.target.value)}
                        type="text"
                        placeholder="#search"
                        className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <FiSearch 
                        className="absolute right-3 top-3 text-gray-500" />
                </div>
            </div>


            {/* All blogs  */}
            <h1 className='text-4xl font-serif  text-center  font-bold py-8'>Blogs</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4'>


                {(tagValue) ? (filteredPosts.length>0)?(filteredPosts.map(blog => (
                    <BlogCard key={blog.id} id={blog.id} title={blog.title} body={blog.body} />
                ))):<h1 className='text-center mx-auto w-[100vw] text-3xl md:text-5xl font-serif font-bold'>Sorry... No Match Found</h1> : blogs.map(blog => (
                    <BlogCard key={blog.id} id={blog.id} title={blog.title} body={blog.body} />
                ))}
            </div>
        </div>
    )
}

export default AllBlogs