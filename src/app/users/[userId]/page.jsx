import React from 'react';

const UserDetailesPage = async ({params}) => {
    const {userId} = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await res.json();
    return (
        <div className="card bg-primary text-primary-content w-96">
            <div className="card-body">
                <h1 className="card-title text-2xl font-bold">{user.name}</h1>
                <p className='text-xl font-semibold'>{user.email}</p>
                <p className='text-xl font-semibold'>{user.phone}</p>
                <p className='text-xl font-semibold'>{user.website}</p>
            </div>
        </div>
    );
};

export default UserDetailesPage;