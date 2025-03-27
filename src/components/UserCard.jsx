import React from 'react';

const UserCard = ({ user }) => {
  const { firstName, lastName, age, photoURL, gender, about } = user;
  return (
    <div className='mt-9 '>
      <div className="card bg-base-300 w-96  shadow-sm">
        <figure>
          <img
            className='mt-4'
            src={user.photoURL}
            alt="Shoes" />
        </figure>
        <div className="card-body h-70 ">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          {age + " " + gender}
          <p>{about}</p>
          <div className="card-actions flex justify-center my-4">
            <button className="btn btn-primary">Ignore</button>
            <button className="btn btn-secondary">Intrested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;