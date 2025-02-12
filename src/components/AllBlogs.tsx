import React, { useEffect, useState } from 'react';
import { BlogCard } from './BlogCard';
import { fetchPosts, Post } from '@/pages/api';
import Loading from './Loading';
import { FiSearch } from 'react-icons/fi';
import Pagination from '@/components/Pagination';

const AllBlogs = () => {
    const [blogs, setBlogs] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
    const [tagValue, setTagValue] = useState(false);
    const [error, setError] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 9;


    // get all post 
    useEffect(() => {
        async function getPosts() {
            try {
                const data = await fetchPosts();
                setBlogs(data);
                setFilteredPosts(data);
            } catch (error) {
                console.error("Error fetching posts:", error);
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        getPosts();
    }, []);



    // search using keyword or hashtag 
    const handleSearchTag = (value: string) => {
        if (value.includes('#')) {
            value = value.slice(1);
        }

        if (value.trim() === "") {
            setFilteredPosts(blogs);
            // setTagValue(false);
            return;
        }

        const filtered = blogs.filter(post => post.title.toLowerCase().includes(value.toLowerCase()));
        setFilteredPosts(filtered);
        // setTagValue(true);
        setCurrentPage(1); // Reset pagination when searching
    };

    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <div className="max-w-7xl mx-auto mb-4 px-4 sm:px-6 lg:px-8">
            {/* search bar */}
            <div className="mt-3 max-w-[300px] relative">
                <input
                    onChange={(e) => handleSearchTag(e.target.value)}
                    type="text"
                    placeholder="Search blogs by title..."
                    className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <FiSearch className="absolute right-3 top-3 text-gray-500" />
            </div>

            <h1 className="text-4xl font-serif text-center font-bold py-8">Blogs</h1>

            {/* laoding and error  */}
            {loading && <Loading />}
            {error && <h1 className="text-center text-red-600 text-3xl font-bold py-8">Failed to load blogs. Please try again.</h1>}


            {/* blogs display  */}
            {!loading && !error && (
                <>
                    {currentPosts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {currentPosts.map(blog => (
                                <BlogCard key={blog.id} id={blog.id} title={blog.title} body={blog.body} />
                            ))}
                        </div>
                    ) : (
                        <h1 className="text-center mx-auto mt-10 mb-20 w-full text-3xl md:text-5xl font-serif font-bold">Sorry... No Match Found</h1>
                    )}


                    {/* pagination  */}
                    {totalPages > 1 && (
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={setCurrentPage}
                        />
                    )}
                </>
            )}
        </div>
    );
};

export default AllBlogs;
