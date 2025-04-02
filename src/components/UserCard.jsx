import axios from 'axios';
import React from 'react';
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { removeUserFeed } from '../utils/feedSlice';

const UserCard = ({ user }) => {
  const { _id, firstName, lastName, age, photoURL, gender, about } = user;
  const dispatch = useDispatch();


  const handleRequest = (status, userId) => {
    const res = axios.post(BASE_URL + "/request.send/" + status + "/" + userId, {}, { withCredentials: true });
    dispatch(removeUserFeed(userId));

  };
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
            <button className="btn btn-primary" onClick={() => handleRequest("ignored", _id)}>Ignore</button>
            <button className="btn btn-secondary" onClick={() => handleRequest("interested", _id)}>Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;