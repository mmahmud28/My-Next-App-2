import Link from 'next/link';
import React from 'react';

const BlogsPage = () => {
    const blogs = [
        {
            id: 1,
            title: "Getting Started with Next.js",
            author: "John Doe",
            date: "2026-04-01",
            category: "Web Development",
            image: "https://i.ibb.co/8r1Ny2n/nextjs.jpg",
            description: "Learn the basics of Next.js, including routing, pages, and building modern web applications with React."
        },
        {
            id: 2,
            title: "Mastering React Hooks",
            author: "Jane Smith",
            date: "2026-03-25",
            category: "React",
            image: "https://i.ibb.co/2kR5zqK/react-hooks.jpg",
            description: "Understand how to use React Hooks like useState, useEffect, and custom hooks to simplify your code."
        },
        {
            id: 3,
            title: "Tailwind CSS Tips & Tricks",
            author: "Alex Johnson",
            date: "2026-03-18",
            category: "CSS",
            image: "https://i.ibb.co/ZYW3VTp/tailwind.jpg",
            description: "Boost your productivity with Tailwind CSS by learning useful tips, utility classes, and design techniques."
        },
        {
            id: 4,
            title: "JavaScript ES6 Features You Must Know",
            author: "Emily Davis",
            date: "2026-03-10",
            category: "JavaScript",
            image: "https://i.ibb.co/7yZQw1B/javascript.jpg",
            description: "Explore essential ES6 features like arrow functions, destructuring, modules, and more."
        }
    ];
    return (
        <div>
            <h2 className="text-4">Blogs</h2>
            <div className='grid grid-cols-2 gap-4'>
                {
                    blogs.map(blog => <div className='card p-5 space-y-4 w-96 bg-base-100 shadow-xl' key={blog.id}>
                        <h3 className='text-green-500'>{blog.title}</h3>
                        <p>By {blog.author} on {blog.date} in {blog.category}</p>
                        <p>{blog.description}</p>
                        <Link href={`/blogs/${blog.id}`} className='btn btn-primary'>Read More</Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default BlogsPage;