import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constants";
import { use } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      console.log(res);

      dispatch(addUser(res.data));
      navigate("/profile");
    } catch (error) {
      setError(error?.response.data || "something went wrong");
      console.log(error);
    }
  };

  const handleSignIn = async () => {
    setError("");
    try {
      const res = await axios.post(
        BASE_URL + "/Signup",
        {
          firstName,
          lastName,
          emailId,
          password,
        },
        { withCredentials: true }
      );

      console.log(res.data);
      setIsLoginForm(!isLoginForm);
    } catch (error) {
      setError(error?.response.data || "something went wrong");
      console.log(error?.response.data);
    }


  };

  return (
    <div className="flex  justify-center items-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body  text-center">
          <h2 className="card-title justify-center">{isLoginForm ? "signUp" : "Login"}</h2>
          {isLoginForm && <div>
            <label className="form-control w-full max-w-xs mt-3">
              <div className="label">
                <span className="label-text">First Name</span>
              </div>
              <input
                type="text"
                value={firstName}
                className="input input-bordered w-full max-w-xs m-3"
                onChange={(e) => setFirstName(e.target.value)}
              ></input>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Last Name</span>
              </div>
              <input
                type="text"
                value={lastName}
                className="input input-bordered w-full max-w-xs m-3"
                onChange={(e) => setLastName(e.target.value)}
              ></input>
            </label>
          </div>


          }
          <div>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Email ID</span>
              </div>
              <input
                type="text"
                value={emailId}
                className="input input-bordered w-full max-w-xs m-3"
                onChange={(e) => setEmailId(e.target.value)}
              ></input>
            </label>
          </div>
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs m-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </label>
          </div>

          {error && <p className="text-red-400">{error}</p>}
          <div className="card-actions justify-center">
            <div className="btn btn-primary" >
              {isLoginForm ? <button onClick={handleSignIn}>SignUp</button> : <button onClick={handleLogin}>Login</button>}
            </div>
          </div>
          <p>{isLoginForm ? <button onClick={() => setIsLoginForm(!isLoginForm)}> existing user: Login</button> : <button onClick={() => setIsLoginForm(!isLoginForm)}> New user : SignIn</button>}</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
