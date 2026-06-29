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
import { TiStarFullOutline } from "react-icons/ti";
import Schedule from "../Appoiment/Schedule";
import Footer from "../../Footers/Footer";

function Home() {
  const teamMembers = [
    {
      image: "https://i.pinimg.com/1200x/0e/db/f3/0edbf38c0d27da9b9dd4cf8a95c850b7.jpg",
      role: "Software Developer",
      description: "Building modern, scalable and user-friendly software solutions with custom development.",
      instagram: "https://www.instagram.com/a_nandhu_c/",
      linkedin: "https://www.linkedin.com/in/anandhu-chulliveetill/",
    },
    {
      image: "https://i.pinimg.com/736x/8c/5e/9d/8c5e9dd58ecd175df019b09f6bac72b6.jpg",
      role: "Digital Marketing Specialist",
      description: "Managing SEO, social media marketing, and advertising campaigns.",
      instagram: "#",
      linkedin: "#",
    },
    {
      image: "https://i.pinimg.com/736x/0d/a5/e7/0da5e7b3a24ea9ef05db4eaa253e9cf3.jpg",
      role: "UI/UX Designer",
      description: "Creating beautiful and user-friendly interfaces for digital products.",
      instagram: "#",
      linkedin: "#",
    },
    {
      image: "https://i.pinimg.com/1200x/2c/e3/98/2ce398b6e5a2999258f2327bbbb72a73.jpg",
      role: "Video Editor",
      description: "Producing engaging videos and motion graphics for brands.",
      instagram: "#",
      linkedin: "#",
    },
  ];

  const phone = "917034492490";
  const message = encodeURIComponent(
    "Hi Brandax Studio, I'm interested in your services. Could you please provide more information?"
  );

  return (
    <div className="w-full mt-16 sm:mt-0 bg-[#EFEFF1] text-black flex flex-col overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full min-h-screen px-6 py-12 md:py-20 lg:px-24 gap-12 lg:gap-0 text-center lg:text-left">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center gap-6 md:gap-8 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl lg:leading-[70px] font-normal">
            Your Brand Deserves Better{" "}
            <span className="font-bold text-[#397ABF] block sm:inline">Marketing</span>
          </h1>
          <h6 className="max-w-xl text-sm md:text-base text-gray-700 leading-relaxed text-justify md:text-center lg:text-justify">
            Your brand deserves better marketing, and Brandax delivers creative
            digital solutions that help businesses grow faster and stand
            stronger online. From branding and web development to digital
            marketing strategies, we create impactful experiences that connect
            your business with the right audience and drive real results.
          </h6>
          
          {/* Social Icons */}
          <div className="flex gap-6 text-3xl md:text-4xl">
            <a href="https://www.instagram.com/brandax_studio/" className="hover:text-[#397ABF] transition-colors"><FaInstagram /></a>
            <a href={`https://wa.me/${phone}?text=${message}`} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="hover:text-[#397ABF] transition-colors"><RiWhatsappLine /></a>
            <a href="https://www.linkedin.com/company/brandax-branding-studio/" className="hover:text-[#397ABF] transition-colors"><TbBrandLinkedin /></a>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 items-center">
            <div className="w-28 md:w-32 h-10 bg-white border rounded-full flex justify-between items-center px-3 shadow-sm">
              <p className="text-xs md:text-sm font-medium">Google</p>
              <img src="https://img.icons8.com/fluency/240/google-logo.png" alt="Google" className="w-5 md:w-6" />
            </div>
            <div className="w-28 md:w-32 h-10 bg-white border rounded-full flex justify-between items-center px-3 shadow-sm">
              <p className="text-xs md:text-sm font-medium">Meta AI</p>
              <img src="https://img.icons8.com/ultraviolet/480/approval.png" alt="Meta" className="w-5 md:w-6" />
            </div>
            <div className="w-28 md:w-32 h-10 bg-white border rounded-full flex justify-between items-center px-3 shadow-sm">
              <p className="text-xs md:text-sm font-medium">Premium</p>
              <img src="https://img.icons8.com/emoji/480/gem-stone.png" alt="Premium" className="w-5 md:w-6" />
            </div>
          </div>
          <p className="text-sm md:text-base font-medium text-gray-600">
            Next-level digital innovation from the origin
          </p>
        </div>

        {/* Right Content - Hero Image & Animation */}
        <div className="w-full lg:w-1/2 flex items-center justify-center relative mt-10 lg:mt-0">
          <p className="absolute top-0 right-10 text-sm font-light hidden lg:block text-gray-500">
            Your Success Is Our Priority
          </p>
          
          <div className="relative w-[280px] h-[280px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] flex items-center justify-center">
            {/* OUTER CIRCLE */}
            <div className="absolute w-full h-full border border-gray-300 rounded-full animate-spinSlow">
              <div className="absolute top-[-15px] md:top-[-25px] left-1/2 -translate-x-1/2 animate-iconPulse">
                <img src="https://img.icons8.com/3d-fluency/1500/meta.png" alt="" className="w-12 md:w-16 rotate-45" />
              </div>
              <div className="absolute top-[20%] right-[-10px] md:right-[-20px] animate-iconPulse">
                <img src="https://img.icons8.com/3d-fluency/1500/instagram-logo.png" alt="" className="w-12 md:w-16" />
              </div>
              <div className="absolute bottom-[5%] right-[10%] animate-iconPulse z-20">
                <img src="https://img.icons8.com/3d-fluency/1500/facebook-logo.png" alt="" className="w-10 md:w-14" />
              </div>
            </div>

            {/* INNER CIRCLE */}
            <div className="absolute w-[200px] h-[200px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] border border-gray-300 rounded-full animate-spinReverse">
              <div className="absolute top-[30%] -left-6 md:-left-8 animate-iconPulse">
                <img src="https://img.icons8.com/3d-fluency/1500/whatsapp-logo.png" alt="" className="w-12 md:w-16" />
              </div>
              <div className="absolute -bottom-4 right-1/4 animate-iconPulse hidden md:block">
                <img src="https://img.icons8.com/fluency/240/linkedin.png" alt="" className="w-10 md:w-12" />
              </div>
            </div>

            {/* CENTER IMAGE */}
            <img src={boy_sitting_laptop} alt="Boy with laptop" className="w-[180px] md:w-[300px] lg:w-[380px] object-contain relative z-10" />
          </div>
        </div>
      </div>

      {/* --- PROCESS SECTION --- */}
      <div className="w-full bg-gradient-to-b from-[#397ABF]/60 via-[#A6A6A6]/40 to-[#F0F0F3] py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 items-center justify-items-center">
          
          {/* Card 1: Planning */}
          <div className="flex flex-col items-center gap-4 relative">
            <p className="bg-white px-6 py-2 rounded-full shadow text-sm font-semibold">Planning</p>
            <div className="bg-white rounded-2xl w-full max-w-[300px] shadow-lg p-2 overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
              <img src="https://media.istockphoto.com/id/694600920/video/caucasian-woman-discussing-a-financial-graph-on-the-screen-in-meeting-room-with-her-african.jpg?s=640x640&k=20&c=mnphfALaNjEfgAxeNHAfKhJhDnklheRSrcfUkinxy6k=" alt="" className="w-full rounded-xl object-cover h-40 md:h-48" />
              <div className="p-3 text-justify text-xs md:text-sm text-gray-700">
                <p>A businesswoman is presenting data on a large digital screen, pointing at a rising graph during a meeting.</p>
              </div>
            </div>
          </div>

          {/* Card 2: Grouping */}
          <div className="flex flex-col-reverse md:flex-col items-center gap-4 relative md:mt-16">
            <div className="bg-white rounded-2xl w-full max-w-[300px] shadow-lg p-2 overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
              <img src="https://media.istockphoto.com/id/1200289077/video/confident-indian-businesswoman-coach-speaking-during-corporate-team-meeting.jpg?s=640x640&k=20&c=cJ-QlicyMw4IoXkYFjOaRw8QHw9OsfR0LR8_2rVRl_g=" alt="" className="w-full rounded-xl object-cover h-40 md:h-48" />
              <div className="p-3 text-justify text-xs md:text-sm text-gray-700">
                A confident team member from our side is presenting ideas during a professional meeting discussion.
              </div>
            </div>
            <p className="bg-white px-6 py-2 rounded-full shadow text-sm font-semibold md:order-last">Grouping</p>
          </div>

          {/* Card 3: Creating */}
          <div className="flex flex-col items-center gap-4 relative">
            <p className="bg-white px-6 py-2 rounded-full shadow text-sm font-semibold">Creating</p>
            <div className="bg-white rounded-2xl w-full max-w-[300px] shadow-lg p-2 overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
              <img src="https://media.istockphoto.com/id/1210948126/photo/woman-working-as-business-development-showing-talking-about-information-graphs-in-computer.jpg?s=612x612&w=0&k=20&c=XZeZzlqNHoom90AhOzutvcc3IjPwqA5rmu5Ro_yl-lY=" alt="" className="w-full rounded-xl object-cover h-40 md:h-48" />
              <div className="p-3 text-justify text-xs md:text-sm text-gray-700">
                Create and design innovative business strategies with smart digital solutions and data-driven insights.
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* --- CHOOSE WITH US --- */}
      <div className="w-full sm:h-200  py-16 md:py-24 px-6 relative flex items-center justify-center flex-col gap-8 overflow-hidden">
        
        {/* Background Image - Centered absolutely */}
        <img 
          src={blue_cercle} 
          alt="" 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 animate-spinSlow w-[300px] md:w-[450px] lg:w-[600px] z-0 pointer-events-none" 
        />
        
        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-8 w-full">
          <h1 className="font-bold text-3xl md:text-4xl text-center">Choose with us</h1>
          <h6 className="text-sm md:text-base max-w-2xl text-center text-gray-700">
            Innovative solutions, creative designs, and professional service you
            can trust. We are committed to delivering quality, reliability, and
            success for every project.
          </h6>
          <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
            <li className="bg-white px-8 py-3 text-sm md:text-lg rounded-full border font-bold shadow-sm cursor-pointer hover:bg-gray-50 transition">Contact</li>
            <li className="bg-white px-8 py-3 text-sm md:text-lg rounded-full border font-bold shadow-sm cursor-pointer hover:bg-gray-50 transition">Email</li>
            <li className="bg-white px-8 py-3 text-sm md:text-lg rounded-full border font-bold shadow-sm cursor-pointer hover:bg-gray-50 transition">Explore</li>
          </ul>
        </div>
      </div>

      {/* --- VALUE PROPOSITION --- */}
      <div className="w-full max-w-6xl mx-auto py-12 md:py-20 px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex flex-col gap-6 text-center md:text-left md:w-1/2">
          <h2 className="font-bold text-3xl md:text-4xl">Our Value Proposition</h2>
          <p className="text-sm md:text-base text-gray-700 text-justify">
            We are committed to delivering the highest quality service, built on
            trust, dedication, and results. When you choose to work with us, you
            gain a team that stands by your business every day focused on
            helping you grow, succeed, and lead in your industry.
          </p>
          <p className="text-sm md:text-base font-bold italic text-gray-800 border-l-4 border-[#397ABF] pl-4 text-left">
            “A truly valuable experience working with the team. Their <br className="hidden lg:block"/>
            professionalism and quality delivery exceeded our expectations.”
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src={phone_web_page} alt="Mobile layout" className="w-48 md:w-64 lg:w-80 object-contain" />
        </div>
      </div>

      {/* --- CLIENTS & TEAM TEXT --- */}
      <div className="w-full flex flex-col items-center gap-12 md:gap-16 px-6 py-16 md:py-24 bg-white">
        <div className="text-center max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Discover the perfect solution tailored to your business needs.
          </h1>
        </div>

        <div className="w-full max-w-6xl bg-gray-50 shadow-inner rounded-full overflow-hidden py-6">
          <div className="flex items-center gap-8 md:gap-16 animate-scroll whitespace-nowrap px-10">
            <img src={pic1} alt="Client 1" className="h-8 md:h-12 lg:h-14 object-contain" />
            <img src={pic2} alt="Client 2" className="h-8 md:h-12 lg:h-14 object-contain" />
            <img src={pic3} alt="Client 3" className="h-8 md:h-12 lg:h-14 object-contain bg-black rounded p-1" />
            <img src={pic4} alt="Client 4" className="h-8 md:h-12 lg:h-14 object-contain" />
            <img src={pic1} alt="Client 1" className="h-8 md:h-12 lg:h-14 object-contain" />
            <img src={pic2} alt="Client 2" className="h-8 md:h-12 lg:h-14 object-contain" />
          </div>
        </div>

        <div className="w-full max-w-5xl text-center md:text-left mt-8">
          <h5 className="text-2xl md:text-3xl font-bold mb-6">Our Team</h5>
          <div className="space-y-6 text-gray-700 leading-relaxed text-sm md:text-base text-justify">
            <p>
              Teamwork and hard work are the foundation of success in digital
              marketing. In a fast-changing digital world, no single person can
              handle all aspects of marketing effectively. It requires a team of
              skilled individuals such as content creators,{" "}
              <span className="font-bold underline text-[#397ABF]">SEO</span>{" "}
              specialists, designers, developers, and analysts working together
              toward a common goal.
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

      {/* --- TEAM GRID --- */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16 px-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="relative rounded-2xl overflow-hidden shadow-lg group">
            <img 
              src={member.image} 
              alt={member.role} 
              className="w-full h-[350px] md:h-[400px] lg:h-[450px] object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute bottom-0 left-0 w-full bg-white/80 backdrop-blur-md p-5 border-t border-white/40">
              <p className="font-bold text-lg text-gray-900">{member.role}</p>
              <p className="text-xs md:text-sm mt-2 text-gray-700 leading-relaxed">{member.description}</p>
              <div className="flex justify-between items-center mt-4 border-t pt-3 border-gray-300">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <TiStarFullOutline key={i} className="text-[#FDD835] text-sm md:text-base" />
                  ))}
                </div>
                <div className="flex gap-4 text-lg md:text-xl text-[#397ABF]">
                  <a href={member.instagram} target="_blank" rel="noreferrer" className="hover:text-black transition-colors">
                    <FaInstagram />
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noreferrer" className="hover:text-black transition-colors">
                    <TbBrandLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Schedule />
      <Footer />
    </div>
  );
}

export default Home;