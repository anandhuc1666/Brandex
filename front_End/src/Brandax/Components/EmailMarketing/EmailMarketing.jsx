import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Schedule from "../Appoiment/Schedule";
import Footer from "../../Footers/Footer";
function EmailMarketing() {
  return (
    <div className="w-full h-auto bg-[#F0F0F3] text-black font-Nunito sm:pt-30 pt-10 flex flex-col justify-center gap-5">
      <div className="w-full h-auto flex sm:flex-row flex-col items-center justify-evenly sm:gap-0 gap-10 p-6">
        <ul className="flex flex-col gap-3">
          <li className="sm:text-5xl text-3xl  sm:leading-15 font-medium">
            Email Marketing <br />
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
                Email Marketing
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
          Strategic email marketing campaigns designed to promote your products,
          expand your reach, and drive maximum sales growth. Our targeted
          approach helps elevate your business and accelerate brand success
          effectively.
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

      <div className="w-full h-auto p-10 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-10">
          <div className="max-w-145 flex flex-col gap-3 h-auto p-3">
            <h1 className="text-2xl font-bold text-[#397ABF]">
              Framing Emails
            </h1>
            <p className="text-justify sm:text-start border-l p-1 sm:border-none sm:pl-0">
              Our talented team of creators crafts professional and engaging
              emails that perfectly reflect your brand identity, helping you
              achieve better customer engagement and improved results.
            </p>
          </div>
          <div className="max-w-145 flex flex-col gap-3 h-auto p-3">
            <h1 className="text-2xl font-bold text-black">Expert Team</h1>
            <p className="text-justify sm:text-start border-l p-1 sm:border-none sm:pl-0">
              Brandax has a team of experienced professionals dedicated to
              providing exceptional support and delivering high quality
              solutions tailored to your business needs.
            </p>
          </div>
          <div className="max-w-145 flex flex-col gap-3 h-auto p-3 ">
            <h1 className="text-2xl font-bold text-black">Integrating Media</h1>
            <p className="text-justify sm:text-start border-l p-1 sm:border-none sm:pl-0">
              We integrate social media platforms with email marketing
              strategies to improve productivity, strengthen audience
              engagement, and expand your brand reach effectively.
            </p>
          </div>
          <div className="max-w-145 flex flex-col gap-3 h-auto p-3">
            <h1 className="text-2xl font-bold text-[#397ABF]">
              Credible Services
            </h1>
            <p className="text-justify sm:text-start border-l p-1 sm:border-none sm:pl-0">
              Our talented team of creators crafts professional and engaging By
              delivering reliable services and result-driven strategies, we have
              grown into one of the leading digital marketing agencies in
              Kerala.
            </p>
          </div>
        </div>
      </div>
      {/* ........................................................next page........................................................ */}

      <div className="w-full h-auto py-5 flex items-center justify-center sm:flex-row flex-col gap-10">
        <div className="sm:w-180 bg-[#397ABF] flex flex-col gap-5  p-10 shadow font-Arimo text-white">
          <h1 className="text-4xl">Email Marketing</h1>
          <p className="text-2xl font-extralight font-Nunito">
            Expand your customer base with customized email marketing strategies
            designed to engage your audience, strengthen relationships, and
            drive business growth.
          </p>
        </div>
        <div className="w-100 h-auto text-[14px] flex flex-col gap-5 p-5">
          <ul className="flex flex-col gap-2">
            <li className="text-[18px] font-Nunito font-bold">
              Personalized Emails
            </li>
            <li className="text-justify">
              Reach potential customers with personalized emails that create a
              meaningful connection. Turn prospects into loyal clients by
              delivering engaging messages that clearly highlight the benefits
              and value your brand offers.
            </li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li className="text-[18px] font-Nunito font-bold">Email Ads</li>
            <li className="text-justify">
              Promote your brand and highlight its unique offerings through
              effective email marketing campaigns. We create engaging and
              optimized emails designed to avoid spam filters, capture user
              attention, and encourage customers to explore your brand.
            </li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li className="text-[18px] font-Nunito font-bold">
              Design & Develop Email Newsletters
            </li>
            <li className="text-justify">
              Email newsletters are an effective way to maintain regular
              communication with your customers and keep them updated on your
              latest products, services, and business developments. They help
              build stronger customer relationships while enhancing your brand
              visibility and credibility.
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
          A well planned email marketing process is essential to ensure emails
          avoid spam folders and capture the recipient’s attention before being
          ignored or deleted. The content must be engaging, authentic, and
          instantly compelling without appearing spammy.
        </p>
        <div className="grid sm:grid-cols-2 gap-5 items-center justify-center mt-10 font-Arimo text-[12px]">
          <div className="sm:w-120 w-90 h-35 sm:text-start text-justify border-white bg-white rounded-[5px] shadow px-3 flex items-center gap-5">
            <div className="w-20 h-20 bg-[#397ABF] text-white font-bold text-4xl flex items-center justify-center font-Nunito">
              <p>1</p>
            </div>
            <ul className="flex flex-col gap-2">
              <li className="font-bold text-[15px]">Analysis</li>
              <li className="max-w-[340px] ">
                The type and style of email marketing will vary based on the
                nature of the business. Therefore, we conduct a detailed
                analysis of your brand and target audience before crafting
                customized email campaigns.
              </li>
            </ul>
          </div>
          <div className="sm:w-120 w-90 h-35 sm:text-start text-justify border-white bg-white rounded-[5px] shadow px-3 flex items-center gap-5">
            <div className="w-20 h-20 bg-[#F0F0F3] text-[#397ABF] font-bold text-4xl flex items-center justify-center font-Nunito">
              <p>2</p>
            </div>
            <ul className="flex flex-col gap-2">
              <li className="font-bold text-[15px]">Discussion</li>
              <li className="max-w-[340px] ">
                Our professionals carefully review the findings and share a
                detailed analysis report with you to finalize the email strategy
                and content preparation process.
              </li>
            </ul>
          </div>
          <div className="sm:w-120 w-90 h-35 sm:text-start text-justify border-white bg-white rounded-[5px] shadow px-3 flex items-center gap-5">
            <div className="w-20 h-20 bg-[#F0F0F3] text-[#397ABF] font-bold text-4xl flex items-center justify-center font-Nunito">
              <p>3</p>
            </div>
            <ul className="flex flex-col gap-2">
              <li className="font-bold text-[15px]">Preparation</li>
              <li className="max-w-[340px] ">
                Our content creators craft engaging marketing and promotional
                emails using compelling and persuasive language designed to
                attract customers and encourage them to connect with your brand.
              </li>
            </ul>
          </div>
          <div className="sm:w-120 w-90 h-35 sm:text-start text-justify border border-white bg-white rounded-[5px] shadow px-3 flex items-center gap-5">
            <div className="w-20 h-20 bg-[#397ABF] text-white font-bold text-4xl flex items-center justify-center font-Nunito">
              <p>4</p>
            </div>
            <ul className="flex flex-col gap-2">
              <li className="font-bold text-[15px]">Dissemination</li>
              <li className="max-w-[340px] ">
                Emails will be sent to the selected mailing lists at
                strategically scheduled times on a recurring basis to maximize
                engagement and achieve the desired marketing results.
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

export default EmailMarketing;
