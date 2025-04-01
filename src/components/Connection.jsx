import React, { useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { connect, useDispatch, useSelector } from "react-redux";
import { addConnections } from '../utils/connectionSlice';


const Connection = () => {
  const connections = useSelector((store) => store.connections);
  console.log(connections);
  const dispatch = useDispatch();


  const fetchConnection = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", { withCredentials: true });

      console.log(res.data);

      dispatch(addConnections(res.data));

    } catch (error) {

    }
  };

  useEffect(() => {
    fetchConnection();
  }, []);


  if (!connections) return;

  if (connections && connections.length === 0) return (<div>No connection found</div>);


  return (
    <div className='flex flex-col justify-center items-center gap-5'>
      <h1>Connections</h1>
      <div className='flex '>
        {connections.map((connection) => {
          const { _id, firstName, lastName, age, gender, photoURL, about } = connection;
          return (
            <div className='flex gap-5  p-2 bg-black rounded-xl w-96 mt-4'>
              <div className=''>
                <img src={photoURL} className='w-16 h-16 rounded-full'></img>
              </div>
              <div>
                <h1>{firstName + " " + lastName}</h1>
                <h4>{age + " " + gender}</h4>
                <h3>{about}</h3>
              </div>
            </div>);
        }
        )}
      </div>
    </div>
  );
};

export default Connection;