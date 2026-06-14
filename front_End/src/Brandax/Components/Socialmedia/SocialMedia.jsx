import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FiYoutube } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import Schedule from "../Appoiment/Schedule";
import Footer from "../../Footers/Footer";
import Book from "../../../Admin/Home/booking/Book";
import { Link } from "react-router-dom";

function SocialMedia() {
  // bg-[#F0F0F3]
  const Marketing_data = [
    {
      title: "Facebook Marketing",
      description:
        "Explore the arena of the most popular social media platform, Facebook, to garner optimumpublicity and reach in quick time. We facilitate productive Facebook marketing strategies.",
      image: <FaFacebook />,
    },
    {
      title: "Instagram Marketing",
      description:
        "By making effective use of both Instagram and Instagram Reels, your brand can connect with potential clients. We have a team of specialists to help you with Instagram Marketing.",
      image: <BsInstagram />,
    },
    {
      title: "YouTube Marketing",
      description:
        "YouTube Influencers, ads, and optimized video contents can turn a game changer for your brand. Board the flight to successwith our specialist team formulating the best plan for you.",
      image: <FiYoutube />,
    },
    {
      title: "LinkedIn Marketing",
      description:
        "LinkedIn, the professional networking platform has more to offer than you imagine.We can aid you to getprofessionally constructed posts to reach out and grab a great conversion rate.",
      image: <CiLinkedin />,
    },
  ];
  return (
    <div className="w-full h-auto bg-[#F0F0F3] text-black font-Nunito sm:pt-30 pt-10 flex flex-col justify-center gap-5">
      <div className="w-full h-auto flex sm:flex-row flex-col items-center justify-evenly sm:gap-0 gap-10 p-6">
        <ul className="flex flex-col gap-3">
          <li className="sm:text-5xl text-3xl  sm:leading-15 font-medium">
            Social Media <br /> Marketing{" "}
            <span className="font-bold text-[#397ABF]">Company</span>
          </li>
          <li className="text-[18px] font-medium">In Kerala</li>
          <li className="sm:text-[15px] text-[12px] flex items-center gap-2 ">
            <a href="/" className="flex items-center gap-2">
              {" "}
              <span className="px-2 bg-white shadow border border-white hover:font-bold rounded-2xl">
                Home
              </span>{" "}
              <IoIosArrowForward />{" "}
              <span className="text-[#397ABF] font-bold">
                Social Media Marketing
              </span>{" "}
            </a>
          </li>
        </ul>
        <img
          src="https://media.istockphoto.com/id/1254063741/photo/serious-indian-mentor-worker-talk-to-female-colleague-teach-intern.jpg?s=612x612&w=0&k=20&c=PHurXy4vwLoHwuBTm50dAxm4T2yzL55mriSncmYKEj0="
          alt=""
          className="sm:h-[400px] object-cover rounded-[15px] border border-white shadow"
        />
      </div>
      <div className="w-full h-auto flex items-center sm:flex-row sm:p-0 p-6 flex-col justify-evenly list-none gap-6">
        <li className="max-w-[800px] sm:text-[18px] text-[15px]">
          Social media is a genie that can be tamed for our marketing success.
          Brandax is the leading social media marketing agency in Malappuram,
          Kerala which uses innovative & creative strategies to generate leads
          and build brands for our clients. Our 18+ years of proven expertise
          can your business achieve your business goals in no time.
        </li>
              <Link to={"/Booking"}>
          <button className="px-6 py-3 bg-[#397ABF] text-white rounded-full text-[15px] hover:bg-[#2a5a8c] shadow-lg cursor-pointer border">
            Schedule Appointment Today
          </button>
        </Link>
      </div>
      {/* ......................................................next page........................................................ */}

      <div className="w-full h-auto flex flex-col items-center py-10 gap-10 sm:mt-20 ">
        <h1 className="text-3xl font-bold">Social Media Marketing</h1>
        <p className="sm:max-w-[500px] max-w-[300px] sm:text-[18px] text-[15px] text-center">
          Entice the world with share worthy social media creative and visual
          contents and dominate with an aura of panache.
        </p>
        <div className="grid sm:grid-cols-3 gap-12 items-center justify-center mt-10 sm:p-0 p-6">
          {Marketing_data.map((item, index) => (
            <div
              key={index}
              className="sm:w-50 w-full h-65  bg-white rounded-[10px] border border-white shadow p-4 flex flex-col gap-2 text-justify"
            >
              <div className="text-3xl mb-2">{item.image}</div>
              <h2 className="text-[16px] text-[#397ABF] font-bold mb-2">
                {item.title}
              </h2>
              <p className="sm:text-[10px] text-[14px]">{item.description}</p>
              <button className="px-4 py-2 bg-[#397ABF] text-white rounded-full hover:bg-[#2a5a8c] shadow-lg cursor-pointer border">
                Enquire
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* ........................................................next page........................................................ */}

      <div className="w-full h-auto flex flex-col items-center font-serif py-10 gap-10 sm:px-0 px-5 text-center sm:text-start">
        <h1 className="sm:text-3xl text-2xl font-medium">
          PROCESS BEHIND SOCIAL MEDIA MARKETING IN{" "}
          <span className="text-[#397ABF] font-extrabold">KERALA</span>
        </h1>
        <p className="sm:max-w-[730px] max-w-[350px] sm:text-[16px] text-justify text-[14px] text-center font-Arimo">
          The process we follow for reaping the best benefits from social media
          marketing will involve Customer Analysis, Brainstorming,
          Implementation, and Promotion. behind one of the first social media
          marketing agencies in Kerala, we understand the pulse of the market
          and know how to take advantage of all social media opportunities
          through effective and creative social media strategies.
        </p>
        <div className="grid sm:grid-cols-2 gap-5 items-center justify-center mt-10 font-Arimo text-[12px]">
          <div className="sm:w-110 w-90 h-30 bg-white px-3 flex items-center gap-5">
            <div className="w-20 h-20 bg-[#397ABF] text-white font-bold text-4xl flex items-center justify-center font-Nunito">
              <p>1</p>
            </div>
            <ul className="flex flex-col gap-2">
              <li className="font-bold text-[15px]">Customer Analysis</li>
              <li className="max-w-[300px] ">
                Ascertaining the customer psyche and perceptions to devise
                contents according to the users, who can turn into potential
                clients.
              </li>
            </ul>
          </div>
          <div className="sm:w-110 w-90 h-30 bg-white px-3 flex items-center gap-5">
            <div className="w-20 h-20 bg-[#F0F0F3] text-[#397ABF] font-bold text-4xl flex items-center justify-center font-Nunito">
              <p>2</p>
            </div>
            <ul className="flex flex-col gap-2">
              <li className="font-bold text-[15px]">Brainstorming</li>
              <li className="max-w-[300px] ">
                Based on the analytical data, our professionals including
                digital marketers and skilled creators will derive catchy
                concepts and ideas.
              </li>
            </ul>
          </div>
          <div className="sm:w-110 w-90 h-30 bg-white px-3 flex items-center gap-5">
            <div className="w-20 h-20 bg-[#F0F0F3] text-[#397ABF] font-bold text-4xl flex items-center justify-center font-Nunito">
              <p>3</p>
            </div>
            <ul className="flex flex-col gap-2">
              <li className="font-bold text-[15px]">Design</li>
              <li className="max-w-[300px] ">
                The digital artists along with the graphic experts will design
                content developed by the ideators to enhance your growth through
                effective social media marketing in Kerala.
              </li>
            </ul>
          </div>
          <div className="sm:w-110 w-90 h-30 bg-white px-3 flex items-center gap-5">
            <div className="w-20 h-20 bg-[#397ABF] text-white font-bold text-4xl flex items-center justify-center font-Nunito">
              <p>4</p>
            </div>
            <ul className="flex flex-col gap-2">
              <li className="font-bold text-[15px]">Promotion</li>
              <li className="max-w-[300px] ">
                Promotion through all the available social media platforms will
                boost your identity and publicity, thus aiding brand growth in
                Kerala.
              </li>
            </ul>
          </div>
        </div>
        
      </div>
      {/* ................................................................page end................................................................*/}

     <Schedule />
      <Footer/>
    </div>
  );
}

export default SocialMedia;
