import React from 'react';

const User = ({user}) => {
    const {picture,name,ratings,email,reviews} = user;
    return (
        <div className='border p-3 shadow-lg rounded text-center'>
            <div>
                <img className='rounded-pill' width={100} src={picture} alt="usersPhoto" />
            </div>
            <div>
                <h5>{name}</h5>
                <p>Email Address: {email}</p>
                <h6>Ratings: {ratings}</h6>
                <p>reviews: {reviews}</p>
            </div>
        </div>
    );
};

export default User;