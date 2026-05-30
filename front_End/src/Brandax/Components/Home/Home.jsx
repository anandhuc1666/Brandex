import React from "react";
import Navigation from "../../Navigate/Navigation";
import { FaInstagram } from "react-icons/fa6";
import { RiWhatsappLine } from "react-icons/ri";
import { TbBrandLinkedin } from "react-icons/tb";
import boy_sitting_laptop from "../../Photo/men_sitting_with_laptop.png";

function Home() {
  return (
    <div className="w-auto h-screen bg-[#F0F0F3] text-black flex flex-col ">
      <div className="flex">
              <div className="w-200 h-screen flex flex-col items-start justify-end pl-25 py-10 gap-10">
        <h1 className="text-6xl font-normal">
          Your Brand Deserves Better{" "}
          <span className="font-medium text-[#397ABF]">Marketing</span>
        </h1>
        <h6 className="max-w-170 text-[15px]">
          Your brand deserves better marketing, and Brandax delivers creative
          digital solutions that help businesses grow faster and stand stronger
          online. From branding and web development to digital marketing
          strategies, we create impact full experiences that connect your
          business with the right audience and drive real results.
        </h6>
        <div className="flex gap-10 text-4xl">
          <FaInstagram />
          <RiWhatsappLine />
          <TbBrandLinkedin />
        </div>
        <div className="flex gap-10">
          <div className="w-30 h-10 border rounded-full flex justify-between items-center p-1">
            <p>Google</p>
            <img
              src="https://img.icons8.com/fluency/240/google-logo.png"
              alt=""
              className="w-8"
            />
          </div>
          <div className="w-30 h-10 border rounded-full flex justify-between items-center p-1">
            <p>Meta AI</p>
            <img
              src="https://img.icons8.com/ultraviolet/480/approval.png"
              alt=""
              className="w-8"
            />
          </div>
          <div className="w-30 h-10 border rounded-full flex justify-between items-center p-1">
            <p>Premium</p>
            <img
              src="https://img.icons8.com/emoji/480/gem-stone.png"
              alt=""
              className="w-8"
            />
          </div>
        </div>
        <p>Next-level digital innovation from the origin</p>
      </div>
      <div className="w-200 h-screen relative flex flex-col items-center justify-end gap-10 ">
        <p className="">Your Success Is Our Priority </p>
        <div className="w-150 h-150 border rounded-full flex items-center relative">
          <img
            src="https://img.icons8.com/3d-fluency/1500/meta.png"
            alt=""
            className="w-20 -top-8 rotate-45 left-50 absolute"
          />
          <img
            src="https://img.icons8.com/3d-fluency/1500/instagram-logo.png"
            alt=""
            className="w-20 top-30 right-0 absolute"
          />
          <img
            width="94"
            height="94"
            src="https://img.icons8.com/3d-fluency/1500/facebook-logo.png"
            alt="instagram-logo"
            className="absolute w-15 bottom-0 right-30"
          />
          <div className="w-120 h-120 border rounded-full relative flex ">
            <img
              width="94"
              height="94"
              src="https://img.icons8.com/3d-fluency/1500/whatsapp-logo.png"
              alt="instagram-logo"
              className="absolute w-15 left-10"
            />

            <img
              src={boy_sitting_laptop}
              alt=""
              className=" w-170 h-110 absolute left-0 bottom-0"
            />
          </div>
        </div>
      </div>
      </div>
      <br />
   {/* ........................................................next list.................................. */}
   <div className="w-full h-auto bg-gradient-to-b from-[#397ABF]/60 via-[#A6A6A6]/40 to-[#F0F0F3]/100">
    <div className="w-full h-100"></div>
   </div>
    </div>
  );
}

export default Home;
