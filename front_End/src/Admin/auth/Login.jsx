import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Login() {
const [data,setData] = useState([])
const [loading, setLoading] = useState(false);
const navigate = useNavigate();
const handling_Data = (e) => {
  e.preventDefault();
  setData({ ...data, [e.target.name]: e.target.value });
}
const Submit_Data = async (e) => {

  e.preventDefault();

  try {
    setLoading(true);
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/v1/user/login`,
      data
    );

  toast.success("Login successful!");
    localStorage.setItem(
      "token",
      response.data.token
    );


    navigate("/dashboard", { state: response.data.user });

  } catch (error) {


   toast.error(
        error.response?.data?.message || "Login failed"
      );

  }finally{
    setLoading(false);
  }
};

  return (
    <div className="w-full sm:h-screen h-auto flex items-center justify-center bg-[#eeee] font-Nunito py-10 text-black">
      <div className="sm:w-200 w-80 h-auto bg-white rounded-2xl shadow-sm flex items-center relative sm:p-0 box-border py-3">
        <div className="w-100 h-auto items-center flex-col flex sm:py-5 sm:gap-5 sm:px-3 box-border gap-3">
          <p className="font-Nunito text-3xl font-light">Login</p>
          <div className="flex flex-col gap-3">
            <label htmlFor="email" className="sm:text-[15px] text-[12px]">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={data.name}
              onChange={handling_Data}
              placeholder="e-mail: useremail@gmail.com "
              className="border-b sm:w-80 w-70 sm:h-12 h-10 px-1.5 rounded-2xl focus:ring-1 focus:ring-blue-400 
              outline-none transition-all border-[#0d0d0d]"
            />
            <label htmlFor="password" className="sm:text-[15px] text-[12px]">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={data.password}
              onChange={handling_Data}
              placeholder="user*****$***"
              className="border-b sm:w-80 w-70 sm:h-12 h-10 px-1.5 rounded-2xl focus:ring-1 focus:ring-blue-400 outline-none transition-all"
            />
            <button type="submit" onClick={Submit_Data} className={`${loading ? "bg-[#397ABF]" : "bg-blue-500"} text-white py-2 px-4 rounded-2xl hover:bg-[#397ABF] transition-all mt-3 cursor-pointer`}>
              {
                loading === true ? "Loading..." : "Login"
              }
            </button>
          </div>
          <div className="w-full flex items-center gap-2">
            <div className="sm:w-50 w-full h-[1px] bg-[#0d0d0d]"></div>
            <p>OR</p>
            <div className="sm:w-50 w-full h-[1px] bg-[#0d0d0d]"></div>
          </div>
          <p className="sm:text-[15px] text-[12px]">Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign up</a></p>
          <div className="flex flex-col items-center gap-2">
            <p className="sm:text-[15px] text-[12px] font-light">sign up with google</p>
            <button className="sm:w-80 w-70 h-10 justify-center shadow-2xl bg-[#eeee] border-white border hover:bg-[#e6e4e4ee] rounded-full items-center flex gap-5 cursor-pointer transition-all">
              <img
                src="https://img.icons8.com/color/48/google-logo.png"
                alt=""
                className="sm:w-6.25 w-6"
              />
              Google
            </button>
          </div>
        </div>
        <DotLottieReact
          src="https://lottie.host/f2e987a6-c9d0-4fd7-86aa-e23887bf86fc/w3NvaNVjJc.lottie"
          loop
          autoplay
          className="sm:w-150  sm:h-100 w-70 h-40  absolute sm:-right-20 -bottom-40 sm:bottom-0 drop-shadow-lg shadow-[#eeee]"
        />
      </div>
             <ToastContainer
        position="top-right"
        autoClose={2000}
      />
    </div>
  );
}

export default Login;
