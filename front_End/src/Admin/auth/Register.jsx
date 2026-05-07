import React from "react";
import axios from "axios";
import { useState } from "react";

function Register() {
  const passData = {
    name:"",
    lastename:"",
    email:"",
    password:"",
    phone:"",
  }
  const [data, setData] = useState(passData);

  const handling_Data = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const Submit_Data = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post(`http://localhost:5000/api/v1/user/register`, data);
    alert(response.data.message);
     setData(passData);
  } catch (error) {
    console.log(error);
    alert(error.response.data.message)
  }
  }
console.log(data);

  return (
    <div className="w-full sm:h-screen h-auto bg-[#eeee] flex items-center flex-col p-5  box-border justify-center font-Nunito">
      <div className="sm:w-200 w-full sm:h-120 h-auto bg-white rounded-2xl shadow-sm text-center p-3 box-border flex flex-col sm:gap-2 items-center">
        <p className="text-3xl">Register</p>
        <p className="sm:text-[15px] text-[12px]">
          Start a new journey with us!
        </p>
        <div className="w-full h-auto flex sm:flex-row flex-col  items-center gap-5 justify-center text-[12px] ">
          <div className="w-80 h-auto flex flex-col gap-5 p-3">
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handling_Data}
              placeholder="name"
              className="w-full h-10 border rounded-2xl text-[15px] px-1"
            />
                     <input
              type="text"
              name="phone"
              value={data.phone}
              onChange={handling_Data}
              placeholder="phone"
              className="w-full h-10 border rounded-2xl text-[15px] px-1"
            />
            <input
              type="text"
              name="lastename"
              value={data.lastename}
              onChange={handling_Data}
              placeholder="last name"
              className="w-full h-10 border rounded-2xl text-[15px] px-1"
            />
            <input
              type="text"
              name="email"
              value={data.email}
              onChange={handling_Data}
              placeholder="email"
              className="w-full h-10 border rounded-2xl text-[15px] px-1"
            />
            <input
              type="text"
              name="password"
              value={data.password}
              onChange={handling_Data}
              placeholder="password"
              className="w-full h-10 border rounded-2xl text-[15px] px-1"
            />
            <button
              type="submit"
              onClick={Submit_Data}
              className="w-75 h-10 text-[15px] bg-[#397ABF] hover:bg-[#5f9fe3] text-white rounded-2xl transform-fill transition-all cursor-pointer"
            >
              Register
            </button>
          </div>
          <div
            className="sm:w-52 w-25 sm:h-52 h-25 border-2 border-dashed border-green-400 rounded-2xl
           flex items-center justify-center cursor-pointer bg-green-50 hover:bg-gray-100 transition 
           relative overflow-hidden"
          >
            <input type="file" id="fileUpload" className="hidden" />

            <label
              htmlFor="fileUpload"
              className="flex flex-col items-center justify-center cursor-pointer"
            >
              <span className="text-4xl">+</span>
              <p className="text-sm text-gray-500">Upload Profile</p>
            </label>
          </div>
        </div>

        <div
          className="sm:w-100 w-60 sm:mt-0 mt-3 sm:h-12 h:10 rounded-full
         bg-[#eeee] shadow-lg border-white border 
        transition-all cursor-pointer flex items-center justify-center gap-5"
        >
          <img
            src="https://img.icons8.com/color/48/google-logo.png"
            alt=""
            className="sm:w-10 w-8"
          />
          <p>Sign in with Google</p>
        </div>
      </div>
    </div>
  );
}

export default Register;
