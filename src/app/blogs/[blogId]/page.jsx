import React from 'react';

const BlogDetailPage = async ({params}) => {
    const res = await params;
    console.log(res);
    return (
        <div>
            <h1>My Page Comming Soon</h1>
        </div>
    );
};

export default BlogDetailPage;