import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BASE_URL } from '../utils/constants';
import { addUser } from '../utils/userSlice';
import UserCard from './UserCard';
import { toast } from "react-hot-toast";

const EditProfile = ({ user }) => {

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [photoURL, setPhotoURL] = useState(user.photoURL);
  const [about, setAbout] = useState(user.about);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const saveProfile = async () => {
    setError("");
    try {
      const response = await axios.patch(BASE_URL + "/profile/edit",
        { firstName, lastName, age, gender, photoURL, about },
        { withCredentials: true });

      dispatch(addUser(response?.data?.data));
      toast.success("Profile updated successfully!");

    } catch (error) {
      setError(error.response.data);
    }

  };

  return (
    user &&
    <div className='flex justify-center gap-5 '>
      <div className="flex  justify-center items-center my-10 ">
        <div className="card bg-base-300 w-96 shadow-xl">
          <div className="card-body  text-center">
            <h2 className="card-title justify-center">Edit Profile</h2>
            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label mt-4">
                  <span className="label-text">First Name</span>
                </div>
                <input
                  type="text"
                  value={firstName}
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setFirstName(e.target.value)}
                ></input>
              </label>
            </div>
            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label mt-4">
                  <span className="label-text">Last Name</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                ></input>
              </label>
            </div>
            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label mt-4">
                  <span className="label-text">Age</span>
                </div>
                <input
                  type="text"
                  value={age}
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setAge(e.target.value)}
                ></input>
              </label>
            </div> <div>
              <label className="form-control w-full max-w-xs">
                <div className="label mt-4">
                  <span className="label-text">Gender</span>
                </div>
                <input
                  type="text"
                  value={gender}
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setGender(e.target.value)}
                ></input>
              </label>
            </div>
            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label mt-4">
                  <span className="label-text">Photo URL</span>
                </div>
                <input
                  type="text"
                  value={photoURL}
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setPhotoURL(e.target.value)}
                ></input>
              </label>
            </div>
            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label mt-4">
                  <span className="label-text">About</span>
                </div>
                <textarea
                  type="text"
                  value={about}
                  className="input input-bordered w-full h-20"
                  onChange={(e) => setAbout(e.target.value)}
                ></textarea>
              </label>
              <p className='text-red-400'>{error}</p>
            </div>


            <div className="card-actions justify-center">
              <button className="btn btn-primary" onClick={saveProfile}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <UserCard user={{ firstName, lastName, age, gender, photoURL, about }} />
    </div>
  );
};

export default EditProfile;