import React from "react";
import Navigation from "../../Navigate/Navigation";
import { FaInstagram } from "react-icons/fa6";
import { RiWhatsappLine } from "react-icons/ri";
import { TbBrandLinkedin } from "react-icons/tb";
import boy_sitting_laptop from "../../Photo/men_sitting_with_laptop.png";
import arrow_mark from "../../Photo/arrow_mark.png";
import blue_cercle from "../../Photo/blue_cercle.png";
import phone_web_page from "../../Photo/Phone_web_page.png";
import pic1 from "../../clients/Png (2).png";
import pic2 from "../../clients/Png (3).png";
import pic3 from "../../clients/Png (4).png";
import pic4 from "../../clients/Png (5).png";
import anandhu from "../../clients/anandhu.png";
import { TiStarFullOutline } from "react-icons/ti";
import Schedule from "../Appoiment/Schedule";
import Footer from "../../Footers/Footer";

function Home() {
  return (
    <div className="w-auto h-auto bg-[#F0F0F3] text-black flex flex-col ">
      <div className="flex">
        <div className="w-200 h-screen flex flex-col items-start justify-end pl-25 py-10 gap-10">
          <h1 className="text-6xl font-normal">
            Your Brand Deserves Better{" "}
            <span className="font-medium text-[#397ABF]">Marketing</span>
          </h1>
          <h6 className="max-w-170 text-[15px]">
            Your brand deserves better marketing, and Brandax delivers creative
            digital solutions that help businesses grow faster and stand
            stronger online. From branding and web development to digital
            marketing strategies, we create impact full experiences that connect
            your business with the right audience and drive real results.
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
          <p className="absolute right-30 text-[15px] font-light">Your Success Is Our Priority </p>
          <div className="relative w-[700px] h-[700px] flex items-start flex-col justify-center">
            {/* OUTER CIRCLE */}
            <div className="absolute w-[550px] h-[550px] border border-black rounded-full animate-spinSlow">
              {/* animate-spinSlow */}
              {/* META */}
              <div className="absolute top-[-35px] left-1/2 -translate-x-1/2 animate-iconPulse">
                <img
                  src="https://img.icons8.com/3d-fluency/1500/meta.png"
                  alt=""
                  className="w-20 rotate-45"
                />
              </div>

              {/* INSTAGRAM */}
              <div className="absolute top-[120px] right-[-20px] animate-iconPulse">
                <img
                  src="https://img.icons8.com/3d-fluency/1500/instagram-logo.png"
                  alt=""
                  className="w-15"
                />
              </div>
              <div className="absolute top-13 left-10 z-20">
                <img
                  src="https://img.icons8.com/fluency/240/youtube-play.png"
                  alt=""
                  className="w-15 rotate-10"
                />
              </div>

              {/* FACEBOOK */}
              <div className="absolute bottom-[10px] right-[100px] animate-iconPulse z-20">
                <img
                  src="https://img.icons8.com/3d-fluency/1500/facebook-logo.png"
                  alt=""
                  className="w-16"
                />
              </div>
            </div>

            {/* INNER CIRCLE */}
            <div className="absolute w-[480px] h-[480px] border border-black rounded-full animate-spinReverse">
              {/* animate-spinReverse */}
              <div className="absolute top-[180px] -left-6 animate-iconPulse">
                <img
                  src="https://img.icons8.com/3d-fluency/1500/whatsapp-logo.png"
                  alt=""
                  className="w-16"
                />
              </div>
              <div className="absolute -bottom-6 right-50 animate-iconPulse">
                <img
                  src="https://img.icons8.com/fluency/240/linkedin.png"
                  alt=""
                  className="w-12"
                />
              </div>
            </div>

            {/* CENTER IMAGE */}
            <img
              src={boy_sitting_laptop}
              alt=""
              className="w-[500px] h-[420px] object-contain relative z-10"
            />
          </div>
        </div>
      </div>
      <br />
      {/* ........................................................next list..........................................*/}

      <div className="w-full h-auto bg-gradient-to-b from-[#397ABF]/60 via-[#A6A6A6]/40 to-[#F0F0F3] relative z-10">
        <div className="w-full h-auto flex">
          {/* ......................................................first image set.................................................. */}
          <div className="w-130 h-120 flex justify-end flex-col items-center gap-5 relative">
            <p className="bg-white px-5 py-2 rounded-full shadow">Planning</p>
            <div className="bg-white rounded-2xl w-70 h-80 shadow z-10 overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
              <img
                src="https://media.istockphoto.com/id/694600920/video/caucasian-woman-discussing-a-financial-graph-on-the-screen-in-meeting-room-with-her-african.jpg?s=640x640&k=20&c=mnphfALaNjEfgAxeNHAfKhJhDnklheRSrcfUkinxy6k="
                alt=""
                className="w-70 rounded-2xl"
              />
              <div className="p-3 text-justify text-[15px] font-bold">
                <p>
                  A businesswoman is presenting data on a large digital screen,
                  pointing at a rising graph during a meeting. Another colleague
                  stands behind her, observing the chart in a modern office
                  environment.
                </p>
              </div>
            </div>
            <img
              src={arrow_mark}
              alt=""
              className="absolute h-50 -right-55 bottom-12 opacity-60"
            />
          </div>
          <div className="w-130 h-90 flex items-center justify-center flex-col gap-5 relative">
            <div className="bg-white h-60 rounded-[10px] z-10 shadow overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
              <img
                src="https://media.istockphoto.com/id/1200289077/video/confident-indian-businesswoman-coach-speaking-during-corporate-team-meeting.jpg?s=640x640&k=20&c=cJ-QlicyMw4IoXkYFjOaRw8QHw9OsfR0LR8_2rVRl_g="
                alt=""
                className="h-30 rounded-[10px]"
              />
              <div className="p-2 max-w-52 text-justify text-[12px] font-bold">
                A confident team member from our side is presenting ideas during
                a professional meeting discussion. The team is actively
                listening and collaborating in a modern office environment.
              </div>
            </div>
            <p className="bg-white px-5 py-2 rounded-full shadow">Grouping</p>
            <img
              src={arrow_mark}
              alt=""
              className="absolute h-50 -right-32 bottom-0 rotate-70 opacity-60"
            />
          </div>
          <div className="w-130 h-150 flex flex-col items-center justify-end gap-5">
            <p className="bg-white px-5 py-2 rounded-full shadow">Creating</p>
            <div className="bg-white w-100 h-auto rounded-2xl shadow overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
              <img
                src="https://media.istockphoto.com/id/1210948126/photo/woman-working-as-business-development-showing-talking-about-information-graphs-in-computer.jpg?s=612x612&w=0&k=20&c=XZeZzlqNHoom90AhOzutvcc3IjPwqA5rmu5Ro_yl-lY="
                alt=""
                className="w-100 rounded-2xl"
              />
              <div className="p-4 font-bold text-justify">
                Create and design innovative business strategies with smart
                digital solutions and data-driven insights.Our team focuses on
                creativity, planning, and modern technology to deliver
                professional results.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-100 relative flex items-center justify-center flex-col gap-10">
        <h1 className="font-bold text-4xl">Choose with us</h1>
        <h6 className="text-[13px]">
          innovative solutions, creative designs, and professional service you
          can trust.
          <br /> We are committed to delivering quality, reliability, and
          success for every project.
        </h6>
        <ul className="flex gap-10">
          <li className="bg-white px-10 py-3 rounded-full border font-bold shadow-blue-500  shadow-sm">
            Contact
          </li>
          <li className="bg-white px-10 py-3 rounded-full border font-bold shadow-green-500 shadow-sm">
            Email
          </li>
          <li className="bg-white px-10 py-3 rounded-full border font-bold shadow-pink-500 shadow-sm">
            Explore
          </li>
        </ul>
        <img
          src={blue_cercle}
          alt=""
          className="absolute rotate-110 animate-spinSlow w-200"
        />
      </div>
      {/* ............................................................next phone template............................ */}

      <div className="w-full h-screen flex items-center justify-evenly">
        <div className="w-150 flex flex-col gap-10">
          <li className="list-none font-bold text-4xl">
            Our Value Proposition
          </li>
          <li className="list-none text-[15px]">
            We are committed to delivering the highest quality service, built on
            trust, dedication, and results. When you choose to work with us, you
            gain a team that stands by your business every day focused on
            helping you grow, succeed, and lead in your industry.
          </li>
          <li className="list-none text-[12px] font-bold">
            “A truly valuable experience working with the team their <br />
            professionalism and quality delivery exceeded our expectations”
          </li>
        </div>
        <img src={phone_web_page} alt="" className="w-80 h-150" />
      </div>
      {/* ...............................................................final client section........................ */}

      <div className="w-full h-screen flex flex-col gap-20 items-center justify-center">
        <div className="font-bold text-3xl text-center">
          <h1>
            Discover the perfect solution tailored to <br />
            your business needs.
          </h1>
        </div>
        <div className="w-300 bg-white shadow h-35 flex rounded-full overflow-hidden py-5">
          <div className="flex items-center gap-20 animate-scroll whitespace-nowrap">
            {/* First Set */}
            <img src={pic1} alt="" className="h-18" />
            <img src={pic2} alt="" className="h-18" />
            <img src={pic3} alt="" className="h-18 bg-black" />
            <img src={pic4} alt="" className="h-18 bg-green-900" />

            {/* Duplicate Set for Infinite Loop */}
            <img src={pic1} alt="" className="h-18" />
            <img src={pic2} alt="" className="h-18" />
            <img src={pic3} alt="" className="h-18" />
            <img src={pic4} alt="" className="h-18 " />
          </div>
        </div>
        <div className="w-full pl-40">
          <div className="w-200 flex flex-col gap-10">
            <h5 className="text-2xl font-bold">Our Team</h5>
            <p>
              Teamwork and hard work are the foundation of success in digital
              marketing. In a fast changing digital world, no single person can
              handle all aspects of marketing effectively. It requires a team of
              skilled individuals such as content creators, SEO specialists,
              designers, developers, and analysts working together toward a
              common goal.
            </p>
            <p>
              Hard work is equally important in digital marketing. Success does
              not come overnight. It takes continuous effort, testing, and
              learning. Marketers must regularly analyze data, track
              performance, and improve strategies. Running ads, managing social
              media, and creating quality content require dedication and
              consistency. Even small improvements can lead to significant
              results over time.
            </p>
          </div>
        </div>
      </div>
      {/* ...............................................................final team section.......................... */}

      <div className="w-full h-100 bg-gradient-to-b from-[#F0F0F3] via-[#A6A6A6]/40 to-[#397ABF]/60 flex items-center justify-center">
        <div className="flex justify-evenly w-400">
          <div className="w-50 h-70 bg-gradient-to-b from-[#397ABF]/60 via-[#A6A6A6]/40 to-[#F0F0F3] relative flex flex-col
           justify-end shadow-sm rounded-2xl border border-white">
            <img src={anandhu} alt="" className="w-50 h-70 rounded-2xl" />
            <div className="w-full h-30 bg-white/50 border-t border-white absolute flex flex-col justify-between p-1 rounded-2xl">
              <p className="font-semibold">Software developer</p>
              <p className="text-[10px] max-w-40 h-10 leading-3 text-justify">
                Building modern, scalable, and user friendly software solutions
                with custom development
              </p>
              <div className="w-full h-10 flex justify-between px-2 items-center">
                <div className="flex gap-0.5">
                  <TiStarFullOutline className="text-[#FDD835] shadow rounded-full bg-[#397ABF]/30" />
                  <TiStarFullOutline className="text-[#FDD835] shadow rounded-full bg-[#397ABF]/30" />
                  <TiStarFullOutline className="text-[#FDD835] shadow rounded-full bg-[#397ABF]/30" />
                  <TiStarFullOutline className="text-[#FDD835] shadow rounded-full bg-[#397ABF]/30" />
                </div>
                <div className="flex gap-5 text-2xl">
                  <a href="https://www.instagram.com/a_nandhu_c/">
                    <FaInstagram />
                  </a>
                  <a href="https://www.linkedin.com/in/anandhu-chulliveetill/">
                    <TbBrandLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-50 h-70 bg-gradient-to-b from-[#397ABF]/60 via-[#A6A6A6]/40 to-[#F0F0F3] relative flex flex-col justify-end shadow-sm rounded-2xl">
            <img src="" alt="" className="w-50 h-70 rounded-2xl" />
            <div className="w-full h-30 bg-white/50 absolute flex flex-col justify-between p-1 rounded-2xl">
              <p className="font-semibold">Software developer</p>
              <p className="text-[10px] max-w-40 text-justify">
                handling seo friendly marketing, creating all custom work and
                video creation
              </p>
              <div className="w-full h-10 flex justify-between px-2 items-center">
                <div className="flex gap-0.5">
                  <TiStarFullOutline className="text-[#FDD835] shadow rounded-full bg-[#397ABF]/30" />
                  <TiStarFullOutline className="text-[#FDD835] shadow rounded-full bg-[#397ABF]/30" />
                  <TiStarFullOutline className="text-[#FDD835] shadow rounded-full bg-[#397ABF]/30" />
                  <TiStarFullOutline className="text-[#FDD835] shadow rounded-full bg-[#397ABF]/30" />
                </div>
                <div className="flex gap-5 text-2xl">
                  <FaInstagram />
                  <TbBrandLinkedin />
                </div>
              </div>
            </div>
          </div>
          <div className="w-50 h-70 bg-gradient-to-b from-[#397ABF]/60 via-[#A6A6A6]/40 to-[#F0F0F3] relative flex flex-col justify-end shadow-sm rounded-2xl">
            <img src="" alt="" className="w-50 h-70 rounded-2xl" />
            <div className="w-full h-30 bg-white/50 absolute flex flex-col justify-between p-1 rounded-2xl">
              <p className="font-semibold">Software developer</p>
              <p className="text-[10px] max-w-40 text-justify">
                handling seo friendly marketing, creating all custom work and
                video creation
              </p>
              <div className="w-full h-10 flex justify-between px-2 items-center">
                <div className="flex gap-0.5">
                  <TiStarFullOutline className="text-[#FDD835] shadow rounded-full bg-[#397ABF]/30" />
                  <TiStarFullOutline className="text-[#FDD835] shadow rounded-full bg-[#397ABF]/30" />
                  <TiStarFullOutline className="text-[#FDD835] shadow rounded-full bg-[#397ABF]/30" />
                  <TiStarFullOutline className="text-[#FDD835] shadow rounded-full bg-[#397ABF]/30" />
                </div>
                <div className="flex gap-5 text-2xl">
                  <FaInstagram />
                  <TbBrandLinkedin />
                </div>
              </div>
            </div>
          </div>
          <div className="w-50 h-70 bg-gradient-to-b from-[#397ABF]/60 via-[#A6A6A6]/40 to-[#F0F0F3] relative flex flex-col justify-end shadow-sm rounded-2xl">
            <img src="" alt="" className="w-50 h-70 rounded-2xl" />
            <div className="w-full h-30 bg-white/50 absolute flex flex-col justify-between p-1 rounded-2xl">
              <p className="font-semibold">Software developer</p>
              <p className="text-[10px] max-w-40 text-justify">
                handling seo friendly marketing, creating all custom work and
                video creation
              </p>
              <div className="w-full h-10 flex justify-between px-2 items-center">
                <div className="flex gap-0.5">
                  <TiStarFullOutline className="text-[#FDD835] shadow rounded-full bg-[#397ABF]/30" />
                  <TiStarFullOutline className="text-[#FDD835] shadow rounded-full bg-[#397ABF]/30" />
                  <TiStarFullOutline className="text-[#FDD835] shadow rounded-full bg-[#397ABF]/30" />
                  <TiStarFullOutline className="text-[#FDD835] shadow rounded-full bg-[#397ABF]/30" />
                </div>
                <div className="flex gap-5 text-2xl">
                  <FaInstagram />
                  <TbBrandLinkedin />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Schedule />
      <Footer/>
    </div>
  );
}

export default Home;
