import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiMenu, FiX } from 'react-icons/fi';
import { Black_And_White_Picture } from 'next/font/google';

const geist = Black_And_White_Picture({ subsets: ['latin'], weight: '400' });


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();

    const isActive = (path: string) => (router.pathname === path ? 'text-blue-500' : 'text-gray-700');

    return (
        <nav className="bg-white py-2  w-full sticky select-none transition-all duration-1000">
            <div className="max-w-7xl mx-auto px-4 sm:px-6  lg:px-8">
                <div className="flex justify-between items-center h-16">


                    {/* LOGO*/}
                    <div className={`text-5xl font-bold text-gray-900 ${geist.className}`}>
                        <Link href="/">My Blogs</Link>
                    </div>

                   

                    {/* Desktop Menu */}
                    <div className="hidden sm:flex space-x-6">
                        <Link href="/" className={`px-3 py-2 rounded-md text-md font-medium ${isActive('/')}`}>
                            Home
                        </Link>
                        <Link href="/about" className={`px-3 py-2 rounded-md text-md font-medium ${isActive('/about')}`}>
                            About
                        </Link>
                    </div>




                    {/* Mobile Menu Button */}
                    <button
                        className="sm:hidden text-gray-600 hover:text-gray-900 transition-all duration-1000"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>


                {/* Mobile Menu */}
                <div className={`overflow-hidden transition-all duration-1000 ${menuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>


                    <div className="sm:hidden bg-white w-full flex flex-col space-y-2 py-3">
                        <Link
                            href="/"
                            className={`block px-4 py-2 text-md font-medium ${isActive('/')}`}
                            onClick={() => setMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className={`block px-4 py-2 text-md font-medium ${isActive('/about')}`}
                            onClick={() => setMenuOpen(false)}
                        >
                            About
                        </Link>
                    </div>

                </div>

               
            </div>
        </nav>
    );
};

export default Navbar;
