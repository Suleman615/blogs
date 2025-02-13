# Blog Application

A simple blog application built with **Next.js** and **Tailwind CSS**, fetching posts from the JSONPlaceholder API. This project demonstrates static site generation, dynamic routing, and responsive design.

## Steps to Run the Project

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/blog-app.git
   cd blog-app
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the Development Server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
 
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



## Approach & Advanced Features

### Static Site Generation (SSG)
- Used `getStaticProps` on the homepage to fetch posts from the JSONPlaceholder API at build time.
- Implemented `getStaticPaths` in `post/[id].js` to pre-generate pages for individual posts.

### Search Functionality
- Implemented hashtag-based filtering to allow users to search for posts using hashtags.

### UI & Responsive Design
- Used Tailwind CSS for styling and ensured a mobile-friendly experience.
- Added active route highlighting in the navigation bar using Next.js `useRouter`.

### Deployment
- Deployed to **Vercel**, taking advantage of its optimized hosting for Next.js applications.

