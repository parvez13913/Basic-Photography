import React from 'react';
import useUsers from '../../../hooks/useUsers';
import User from '../User/User';
import './UsersReview.css';

const UsersReview = () => {
    const [users] = useUsers([]);
    return (
        <div className='container'>
            <h1 className='text-center text-success my-3'>User Review</h1>
            <div className='user-section'>
                {
                    users.map(user => <User
                        key={user.id}
                        user = {user}
                    />)
                }
            </div>
        </div>
    );
};

export default UsersReview;