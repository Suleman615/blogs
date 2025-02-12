export interface Post {
  userId: number
  id: number;
  title: string;
  body: string;
}


// fetch all post 
export async function fetchPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}


// fetch single post by id
export async function fetchPostById(postId: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  if (!res.ok) throw new Error("Failed to fetch post");
  return res.json();
}

// fetch use details by user id
export async function fetchUserById(userId: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  if (!res.ok) throw new Error("Failed to fetch post");
  return res.json();
}
