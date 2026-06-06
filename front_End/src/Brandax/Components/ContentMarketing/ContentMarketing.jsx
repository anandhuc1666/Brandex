import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaBlog } from "react-icons/fa";
import { TiVideo } from "react-icons/ti";
import { SiFirefoxbrowser } from "react-icons/si";
import { FaMicrophoneLines } from "react-icons/fa6";
import Schedule from "../Appoiment/Schedule";
import Footer from "../../Footers/Footer";
function ContentMarketing() {
  const Marketing_data = [
    {
      title: "Blog Content",
      description:
        "Connect with your audience through blogs related to your business or services. Share valuable insights, helpful information, and  practical tips to build trust and strengthen your brand credibility.",
      image: <FaBlog />,
    },
    {
      title: "Video Content",
      description:
        "Our creative team of concept developers and video creators produces engaging videos. we create videos that resonate with your audience and effectively promote your brand.",
      image: <TiVideo />,
    },
    {
      title: "Social Media Content",
      description:
        "Our digital marketers and content creators work together to craft engaging, high quality content that resonates with your audience and encourages sharing across social media platforms.",
      image: <SiFirefoxbrowser />,
    },
    {
      title: "Podcasts",
      description:
        "Engaging podcasts can leave a lasting impression of your brand in the minds of listeners. Promote your brand and connect with your audience.",
      image: <FaMicrophoneLines />,
    },
  ];
  return (
    <div className="w-full h-auto bg-[#F0F0F3] text-black font-Nunito sm:pt-30 pt-10 flex flex-col justify-center gap-5">
      <div className="w-full h-auto flex sm:flex-row flex-col items-center justify-evenly sm:gap-0 gap-10 p-6">
        <ul className="flex flex-col gap-3">
          <li className="sm:text-5xl text-3xl  sm:leading-15 font-medium">
            Content Marketing <br />
            <span className="font-bold text-[#397ABF]">Agency</span>
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
                Content Marketing
              </span>{" "}
            </a>
          </li>
        </ul>
        <img
          src="https://media.istockphoto.com/id/2170331670/photo/young-indian-woman-explaining-about-company-growth-to-other-employees-on-tv-screen-with-data.jpg?s=612x612&w=0&k=20&c=lfvudOooA6C1HHwor8BBSgnEZUec6VCCa2I9aFXLu_w="
          alt=""
          className="sm:h-[400px] object-cover rounded-[15px] border border-white shadow"
        />
      </div>
      <div className="w-full h-auto flex items-center sm:flex-row sm:p-0 p-6 flex-col justify-evenly list-none gap-6">
        <li className="max-w-[720px] sm:text-[18px] text-[15px]">
          Content marketing is a core part of digital marketing. We provide a
          dedicated content marketing team for every client to create engaging
          and impactful content that strengthens their brand presence.
        </li>
        <li className="px-6 py-3 bg-[#397ABF] text-white rounded-full text-[15px] hover:bg-[#2a5a8c] shadow-lg cursor-pointer border">
          Schedule Appointment Today
        </li>
      </div>
      {/* ......................................................next page........................................................ */}

      <div className="w-full h-auto flex flex-col items-center py-10 gap-10 sm:mt-20 ">
        <h1 className="text-3xl font-bold">Content Marketing</h1>
        <p className="sm:max-w-[500px] max-w-[300px] sm:text-[18px] text-[15px] text-center">
          Carefully curated content designed to promote your brand and
          effectively showcase it to potential customers.
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
          PROCESS<span className="text-[#397ABF] font-extrabold">BEHIND</span>
        </h1>
        <p className="sm:max-w-[730px] max-w-[350px] sm:text-[16px] text-justify text-[14px] text-center font-Arimo">
          Our content marketing strategy follows a well-structured process
          designed to deliver the best results through impactful visual and
          written content. This includes careful topic selection, strategic
          keywordplacement, and effective search engine optimization to maximiz
          e reach and engagement.
        </p>
        <div className="grid sm:grid-cols-2 gap-5 items-center justify-center mt-10 font-Arimo text-[12px]">
          <div className="sm:w-120 w-90 h-35 sm:text-start text-justify border-white bg-white rounded-[5px] shadow px-3 flex items-center gap-5">
            <div className="w-20 h-20 bg-[#397ABF] text-white font-bold text-4xl flex items-center justify-center font-Nunito">
              <p>1</p>
            </div>
            <ul className="flex flex-col gap-2">
              <li className="font-bold text-[15px]">Brand Evaluation</li>
              <li className="max-w-[340px] ">
                Once the client approves the strategy, our team collaborates and
                brainstorms creative ideas to develop the most effective
                approach. Every piece of content is shared with the client for
                review and approval before publishing.
              </li>
            </ul>
          </div>
          <div className="sm:w-120 w-90 h-35 sm:text-start text-justify border-white bg-white rounded-[5px] shadow px-3 flex items-center gap-5">
            <div className="w-20 h-20 bg-[#F0F0F3] text-[#397ABF] font-bold text-4xl flex items-center justify-center font-Nunito">
              <p>2</p>
            </div>
            <ul className="flex flex-col gap-2">
              <li className="font-bold text-[15px]">In house Discussion</li>
              <li className="max-w-[340px] ">
                Content will be scheduled and published at strategically planned
                times to reach the maximum audience effectively. Important occasions to
                enhance your brand visibility and generate positive publicity.
              </li>
            </ul>
          </div>
          <div className="sm:w-120 w-90 h-35 sm:text-start text-justify border-white bg-white rounded-[5px] shadow px-3 flex items-center gap-5">
            <div className="w-20 h-20 bg-[#F0F0F3] text-[#397ABF] font-bold text-4xl flex items-center justify-center font-Nunito">
              <p>3</p>
            </div>
            <ul className="flex flex-col gap-2">
              <li className="font-bold text-[15px]">Scheduled Posting</li>
              <li className="max-w-[340px] ">
                Every piece of content will be optimized with trending and
                relevant hashtags to maximize reach and connect. We ensure every possible strategy is used
                to strengthen your brand visibility and boost publicity.
              </li>
            </ul>
          </div>
          <div className="sm:w-120 w-90 h-35 sm:text-start text-justify border border-white bg-white rounded-[5px] shadow px-3 flex items-center gap-5">
            <div className="w-20 h-20 bg-[#397ABF] text-white font-bold text-4xl flex items-center justify-center font-Nunito">
              <p>4</p>
            </div>
            <ul className="flex flex-col gap-2">
              <li className="font-bold text-[15px]">
                Hashtagging and Keywords
              </li>
              <li className="max-w-[340px] ">
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
      <Footer />
    </div>
  );
}

export default ContentMarketing;
