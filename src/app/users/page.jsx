import Link from "next/link";

const UsersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    return (
        <div>
            <div className="flex flex-wrap gap-4 mt-4">
                {
                    users.map(user => (
                        <div key={user.id} className="card bg-primary text-primary-content w-96">
                            <div className="card-body">
                                <h2 className="card-title text-2xl font-bold">{user.name}</h2>
                                <p className='text-xl font-semibold'>{user.email}</p>
                                <p className='text-xl font-semibold'>{user.phone}</p>
                                <p className='text-xl font-semibold'>{user.website}</p>
                                <div className="card-actions justify-end">
                                    <Link href={`/users/${user.id}`} className="btn">
                                        See Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default UsersPage;