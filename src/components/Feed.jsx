import React, { useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addFeed } from '../utils/feedSlice';
import UserCard from './UserCard';

const Feed = () => {
  const feed = useSelector((store) => store.feed);

  const dispatch = useDispatch();


  const getFeed = async () => {
    if (feed) return;

    try {
      const response = await axios.get(BASE_URL + '/feed', { withCredentials: true });

      dispatch(addFeed(response?.data?.data));

    } catch (error) {

    }

  };
  useEffect(() => {

    getFeed();
  }, []);


  if (!feed) return;

  if (feed && feed.length === 0) { return (<div>No users found</div>); }


  return feed && (
    <div className='flex justify-center mt-5'><UserCard user={feed[0]} /></div>
  );
};

export default Feed;