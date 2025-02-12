import AllBlogs from "@/components/AllBlogs";
import { Hero } from "@/components/Hero";
import Head from "next/head";



export default function Home() {


  return (
    <>
      <Head>
        <title>Home | My Blogs</title>
        <meta name="description" content="Welcome to findmyblogs.vercel.app. Read the latest blogs and explore exciting content." />
        <meta name="keywords" content="blogs, articles, latest news, technology, lifestyle" />
        <meta name="author" content="Ghulam Suleman" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Home | My Blogs" />
        <meta property="og:description" content="Explore the latest blogs and articles on findmyblogs.vercel.app" />
        <meta property="og:image" content="https://findmyblogs.vercel.app/blog-cover.jpg" />
        <meta property="og:url" content="https://findmyblogs.vercel.app" />
        <meta property="og:type" content="website" />


        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home | My Blogs" />
        <meta name="twitter:description" content="Explore the latest blogs and articles on findmyblogs.vercel.app" />
        <meta name="twitter:image" content="https://findmyblogs.vercel.app/blog-cover.jpg" />

        {/* Favicon */}
        <link rel="icon" href="images/favicon.svg" />

      </Head>
      <div  >

        <Hero />
        <AllBlogs />
      </div>
    </>
  )
}
