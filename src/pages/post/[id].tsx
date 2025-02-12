import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { Post, fetchPostById, fetchPosts, fetchUserById } from "../api";
import Head from "next/head";

interface PostProps {
    post: Post;
    username: string;
}

const PostDetails: React.FC<PostProps> = ({ post, username }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <h1 className="text-center text-xl font-bold ">Loading...</h1>;
    }

    return (
        <>
            <Head>
                <title>Blog | {post.id}</title>
                <meta name="description" content="Welcome to findmyblogs.vercel.app. Read the latest blogs and explore exciting content." />
                <meta name="keywords" content="blogs, articles, latest news, technology, lifestyle" />
                <meta name="author" content="Ghulam Suleman" />

                {/* Favicon */}
                <link rel="icon" href="images/favicon.svg" />
            </Head>

            <div className="w-full h-[75vh] px-4">
                <div className="max-w-7xl  mx-auto    px-4 sm:px-6 lg:px-8 py-6 border rounded-md  shadow-md">
                    <div className="bg-[url(/images/blog-cover.jpg)] h-fit   p-8  rounded-md  bg-cover">
                        <h1 className="text-2xl md:text-5xl font-bold w-full capitalize ">{post.title}</h1>

                    </div>
                    <div className="flex justify-between py-4">
                        <p className="text-gray-500 "><i>Post ID:</i> <span className="text-gray-900 font-semibold">{post.id}</span></p>
                        <section className="flex">
                            <p className="text-gray-500 "><i>Auther:</i> <span className="text-gray-900 font-semibold">{username}</span> </p>
                        </section>
                    </div>



                    <p className="text-gray-600 mt-4">{post.body}</p>
                </div>
            </div>
        </>
    );
};

export default PostDetails;



export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const posts = await fetchPosts();
        const paths = posts.map((post) => ({
            params: { id: post.id.toString() },
        }));

        return { paths, fallback: "blocking" };
    } catch (error) {
        console.error("Error fetching posts:", error);
        return { paths: [], fallback: false };
    }
};


export const getStaticProps: GetStaticProps = async ({ params }) => {
    if (!params?.id) return { notFound: true };

    try {
        const post = await fetchPostById(params.id as string);
        const user = await fetchUserById(post.userId.toString()); // Fetch user by userId

        return {
            props: {
                post,
                username: user.username
            }, revalidate: 10
        };
    } catch (error) {
        console.error("Error fetching post:", error);
        return { notFound: true };
    }
};


