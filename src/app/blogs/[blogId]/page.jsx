import React from 'react';

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

const BlogDetailPage = async ({params}) => {
    const res = await params;
     
    const blog= blogs.find(b => b.id === parseInt(res.blogId));
    return (
        <div>
            <h1>Blog Detailes</h1>
            {
                blog && <div>
                    <h2 className='text-4xl'>{blog.title}</h2>
                    <p className="text-xl">{blog.author}</p>
                </div>
            }
        </div>
    );
};

export default BlogDetailPage;