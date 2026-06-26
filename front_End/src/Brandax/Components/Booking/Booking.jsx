import React, { useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import calunderMarking from "../../Photo/calunderMarking.png";
import { MdOutlineQuickreply } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { AiOutlineTeam } from "react-icons/ai";
import { RiCustomerService2Line } from "react-icons/ri";
import FAQ from "../FAQ/FAQ";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Booking() {
  const formRef = useRef(null);
  const [Time, setTime] = useState("");
  const [active, setActive] = useState(null);
  const [loading, setLoading] = useState(false);
  const dataShare = {
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    location: "",
    date: "",
    time: Time,
  };
  const [data, setdata] = useState(dataShare);
  const dates = [
    {
      id: 1,
      time: "9:00am",
    },
    {
      id: 2,
      time: "10:00am",
    },
    {
      id: 3,
      time: "11:00am",
    },
    {
      id: 4,
      time: "12:00pm",
    },
    {
      id: 5,
      time: "2:00pm",
    },
    {
      id: 6,
      time: "3:00pm",
    },
    {
      id: 7,
      time: "4:00pm",
    },
    {
      id: 8,
      time: "5:00pm",
    },
  ];
  const TimePass = (data) => {
    setTime(data);
  };
  const Handlepassdata = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const handleSchedule = async (e) => {
    e.preventDefault();

    if (!active) {
      alert("Please agree to the Terms and Conditions.");
      return;
    }

    try {
       setLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/user/email`,
        {
          name: data.name,
          email: data.email,
          company: data.company,
          phone: data.phone,
          message: data.message,
          location: data.location,
          date: data.date,
          time: Time,
        },
      );

        toast.success(
      response.data?.message || "Your request has been sent to Brandax."
    );
      setdata(dataShare);
      setTime("");
    } catch (error) {
      console.error(error);

    toast.error(
           error.response?.data?.message || "Something went wrong. Please try again."
         );
    }finally{
    setLoading(false);
  }
  };
  return (
    <div className="w-full h-auto bg-[#F0F0F3] text-black font-Arimo sm:pt-30 pt-10 flex flex-col justify-center gap-5 ">
      <div className="w-full h-auto flex sm:flex-row flex-col items-center justify-evenly sm:gap-0 gap-5 p-6">
        <ul className="flex flex-col gap-3">
          <li className="sm:text-5xl text-3xl  sm:leading-15 font-medium">
            Appointment <br />
            <span className="font-bold text-[#397ABF]">Booking</span>
          </li>
          <li className="text-[18px] font-medium">In Kerala</li>
          <li className="sm:text-[15px] text-[12px] flex items-center gap-2 ">
            <a href="/" className="flex items-center gap-2">
              {" "}
              <span className="px-2 bg-white shadow border border-white hover:font-bold rounded-2xl">
                Home
              </span>{" "}
              <IoIosArrowForward />{" "}
              <span className="text-[#397ABF] font-bold">Appointment</span>{" "}
            </a>
          </li>
        </ul>
        <img src={calunderMarking} alt="" className="sm:h-[350px]" />
      </div>
      <div className="w-full h-auto flex items-center sm:flex-row sm:p-0 p-6 flex-col justify-evenly list-none gap-10">
        <li className="max-w-[580px] sm:text-[18px] text-[15px]">
          Schedule your appointment with us in just a few clicks. Fill in your
          details, select your preferred time, and let us take care of the rest.
        </li>
        <button
          onClick={() =>
            formRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
          className="px-6 py-3 bg-[#397ABF] text-white rounded-full text-[15px] hover:bg-[#2a5a8c] shadow-lg cursor-pointer border"
        >
          Schedule Appointment Today
        </button>
      </div>
      {/* ................................................................next section page............................................... */}

      <div className="w-full h-auto py-10 px-3 flex sm:flex-row flex-col items-center justify-center gap-10">
        <div
          id="formdata"
          ref={formRef}
          className="sm:w-110 w-90 sm:h-170 h-auto bg-white shadow-lg rounded-[10px] p-3 sm:gap-0 gap-5 overflow-hidden box-border flex flex-col justify-between"
        >
          <p className="sm:text-[20px] text-[18px] font-extrabold">
            Client Appointment <span className="text-[#397ABF]">Form</span>
          </p>
          <div className="flex sm:flex-row flex-col gap-3">
            <div className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={data.name}
                className="border-b outline-none p-1 border-[#397ABF]"
                onChange={Handlepassdata}
              />
              <input
                type="number"
                placeholder="Number"
                name="phone"
                value={data.phone}
                className="border-b outline-none p-1 border-[#397ABF]"
                onChange={Handlepassdata}
              />
              <input
                type="text"
                placeholder="Location"
                name="location"
                value={data.location}
                className="border-b outline-none p-1 border-[#397ABF]"
                onChange={Handlepassdata}
              />
            </div>
            <div className="flex flex-col gap-5">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={data.email}
                className="border-b outline-none p-1 border-[#397ABF]"
                onChange={Handlepassdata}
              />
              <input
                type="text"
                placeholder="Company Name"
                name="company"
                value={data.company}
                className="border-b outline-none p-1 border-[#397ABF]"
                onChange={Handlepassdata}
              />
              <input
                type="date"
                placeholder="Appointment Date"
                name="date"
                value={data.date}
                className="border-b outline-none p-1 border-[#397ABF]"
                onChange={Handlepassdata}
              />
            </div>
          </div>
          <p className="text-[15px] font-light">Select Your Appointment Time</p>

          <div className="grid sm:grid-cols-4 grid-cols-4 gap-2 gap-y-6">
            {dates.map((data, k) => (
              <div
                key={k.id}
                className={`sm:w-20 sm:h-20  h-15 rounded-[5px] shadow-sm flex items-center justify-center
                transition-all duration-200 cursor-pointer
           ${
             Time === data.time
               ? "bg-[#397ABF] text-white"
               : "bg-[#F0F0F3] text-[#397ABF] hover:bg-[#397ABF]/60 hover:text-white"
           }`}
                onClick={() => TimePass(data.time)}
              >
                <p>{data.time}</p>
              </div>
            ))}
          </div>
          <textarea
            name="Message"
            rows={5}
            cols={43}
            placeholder="message"
            id=""
            onChange={Handlepassdata}
            name="message"
            value={data.message}
            className="bg-[#F0F0F3] shadow-sm border-none outline-none rounded-[5px] pl-2 pt-1"
          ></textarea>
          <div className="flex items-center justify-between">
            <span className="flex gap-2">
              <input type="checkbox" onClick={() => setActive(!active)} />
              <label htmlFor="" className="text-[10px]">
                Agree to Terms and Conditions
              </label>
            </span>
            <button
              type="submit"
              onClick={handleSchedule}
              className={`${loading===false?"bg-[#43C552]":"bg-[#a0c543]"} py-2 px-10 rounded-full text-white hover:bg-[#43C552]/80 ${loading===false?"active:bg-[#47af53]":"bg-[#c5a243]"}`}
            >
              {`${loading===false?"Schedule":"Sending..."}`}
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-10 text-center sm:w-auto w-full">
          <h1 className="sm:text-2xl text-[20px] font-Arimo font-semibold">
            Client Data Security & Privacy
          </h1>
          <p className="sm:max-w-150 max-w-100 text-justify">
            <ul className="flex flex-col sm:gap-5 gap-5 sm:text-[15px] text-[12px] p-3 text-justify">
              <li>
                {" "}
                At Brandax, we value the privacy and security of every client.
                All information shared with us is kept safe and protected using
                secure systems and confidential handling practices.{" "}
              </li>
              <li>
                We do not sell, share, or provide client information to any
                third party without permission. The data collected through our
                website is used only for communication, project discussions, and
                service-related purposes.
              </li>
              <li>
                {" "}
                Your personal and business details remain completely secure with
                our team. We are committed to maintaining trust, privacy, and
                professional data protection standards for every client.
              </li>
            </ul>
          </p>
          <div className="sm:w-150 sm:h-60 rounded-[10px] text-start bg-[#397ABF] border border-white p-3 text-white flex flex-col gap-5">
            <h1 className="text-[20px] font-bold">Why Choose Brandax?</h1>

            <ul className="text-[12px] font-Arimo font-light">
              <li>Fast Appointment Confirmation</li>
              <li>Secure Client Information</li>
              <li>Professional Digital Services</li>
              <li>Dedicated Support Team</li>
              <li>Customized Marketing Solutions</li>
            </ul>
            <p>
              We help startups and businesses improve their online presence
              through creative branding, web development, and digital marketing
              solutions.
            </p>
          </div>
        </div>
      </div>
      {/* ...............................................................next section page............................................... */}
      <div className="w-full h-auto justify-center flex sm:flex-row flex-col items-center sm:gap-20 gap-3">
        <div className="sm:w-70 sm:h-70 w-100 h-20 bg-[#397ABF] flex items-center justify-center rounded-[10px] sm:flex-wrap gap-10 p-3 shadow-sm">
          <div className="sm:w-25 sm:h-25 w-20 h-15 shadow rounded-[5px] flex items-center justify-center bg-white">
            <MdOutlineQuickreply className="text-2xl" />
          </div>
          <div className="sm:w-25 sm:h-25 w-20 h-15 shadow rounded-[5px] flex items-center justify-center bg-white">
            <RiSecurePaymentLine className="text-2xl" />
          </div>
          <div className="sm:w-25 sm:h-25 w-20 h-15 shadow rounded-[5px] flex items-center justify-center bg-white">
            <AiOutlineTeam className="text-2xl" />
          </div>
          <div className="sm:w-25 sm:h-25 w-20 h-15 shadow rounded-[5px] flex items-center justify-center bg-white">
            <RiCustomerService2Line className="text-2xl" />
          </div>
        </div>
        <div className="sm:w-180 sm:h-70 rounded-[10px] bg-white sm:p-5 p-3 gap-3 sm:text-[16px] text-[10px] flex flex-col justify-evenly">
          <h1>
            At Brandax, we focus on creativity, quality, and client
            satisfaction. From web development to digital marketing and
            branding, we help businesses build a stronger online presence with
            innovative solutions.
          </h1>
          <ul className="list-disc px-5">
            <li>Professional Communication</li>
            <li>Secure Client Data Handling</li>
            <li>Fast Appointment Confirmation</li>
            <li>Personalized Marketing Strategies</li>
            <li>Dedicated Project Support</li>
          </ul>
        </div>
      </div>
      <FAQ />
        <ToastContainer
        position="top-right"
        autoClose={2000}
      />
    </div>
  );
}

export default Booking;
