import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { GiStaryu } from "react-icons/gi";
import FAQ from "../FAQ/FAQ";
import Schedule from "../Appoiment/Schedule";
import Footer from "../../Footers/Footer";

function Webhosting() {
  return (
    <div className="w-full h-auto bg-[#F0F0F3] text-black font-Nunito sm:pt-30 pt-10 flex flex-col justify-center gap-5">
      <div className="w-full h-auto flex sm:flex-row flex-col items-center justify-evenly sm:gap-0 gap-10 p-6">
        <ul className="flex flex-col gap-3">
          <li className="sm:text-5xl text-3xl  sm:leading-15 font-medium">
            Web Hosting
            <br />
            <span className="font-bold text-[#397ABF]">Services</span>
          </li>
          <li className="text-[18px] font-medium">In Kerala</li>
          <li className="sm:text-[15px] text-[12px] flex items-center gap-2 ">
            <a href="/" className="flex items-center gap-2">
              {" "}
              <span className="px-2 bg-white shadow border border-white hover:font-bold rounded-2xl">
                Home
              </span>{" "}
              <IoIosArrowForward />{" "}
              <span className="text-[#397ABF] font-bold">Web Hosting</span>{" "}
            </a>
          </li>
        </ul>
        <img
          src="https://media.istockphoto.com/id/2230807736/photo/futuristic-ai-data-center-interior.jpg?s=612x612&w=0&k=20&c=E2s9c_8IA4fBpNmX4gzn2qLnne4mXW1jhYOf9Essem8="
          alt=""
          className="sm:h-[400px] object-cover rounded-[15px] border border-white shadow"
        />
      </div>
      <div className="w-full h-auto flex items-center sm:flex-row sm:p-0 p-6 flex-col justify-evenly list-none gap-6">
        <li className="max-w-[720px] sm:text-[18px] text-[15px] text-justify">
          At Brandax, we provide reliable and high performance web hosting
          solutions designed to keep your website secure, fast, and always
          available. Our hosting services are strengthened with advanced
          security measures, regular backups, and powerful add on features to
          ensure maximum uptime and protection. Whether you're launching a new
          website or looking for an affordable hosting provider with enhanced
          security and scalability, Brandax delivers dependable web hosting
          solutions tailored to your business needs.
        </li>
        <Link to={"/Booking"}>
          <button className="px-6 py-3 bg-[#397ABF] text-white rounded-full text-[15px] hover:bg-[#2a5a8c] shadow-lg cursor-pointer border">
            Schedule Appointment Today
          </button>
        </Link>
      </div>
      <div className="w-full h-auto flex flex-col lg:flex-row items-center justify-evenly gap-15 p-5 sm:px-30">
        <div className="w-full sm:max-w-[520px] h-[200px] bg-[#397ABF]/60 border border-white rounded-[10px] relative z-10 text-white">
          <div className="w-full sm:max-w-[520px] bg-[#397ABF] sm:top-10 sm:left-10 top-5 left-5 absolute border border-white rounded-[10px] p-5 flex flex-col gap-5 shadow">
            <p className="sm:text-4xl text-2xl">
              Custom Application Development
            </p>
            <p className="sm:text-[18px] text-[12px] text-justify">
              With decades of expertise in software and application development,
              Brandax delivers custom solutions tailored to your business needs,
              helping you streamline operations, enhance efficiency, and drive
              sustainable growth.
            </p>
          </div>
        </div>
        <div className="max-w-150 text-justify flex flex-col gap-5">
          <h1 className="text-2xl font-bold">Cloud Hosting Services</h1>
          <p className="sm:text-[18px] text-[15px]">
            Empower your business with secure and scalable cloud hosting
            solutions from Brandax. Our cloud hosting services deliver high
            performance, maximum uptime, and enhanced security to ensure your
            website and applications run smoothly. With continuous monitoring,
            automatic backups, and expert support, we provide a reliable hosting
            environment that grows with your business needs.
          </p>
          <ul className="flex gap-3 sm:text-[18px] text-[15px] font-medium">
            <li className="flex gap-3 items-center justify-center">
              <GiStaryu className="text-[#397ABF]" />
              Web Hosting
            </li>
            <li className="flex gap-3 items-center justify-center">
              <GiStaryu className="text-[#397ABF]" /> Cloud Hosting Services
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-auto flex  sm:pt-20 items-center justify-center">
        <div className="flex h-auto items-center sm:flex-row p-5 text-justify flex-col sm:gap-18">
          <ul className="max-w-150 flex flex-col gap-5">
            <li className="text-3xl font-light text-[#397ABF]">
              Safe secure <span className="font-bold">Web Hosting</span>
            </li>
            <li className="text-3xl font-bold">Managed Hosting</li>
            <li className="text-[18px]">
              Focus on growing your business while Brandax takes care of your
              hosting infrastructure. Our managed hosting solutions include
              server maintenance, security updates, performance optimization,
              and expert technical support to ensure a seamless online
              experience.
            </li>
          </ul>
          <br />
          <img
            src="https://media.istockphoto.com/id/1389864946/photo/transfer-data-to-a-server-or-hosting-service-data-transfer-concept-ftp.jpg?s=612x612&w=0&k=20&c=OtbRuJGsDulzWNMCHkn_MGBG0ZOY-PPaXAq_Octf-wQ="
            alt=""
            className="w-full max-w-120 border border-white rounded-[5px]"
          />
        </div>
      </div>
      <div className="w-full flex sm:flex-row p-5  flex-col sm:text-start  text-center items-center justify-center gap-15">
        <div className="flex flex-col gap-5">
          <ul className="max-w-140 flex flex-col gap-5">
            <li className="text-2xl font-bold">Dedicated Server Hosting</li>
            <li className="sm:text-[18px] text-justify text-[15px]">
              Experience unmatched performance and reliability with dedicated
              server hosting solutions from Brandax. Our powerful servers
              provide enhanced security, complete control, and the resources
              needed to support high traffic websites and demanding
              applications.
            </li>
          </ul>
          <img
            src="https://media.istockphoto.com/id/1131198259/photo/it-technician-with-a-laptop-computer-and-black-male-engineer-colleague-are-talking-in-data.jpg?s=612x612&w=0&k=20&c=m-O-ga3azY2m3pcnkJ8vOCmF1CYiuWoeYqHblCNlUA8="
            alt=""
            className="w-full max-w-140 border border-white rounded-[5px]"
          />
        </div>
        <ul className="max-w-150 flex flex-col gap-5 text-justify">
          <li className="text-2xl font-bold text-center sm:text-start">Domain Registration</li>
          <li className="sm:text-[18px] text-[15px]">
            Secure the perfect domain name for your business with Brandax. We
            offer reliable domain registration services, making it easy to
            establish and strengthen your online presence.
          </li>
          <li className="text-2xl font-bold text-center sm:text-start">Backup & Disaster Recovery</li>
          <li className="sm:text-[18px] text-[15px]">
            Protect your valuable data with automated backups and disaster
            recovery solutions. Brandax ensures your website and business
            information remain safe and can be quickly restored whenever needed.
          </li>
          <li className="text-2xl font-bold text-center sm:text-start">SSL & Website Security</li>
          <li className="sm:text-[18px] text-[15px]">
            Keep your website protected with advanced SSL certificates and
            security solutions from Brandax. We help safeguard your data, build
            customer trust, and ensure a secure browsing experience for your
            visitors.
          </li>
        </ul>
      </div>
      <FAQ/>
      <Schedule/>
      <Footer/>
    </div>
  );
}

export default Webhosting;
