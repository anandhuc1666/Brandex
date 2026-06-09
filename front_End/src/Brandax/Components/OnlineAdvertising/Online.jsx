import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Schedule from "../Appoiment/Schedule";
import Footer from "../../Footers/Footer";
function Online() {
  return (
    <div className="w-full h-auto bg-[#F0F0F3] text-black font-Nunito sm:pt-30 pt-10 flex flex-col justify-center gap-5">
      <div className="w-full h-auto flex sm:flex-row flex-col items-center justify-evenly sm:gap-0 gap-10 p-6">
        <ul className="flex flex-col gap-3">
          <li className="sm:text-5xl text-3xl  sm:leading-15 font-medium">
            Online Advertising
            <br />
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
                Online Advertising
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
        <li className="max-w-[700px] sm:text-[18px] text-[15px]">
          We ensure wider reach and higher conversion rates through customized
          online marketing strategies tailored to your business goals. Brandax
          focuses on carefully selected digital platforms to promote your brand
          effectively and deliver optimal results.
        </li>
        <li className="px-6 py-3 bg-[#397ABF] text-white rounded-full text-[15px] hover:bg-[#2a5a8c] shadow-lg cursor-pointer border">
          Schedule Appointment Today
        </li>
      </div>
      <div className="w-full sm:h-[350px] h-auto sm:border-b  flex items-center gap-5 justify-evenly sm:flex-row flex-col p-6">
        <div className="">
          <h1 className="text-3xl font-bold text-[#397ABF]">OUR</h1>
          <h2 className="text-2xl font-bold ">commitments & Guarantee</h2>
          <p className="max-w-[700px] sm:text-[18px] text-[15px] sm:mt-10 mt-5">
            Our dedication and commitment set us apart from other agencies. We
            go the extra mile to achieve the goals we promise to our valued
            clients, no matter the challenge. With our seamless email marketing
            services, we help expand your reach, strengthen customer engagement,
            and drive business growth.
          </p>
        </div>
        <div className="w-70 h-70 rounded-full border border-[#397ABF] relative flex items-center justify-center">
          <div className="w-40 h-40 bg-[#397ABF] right-0 absolute top-0"></div>
          <img
            src="https://media.istockphoto.com/id/1224215486/photo/female-doctor-consulting-patient-at-hospital-meeting.jpg?s=612x612&w=0&k=20&c=AUmWFY0CIBrgZ68g-ASeY4eAs_XI-qHIcMviqWHswQs="
            alt=""
            className="w-50  z-10 border border-white shadow rounded-[5px]"
          />
        </div>
      </div>
      {/* ......................................................next page........................................................ */}

      <div className="w-full h-auto p-5 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-10">
          <div className="max-w-145 flex flex-col gap-3 h-auto p-3">
            <h1 className="text-2xl font-bold text-[#397ABF]">Identity</h1>
            <p className="text-justify sm:text-start border-l p-1 sm:border-none sm:pl-0">
              We strengthen your brand identity in the digital space through
              uniquely crafted and engaging content designed to leave a lasting
              impression on your audience.
            </p>
          </div>
          <div className="max-w-145 flex flex-col gap-3 h-auto p-3">
            <h1 className="text-2xl font-bold text-black">Reliability</h1>
            <p className="text-justify sm:text-start border-l p-1 sm:border-none sm:pl-0">
              Assured reliability is one of the defining qualities of Brandax.
              We provide dependable, consistent, and trustworthy services
              dedicated to delivering the best results for our clients.
            </p>
          </div>
          <div className="max-w-145 flex flex-col gap-3 h-auto p-3 ">
            <h1 className="text-2xl font-bold text-black">Support</h1>
            <p className="text-justify sm:text-start border-l p-1 sm:border-none sm:pl-0">
              Our professionals provide continuous support throughout the
              project, helping you maintain consistency, momentum, and steady
              progress toward your business goals.
            </p>
          </div>
          <div className="max-w-145 flex flex-col gap-3 h-auto p-3">
            <h1 className="text-2xl font-bold text-[#397ABF]">Reach</h1>
            <p className="text-justify sm:text-start border-l p-1 sm:border-none sm:pl-0">
              By expanding your reach and increasing brand visibility, we help
              elevate your presence and popularity in the digital world.
            </p>
          </div>
          <div className="max-w-145 flex flex-col gap-3 h-auto p-3">
            <h1 className="text-2xl font-bold text-[#397ABF]">Growth</h1>
            <p className="text-justify sm:text-start border-l p-1 sm:border-none sm:pl-0">
              By building a strong brand identity and expanding your reach, our
              professionals ensure consistent growth and long-term success for
              your brand.
            </p>
          </div>
        </div>
      </div>
      {/* ........................................................next page........................................................ */}

      <div className="w-full h-auto py-5 flex items-center justify-center sm:flex-row flex-col gap-10">
        <div className="sm:w-180 bg-[#397ABF] flex flex-col gap-5  p-10 shadow font-Arimo text-white">
          <h1 className="text-4xl">Online Advertising</h1>
          <p className="text-2xl font-extralight font-Nunito">
            Explore the power of digital advertising to expand your reach,
            connect with the right audience, and drive meaningful business
            growth.
          </p>
        </div>
        <div className="w-100 h-auto text-[14px] flex flex-col gap-5 p-5">
          <ul className="flex flex-col gap-2">
            <li className="text-[18px] font-Nunito font-bold">Google Ads</li>
            <li className="text-justify">
              Google Ads are one of the most effective ways to establish your
              presence and stand out among competing brands. Well-researched and
              strategically designed ad campaigns can help position your
              business at the top and attract the right audience.
            </li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li className="text-[18px] font-Nunito font-bold">YouTube Ads</li>
            <li className="text-justify">
              Promote your brand through YouTube, the world’s leading video
              content platform, to capture customer attention effectively.
              Engaging and impactful ads can attract viewers within the first
              few seconds and encourage them to connect with your brand.
            </li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li className="text-[18px] font-Nunito font-bold">
              Local Ad Campaigns
            </li>
            <li className="text-justify">
              Use geographically targeted online marketing campaigns when your
              products or services are available in specific regions.
              Understanding customer behavior and user preferences is essential
              to achieving the best results from your campaigns.
            </li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li className="text-[18px] font-Nunito font-bold">
              Smart Ad Campaigns
            </li>
            <li className="text-justify">
              Showcase your unique selling points and the exclusive advantages
              of your brand to connect effectively with customers. You can
              choose a single focused campaign or multiple targeted campaigns
              for different products and services to maximize results.
            </li>
          </ul>
        </div>
      </div>

      {/* ........................................................next page........................................................ */}

      <div className="w-full h-auto flex flex-col items-center font-serif py-10 gap-10 sm:px-0 px-5 text-center sm:text-start">
        <h1 className="sm:text-3xl text-2xl font-medium">
          PROCESS<span className="text-[#397ABF] font-extrabold">BEHIND</span>
        </h1>
        <p className="sm:max-w-[730px] max-w-[350px] sm:text-[16px] text-center text-[14px] font-Arimo">
          The success of online marketing depends on several factors, including
          customer behavior, preferences, and market demands. We conduct in
          depth market analysis and web research to create effective strategies
          that deliver the best results for your products and services.
        </p>
        <div className="grid sm:grid-cols-2 gap-5 items-center justify-center mt-10 font-Arimo text-[12px]">
          <div className="sm:w-120 w-90 h-35 sm:text-start text-justify border-white bg-white rounded-[5px] shadow px-3 flex items-center gap-5">
            <div className="w-20 h-20 bg-[#397ABF] text-white font-bold text-4xl flex items-center justify-center font-Nunito">
              <p>1</p>
            </div>
            <ul className="flex flex-col gap-2">
              <li className="font-bold text-[15px]">User Psyche</li>
              <li className="max-w-[340px] ">
                Understanding the mindset and preferences of customers
                interested in a particular product is essential for creating a
                successful and result-driven online marketing campaign.
              </li>
            </ul>
          </div>
          <div className="sm:w-120 w-90 h-35 sm:text-start text-justify border-white bg-white rounded-[5px] shadow px-3 flex items-center gap-5">
            <div className="w-20 h-20 bg-[#F0F0F3] text-[#397ABF] font-bold text-4xl flex items-center justify-center font-Nunito">
              <p>2</p>
            </div>
            <ul className="flex flex-col gap-2">
              <li className="font-bold text-[15px]">Content Creation</li>
              <li className="max-w-[340px] ">
                The content is carefully crafted to align with the insights
                gathered through user analysis. Our skilled team creates
                engaging visual and written content tailored to audience
                preferences and campaign goals.
              </li>
            </ul>
          </div>
          <div className="sm:w-120 w-90 h-35 sm:text-start text-justify border-white bg-white rounded-[5px] shadow px-3 flex items-center gap-5">
            <div className="w-20 h-20 bg-[#F0F0F3] text-[#397ABF] font-bold text-4xl flex items-center justify-center font-Nunito">
              <p>3</p>
            </div>
            <ul className="flex flex-col gap-2">
              <li className="font-bold text-[15px]">Strategic Placement</li>
              <li className="max-w-[340px] ">
                We carefully select websites, apps, and other digital platforms
                after detailed analysis to ensure your online advertising
                campaigns reach the right audience and achieve the desired goals
                effectively.
              </li>
            </ul>
          </div>
          <div className="sm:w-120 w-90 h-35 sm:text-start text-justify border border-white bg-white rounded-[5px] shadow px-3 flex items-center gap-5">
            <div className="w-20 h-20 bg-[#397ABF] text-white font-bold text-4xl flex items-center justify-center font-Nunito">
              <p>4</p>
            </div>
            <ul className="flex flex-col gap-2">
              <li className="font-bold text-[15px]">Wide Promotion</li>
              <li className="max-w-[340px] ">
                Successful online marketing campaigns require extensive
                promotion through carefully selected channels to achieve the
                best results. The most effective platforms to maximize your
                campaign performance.
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

export default Online;
