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
// import anandhu from "../../clients/anandhu.png";
import { TiStarFullOutline } from "react-icons/ti";
import Schedule from "../Appoiment/Schedule";
import Footer from "../../Footers/Footer";


function Home() {
  const teamMembers = [
  {
    image: "https://i.pinimg.com/1200x/0e/db/f3/0edbf38c0d27da9b9dd4cf8a95c850b7.jpg",
    role: "Software Developer",
    description:
      "Building modern, scalable and user-friendly software solutions with custom development.",
    instagram: "https://www.instagram.com/a_nandhu_c/",
    linkedin: "https://www.linkedin.com/in/anandhu-chulliveetill/",
  },
  {
    image: "https://i.pinimg.com/736x/8c/5e/9d/8c5e9dd58ecd175df019b09f6bac72b6.jpg",
    role: "Digital Marketing Specialist",
    description:
      "Managing SEO, social media marketing, and advertising campaigns.",
    instagram: "#",
    linkedin: "#",
  },
  {
    image: "https://i.pinimg.com/736x/0d/a5/e7/0da5e7b3a24ea9ef05db4eaa253e9cf3.jpg",
    role: "UI/UX Designer",
    description:
      "Creating beautiful and user-friendly interfaces for digital products.",
    instagram: "#",
    linkedin: "#",
  },
  
  {
    image: "https://i.pinimg.com/1200x/2c/e3/98/2ce398b6e5a2999258f2327bbbb72a73.jpg",
    role: "Video Editor",
    description:
      "Producing engaging videos and motion graphics for brands.",
    instagram: "#",
    linkedin: "#",
  },
];
  return (
    <div className="w-auto  bg-[#EFEFF1] text-black flex flex-col">
      <div className="flex sm:flex-row sm:gap-0 flex-col gap-10">
        <div className="sm:w-200 w-full sm:h-screen h-auto flex flex-col items-start justify-end sm:pl-25 sm:py-10 p-6 gap-10">
          <h1 className="sm:text-6xl text-4xl font-normal">
            Your Brand Deserves Better{" "}
            <span className="font-bold text-[#397ABF]">Marketing</span>
          </h1>
          <h6 className="sm:max-w-170 sm:text-[15px] text-[13px] text-justify">
            Your brand deserves better marketing, and Brandax delivers creative
            digital solutions that help businesses grow faster and stand
            stronger online. From branding and web development to digital
            marketing strategies, we create impact full experiences that connect
            your business with the right audience and drive real results.
          </h6>
          <div className="flex sm:gap-10 gap-5 sm:text-4xl text-2xl">
           <a href="https://www.instagram.com/brandax_studio/"><FaInstagram /></a>     
            <RiWhatsappLine />
            <TbBrandLinkedin />
          </div>
          <div className="flex sm:gap-10 gap-5 items-center">
            <div className="sm:w-30 w-20 sm:h-10 h-6  border rounded-full flex justify-between items-center p-1">
              <p className="sm:text-[15px] text-[10px]">Google</p>
              <img
                src="https://img.icons8.com/fluency/240/google-logo.png"
                alt=""
                className="sm:w-8 w-5"
              />
            </div>
            <div className="sm:w-30 w-20 sm:h-10 h-6  border rounded-full flex justify-between items-center p-1">
              <p className="sm:text-[15px] text-[10px]">Meta AI</p>
              <img
                src="https://img.icons8.com/ultraviolet/480/approval.png"
                alt=""
                className="sm:w-8 w-5"
              />
            </div>
            <div className="sm:w-30 w-20 sm:h-10 h-6 border rounded-full flex justify-between items-center p-1">
              <p className="sm:text-[15px] text-[10px]">Premium</p>
              <img
                src="https://img.icons8.com/emoji/480/gem-stone.png"
                alt=""
                className="sm:w-8 w-5"
              />
            </div>
          </div>
          <p className="sm:text-[15px] text-[13px]">Next-level digital innovation from the origin</p>
        </div>
        <div className="sm:w-200 w-full p-6 sm:p-0 sm:h-screen h-auto relative sm:flex  flex-col items-center justify-end gap-10 ">
          <p className="absolute right-30 text-[15px] font-light sm:flex hidden">Your Success Is Our Priority </p>
          <div className="relative sm:w-[700px] sm:h-[700px] flex items-start flex-col justify-center">
            {/* OUTER CIRCLE */}
            <div className="absolute sm:w-[550px] sm:h-[550px] w-[250px] h-[250px] sm:border border-black rounded-full animate-spinSlow">
              {/* animate-spinSlow */}
              {/* META */}
              <div className="absolute top-[-35px] left-1/2  -translate-x-1/2 animate-iconPulse sm:flex hidden">
                <img
                  src="https://img.icons8.com/3d-fluency/1500/meta.png"
                  alt=""
                  className="sm:w-20 w-15 rotate-45 "
                />
              </div>

              {/* INSTAGRAM */}
              <div className="absolute top-[120px] right-[-20px] animate-iconPulse sm:flex hidden">
                <img
                  src="https://img.icons8.com/3d-fluency/1500/instagram-logo.png"
                  alt=""
                  className="sm:w-15 w-10 "
                />
              </div>
              <div className="absolute top-13 left-10 z-20 animate-iconPulse sm:flex hidden">
                <img
                  src="https://img.icons8.com/fluency/240/youtube-play.png"
                  alt=""
                  className="sm:w-15 w-10 rotate-10"
                />
              </div>

              {/* FACEBOOK */}
              <div className="absolute bottom-[10px] right-[100px] animate-iconPulse z-20 sm:flex hidden">
                <img
                  src="https://img.icons8.com/3d-fluency/1500/facebook-logo.png"
                  alt=""
                  className="sm:w-16 w-12"
                />
              </div>
            </div>

            {/* INNER CIRCLE */}
            <div className="absolute sm:w-[480px] sm:h-[480px] w-[300px] h-[300px] sm:border border-black rounded-full animate-spinReverse">
              {/* animate-spinReverse */}
              <div className="absolute top-[180px] -left-6 animate-iconPulse sm:flex hidden">
                <img
                  src="https://img.icons8.com/3d-fluency/1500/whatsapp-logo.png"
                  alt=""
                  className="sm:w-16 w-12"
                />
              </div>
              <div className="absolute -bottom-6 right-50 animate-iconPulse sm:flex hidden">
                <img
                  src="https://img.icons8.com/fluency/240/linkedin.png"
                  alt=""
                  className="sm:w-12 w-8"
                />
              </div>
            </div>

            {/* CENTER IMAGE */}
            <img
              src={boy_sitting_laptop}
              alt=""
              className="sm:w-[500px] sm:h-[420px] h-[250px] object-contain relative z-10"
            />
          </div>
        </div>
      </div>
      <br />
      {/* ........................................................next list..........................................*/}

      <div className="w-full h-auto bg-gradient-to-b from-[#397ABF]/60 via-[#A6A6A6]/40 to-[#F0F0F3] relative z-10">
        <div className="w-full h-auto flex sm:flex-row flex-col justify-evenly items-center sm:items-start">
          {/* ......................................................first image set.................................................. */}
          <div className="sm:w-130 sm:h-120 flex justify-end sm:flex-col flex-col-reverse items-center gap-5 relative py-3">
            <p className="bg-white px-5 py-2 rounded-full shadow">Planning</p>
            <div className="bg-white rounded-2xl sm:w-70 w-70 sm:h-80 h-70 shadow z-10 p-1 overflow-hidden transition-all
             duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
              <img
                src="https://media.istockphoto.com/id/694600920/video/caucasian-woman-discussing-a-financial-graph-on-the-screen-in-meeting-room-with-her-african.jpg?s=640x640&k=20&c=mnphfALaNjEfgAxeNHAfKhJhDnklheRSrcfUkinxy6k="
                alt=""
                className="sm:w-70 w-70 rounded-2xl"
              />
              <div className="p-3 text-justify sm:text-[15px] text-[11px] font-bold">
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
              className="absolute sm:h-45 -right-40 bottom-15 opacity-60 sm:flex hidden"
            />
          </div>
          <div className="sm:w-70 h-90 w-70 flex items-center justify-center flex-col gap-5 relative">
            <div className="bg-white sm:h-60 h-70 rounded-[10px] p-1 z-10 shadow overflow-hidden transition-all
             duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
              <img
                src="https://media.istockphoto.com/id/1200289077/video/confident-indian-businesswoman-coach-speaking-during-corporate-team-meeting.jpg?s=640x640&k=20&c=cJ-QlicyMw4IoXkYFjOaRw8QHw9OsfR0LR8_2rVRl_g="
                alt=""
                className="w-70 rounded-[10px]"
              />
              <div className="p-2  text-justify sm:text-[12px] text-[11px]  font-bold">
                A confident team member from our side is presenting ideas during
                a professional meeting discussion. The team is actively
                listening and collaborating in a modern office environment.
              </div>
            </div>
            <p className="bg-white px-5 py-2 rounded-full shadow">Grouping</p>
            <img
              src={arrow_mark}
              alt=""
              className="absolute h-30 -right-38 bottom-0 rotate-70 opacity-60 sm:flex hidden"
            />
          </div>
          <div className="sm:w-130 sm:h-150 w-70 h-90 flex sm:flex-col flex-col-reverse items-center sm:justify-end justify-center gap-5">
            <p className="bg-white px-5 py-2 rounded-full shadow">Creating</p>
            <div className="bg-white sm:w-100 w-70 p-1 box-border h-auto rounded-2xl shadow overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
              <img
                src="https://media.istockphoto.com/id/1210948126/photo/woman-working-as-business-development-showing-talking-about-information-graphs-in-computer.jpg?s=612x612&w=0&k=20&c=XZeZzlqNHoom90AhOzutvcc3IjPwqA5rmu5Ro_yl-lY="
                alt=""
                className="sm:w-100 w-70 rounded-2xl"
              />
              <div className="sm:p-4 p-1 sm:text-[18px] text-[11px]  font-bold text-justify">
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
        <h1 className="font-bold sm:text-4xl text-3xl">Choose with us</h1>
        <h6 className="sm:text-[15px] text-[11px] sm:max-w-150 text-center max-w-70">
          Innovative solutions, creative designs, and professional service you
          can trust.
           We are committed to delivering quality, reliability, and
          success for every project.
        </h6>
        <ul className="flex sm:gap-10 gap-5">
          <li className="bg-white sm:px-10 px-3 flex items-center justify-center sm:py-3 py-2 text-2xl text-[13px] rounded-full border font-bold shadow-[#397ABF]  shadow-sm">
            Contact
          </li>
          <li className="bg-white sm:px-10 px-3 flex items-center justify-center sm:py-3 py-2 text-2xl text-[13px] rounded-full border font-bold shadow-[#397ABF] shadow-sm">
            Email
          </li>
          <li className="bg-white sm:px-10 px-3 flex items-center justify-center sm:py-3 py-2 text-2xl text-[13px] rounded-full border font-bold shadow-[#397ABF] shadow-sm">
            Explore
          </li>
        </ul>
        <img
          src={blue_cercle}
          alt=""
          className="absolute rotate-110 animate-spinSlow w-200 sm:flex hidden"
        />
      </div>
      {/* ............................................................next phone template............................ */}

      <div className="w-full h-auto  bg-amber-50 p-5 sm:flex items-center justify-evenly">
        <div className="sm:w-150 flex flex-col gap-10 text-center sm:text-left">
          <li className="list-none font-bold sm:text-4xl text-2xl">
            Our Value Proposition
          </li>
          <li className="list-none text-[15px] text-justify">
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
        <img src={phone_web_page} alt="" className="w-80 sm:flex hidden h-150" />
      </div>
      {/* ...............................................................final client section........................ */}

     <div className="w-full min-h-auto flex  flex-col items-center justify-center gap-12 px-5 py-20">

  {/* Heading */}
  <div className="text-center">
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
      Discover the perfect solution tailored
      <br className="hidden sm:block" />
      to your business needs.
    </h1>
  </div>

  {/* Logo Slider */}
  <div className="w-full max-w-6xl bg-white shadow-lg rounded-full overflow-hidden py-4 sm:py-6">
    <div className="flex items-center gap-8 sm:gap-12 md:gap-20 animate-scroll whitespace-nowrap">
      {/* First Set */}
      <img src={pic1} alt="" className="h-13 sm:h-14 md:h-18" />
      <img src={pic2} alt="" className="h-13 sm:h-14 md:h-18" />
      <img src={pic3} alt="" className="h-13 sm:h-14 md:h-18 bg-black" />
      <img src={pic4} alt="" className="h-13 sm:h-14 md:h-18" />

      {/* Duplicate Set */}
      <img src={pic1} alt="" className="h-13 sm:h-14 md:h-18" />
      <img src={pic2} alt="" className="h-13 sm:h-14 md:h-18" />
      <img src={pic3} alt="" className="h-13 sm:h-14 md:h-18 bg-black" />
      <img src={pic4} alt="" className="h-13 sm:h-14 md:h-18" />
    </div>
  </div>

  {/* Team Section */}
  <div className="w-full max-w-5xl text-center sm:text-left">
    <h5 className="text-2xl sm:text-3xl font-bold mb-6">
      Our Team
    </h5>

    <div className="space-y-5 text-gray-700 leading-8 text-base text-justify sm:text-lg">
      <p>
        Teamwork and hard work are the foundation of success in digital
        marketing. In a fast-changing digital world, no single person can
        handle all aspects of marketing effectively. It requires a team of
        skilled individuals such as content creators, <span className="font-bold underline text-[#397ABF]">SEO</span> specialists,
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

     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 h-auto py-20 px-5">
  {teamMembers.map((member, index) => (
    <div
      key={index}
      className="relative rounded-2xl overflow-hidden shadow-lg"
    >
      <img
        src={member.image}
        alt={member.role}
        className="w-full h-[600px] object-cover"
      />

      <div className="absolute bottom-0 left-0 w-full bg-white/60 backdrop-blur-sm p-4">
        <p className="font-semibold">{member.role}</p>

        <p className="text-xs mt-2 text-justify">
          {member.description}
        </p>

        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <TiStarFullOutline
                key={i}
                className="text-[#FDD835]"
              />
            ))}
          </div>

          <div className="flex gap-3 text-xl">
            <a
              href={member.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href={member.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <TbBrandLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
      <Schedule />
      <Footer/>
    </div>
  );
}

export default Home;
