import { useBlogs } from '../../../hooks/UseBlogs.js';
import BlogCard from '../../BlogCard/BlogCard.js';

export default function Main() {
  const blogs = useBlogs();
  return (
    <main>
      {blogs.map((blog) => (
        <BlogCard key={blog.name} {...blog}/>
      ))}
    </main>
  );
}
