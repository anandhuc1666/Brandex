import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import Schedule from "../Appoiment/Schedule";
import Footer from "../../Footers/Footer";

function Ecommerce() {
  return (
    <div className="w-full h-auto bg-[#F0F0F3] text-black font-Nunito sm:pt-30 pt-10 flex flex-col justify-center gap-5">
      <div className="w-full h-auto flex sm:flex-row flex-col items-center justify-center sm:gap-20 gap-10 p-6">
        <ul className="flex flex-col gap-3">
          <li className="sm:text-5xl text-3xl  sm:leading-15 font-medium">
            E-Commerce
            <br />
            <p>
              Development{" "}
              <span className="font-bold text-[#397ABF]">Services</span>
            </p>
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
          src="https://media.istockphoto.com/id/2269739493/photo/online-shopping-e-commerce-business-growth-concept-businessman-analytics-dashboard-internet.jpg?s=612x612&w=0&k=20&c=juW-Go9v177bvAG31xVYPBlwY1WBhxUObPuem8OJXHw="
          alt=""
          className="sm:h-[400px] object-cover rounded-[15px] border border-white shadow"
        />
      </div>
      <div className="w-full h-auto flex items-center sm:flex-row sm:p-0 p-6 flex-col justify-evenly list-none gap-6">
        <li className="max-w-[720px] sm:text-[18px] text-[15px] text-justify">
          At Brandax, we create secure, scalable, and user-friendly e commerce
          websites that help businesses establish a strong online presence. With
          stunning designs, seamless functionality, and powerful features, we
          deliver online stores that drive growth and enhance customer
          experiences.
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
        <div className="w-full max-w-140">
          <ul className="sm:text-[18px] text-[15px] flex flex-col gap-5">
            <li className="text-2xl font-bold">Mobile App Development</li>
            <li className="text-justify">
              Looking for a reliable mobile app development partner? Brandax
              delivers innovative and user-friendly mobile applications tailored
              to your business needs. Our custom-built Android and iOS solutions
              help enhance customer engagement, streamline operations, and drive
              business growth.
            </li>
            <li className="text-2xl font-bold">Web Development</li>
            <li className="text-justify">
              At Brandax, we design and develop custom websites that seamlessly
              blend creativity, innovation, and functionality. Our responsive
              and high-performing web solutions are crafted to strengthen your
              online presence and provide exceptional user experiences that
              drive results.
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full flex sm:flex-row flex-col p-5 items-center justify-center sm:gap-20 gap-5">
        <div className="max-w-140 text-justify sm:text-[18px] text-[15px]">
          <ul className="flex flex-col gap-5">
            <li className="text-2xl font-bold sm:text-start text-left">
              Custom Application Development
            </li>
            <li>
              Empower your business with software built specifically for your
              requirements. Brandax develops custom applications that automate
              processes, improve efficiency, and simplify operations. From
              enterprise solutions to specialized business tools, we create
              scalable applications that support your long-term growth.
            </li>
            <li className="text-2xl font-bold">Payment Gateway Integration</li>
            <li>
              Provide your customers with a seamless and secure checkout
              experience. Brandax integrates trusted payment gateways to ensure
              fast, reliable, and hassle-free transactions, helping you boost
              conversions and build customer trust.
            </li>
            <li className="text-2xl font-bold">Maintenance & Support</li>
            <li>
              Ensure your digital solutions continue to perform at their best
              with our comprehensive maintenance and support services. Brandax
              provides regular updates, security enhancements, performance
              optimization, and dedicated technical assistance to keep your
              business running smoothly.
            </li>
          </ul>
        </div>
        <div className="max-w-140 text-justify sm:text-[18px] text-[15px] flex sm:flex-col gap-5 flex-col-reverse">
          <ul className="flex flex-col gap-5">
            <li className="text-2xl font-bold">UI/UX Design</li>
            <li>
              Create memorable digital experiences with intuitive and visually
              stunning interfaces. At Brandax, we focus on user-centered design
              principles to deliver engaging, responsive, and aesthetically
              pleasing experiences that strengthen your brand and improve
              customer satisfaction.
            </li>
            <li className="text-2xl font-bold">
              API Development & Integration
            </li>
            <li>
              Enhance the functionality of your applications with robust API
              solutions. Our experts develop and integrate secure APIs that
              enable seamless communication between platforms, streamline
              workflows, and improve overall business efficiency.
            </li>
          </ul>
          <img
            src="https://media.istockphoto.com/id/1224339637/photo/online-shop-website-on-home-office-setup.jpg?s=612x612&w=0&k=20&c=sPmF5_KvgsoR1AYRWXBdAf3qHGAeiGvkHE3_0O4OA3g="
            alt=""
            className="border border-white rounded-[5px]"
          />
        </div>
      </div>
      <Schedule/>
      <Footer/>
    </div>
  );
}

export default Ecommerce;
