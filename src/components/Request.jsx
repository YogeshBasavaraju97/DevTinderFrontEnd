import axios from 'axios';
import React, { useEffect } from 'react';
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addRequest, removerRequest } from '../utils/RequestSlice';

const Request = () => {
  const requests = useSelector((store) => store.requests);
  console.log("first", requests);
  const dispatch = useDispatch();

  const reviewRequest = async (status, _id) => {
    const res = await axios.post(BASE_URL + "/request/review/" + status + "/" + _id, {}, { withCredentials: true });
    dispatch(removerRequest(_id));
  };

  const fetchRequest = async () => {

    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", { withCredentials: true });
      console.log(res.data.data);

      dispatch(addRequest(res.data.data));

    } catch (error) {

    }

  };

  useEffect(() => {
    fetchRequest();
  }, []);

  if (!requests) return;
  if (requests && requests.length === 0) { return (<div>No request found</div>); }

  return (
    <div className='flex flex-col justify-center items-center gap-5'>
      <h1>Requests</h1>
      <div className=' '>
        {requests.map((request) => {
          const { firstName, lastName, age, gender, photoURL, about } = request.fromUserId;
          return (
            <div className='flex  gap-5 items-center  p-4 bg-black rounded-xl w-full mt-4'>
              <div className=''>
                <img src={photoURL} className='w-16 h-16 rounded-full'></img>
              </div>
              <div>
                <h1>{firstName + " " + lastName}</h1>
                <h4>{age + " " + gender}</h4>
                <h3>{about}</h3>
              </div>
              <div className='flex gap-3'>
                <button className="btn btn-secondary" onClick={() => reviewRequest("accepted", request._id)}>Accept</button>
                <button className="btn btn-primary" onClick={() => reviewRequest("rejected", request._id)}>Reject</button>

              </div>
            </div>);
        }
        )}
      </div>
    </div>
  );
};

export default Request;