import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaServer } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineDeveloperMode } from "react-icons/md";
import Browser_Bot_Image from "../../Photo/BrowserDrawing.svg";
import Schedule from "../Appoiment/Schedule";
import Footer from "../../Footers/Footer";
import FAQ from "../FAQ/FAQ";

function CustomApplication() {
  const list_array = [
    {
      image: <FaServer />,
      tittle: "Web Hosting",
      discription:
        "Empower your online presence with secure and reliable web hosting solutions, featuring advanced security, firewall protection, and high-performance infrastructure to keep your website fast, safe, and always accessible.",
    },
    {
      image: <CgWebsite />,
      tittle: "Web Development",
      discription:
        "We design and develop custom websites that blend creativity, innovation, and modern aesthetics to create engaging digital experiences and give your business a competitive edge.",
    },
    {
      image: <MdOutlineDeveloperMode />,
      tittle: "Mobile App Development",
      discription:
        "Looking for a trusted mobile app development partner? You're in the right place. We create powerful, tailor-made mobile applications that enhance user experiences, strengthen your brand, and unlock new opportunities for business growth.",
    },
  ];
  const list_special = [
    {
      title: "Requirement Gathering",
      discription:
        "We begin by understanding your business objectives, challenges, and specific requirements. Through detailed discussions and analysis, we gather the necessary insights to define the project scope and create a solid foundation for a successful solution.",
    },
    {
      title: "Sitemap Definition",
      discription:
        "We create a well structured sitemap that outlines the architecture and navigation of your application or website, ensuring an intuitive user experience and a clear roadmap for efficient development.",
    },
    {
      title: "UI Design",
      discription:
        "Our UI/UX design team leverages industry leading tools like Figma to transform the sitemap into intuitive and visually engaging interfaces. Starting with the home page, including the header and footer, we meticulously design each subsequent page, ensuring that every feature requirement is translated into a seamless and user friendly experience across the entire web application.",
    },
    {
      title: "Data Entry",
      discription:
        "Whether you have existing records in spreadsheets, databases, or offline documents, our team can seamlessly migrate and integrate your data into your new web application. From automated imports to manual data entry, we ensure accurate and efficient data transfer, enabling a smooth transition to your digital platform.",
    },
  ];
  return (
    <div className="w-full h-auto bg-[#F0F0F3] text-black font-Nunito sm:pt-30 pt-10 flex flex-col justify-center gap-5">
      <div className="w-full h-auto flex sm:flex-row flex-col items-center justify-evenly sm:gap-0 gap-10 p-6">
        <ul className="flex flex-col gap-3">
          <li className="sm:text-5xl text-3xl  sm:leading-15 font-medium">
            Custom Application <br />
            <span className="font-bold text-[#397ABF]">Development</span>
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
                Custom Application
              </span>{" "}
            </a>
          </li>
        </ul>
        <img
          src="https://media.istockphoto.com/id/2257726850/photo/female-programmer-developing-web-software-on-computer.jpg?s=612x612&w=0&k=20&c=DYCpHiEVUe4_U9NNWOjnXCCXU5bKmKmHGl7Yw3GCQGI="
          alt=""
          className="sm:h-[400px] object-cover rounded-[15px] border border-white shadow"
        />
      </div>
      <div className="w-full h-auto flex items-center sm:flex-row sm:px-30 p-6 flex-col justify-between list-none sm:gap-10 gap-5">
        <li className="max-w-[800px] sm:text-[18px] text-[15px] text-justify">
          Social media is a genie that can be tamed for our marketing success.
          Brandax is the leading social media marketing agency in Malappuram,
          Kerala which uses innovative & creative strategies to generate leads
          and build brands for our clients. Our 2+ years of proven expertise can
          your business achieve your business goals in no time.
        </li>
        <Link to={"/Booking"}>
          <button className="px-6 py-3 bg-[#397ABF] text-white rounded-full text-[15px] hover:bg-[#2a5a8c] shadow-lg cursor-pointer border">
            Schedule Appointment Today
          </button>
        </Link>
      </div>
      <div className="w-full h-auto flex sm:flex-row flex-col items-center justify-between gap-40 sm:px-30">
        <div className="sm:w-130 w-60 h-50  bg-[#397ABF]/60 border border-[#ffff] rounded-[10px] relative z-10 text-white">
          <div className="sm:w-130 w-60 h-auto bg-[#397ABF] top-10 left-10 absolute border border-[#ffff] rounded-[10px] p-5 flex flex-col gap-5 shadow">
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
        <div className="sm:w-160 sm:h-120 h-auto p-5 font-Arimo flex flex-col gap-10 overflow-y-auto scrollbar-hide">
          {list_array.map((item, index) => (
            <div key={index} className="flex flex-col gap-3">
              <ul className="flex gap-3 text-2xl items-center">
                <li className="">{item.image}</li>
                <li>{item.tittle}</li>
              </ul>
              <p className="text-justify max-w-100">{item.discription}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-auto p-5 flex flex-col gap-10 sm:px-30">
        <div className="flex flex-col gap-5">
          <h1 className="sm:text-3xl text-2xl font-medium max-w-150">
            Our Proven Process for Custom Web Application Development
          </h1>
          <p className="sm:text-[18px] text-[15px] sm:max-w-250 text-justify">
            At Brandax, we follow a process-driven and agile approach to
            software development, ensuring flexibility, efficiency, and high
            quality results. Developing complex software and web applications
            requires more than technical expertise it demands proven experience
            and a deep understanding of diverse business needs. With our
            commitment to innovation and excellence, we deliver scalable,
            reliable, and customized solutions that empower businesses to
            achieve their goals.
          </p>
        </div>
        <div className="w-full grid sm:grid-cols-2 grid-cols-1 sm:gap-y-20 gap-5">
          {list_special.map((item, index) => (
            <div key={index} className="max-w-150 text-justify">
              <div className="flex flex-col gap-3">
                {" "}
                <h1 className="text-2xl font-extrabold text-center sm:text-start">{item.title}</h1>
                <p className="sm:text-[15px] text-[13px]">{item.discription}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center sm:gap-25 gap-5 text-justify sm:flex-row flex-col">
          <img src={Browser_Bot_Image} alt="" className="sm:w-130 w-70" />
          <ul>
            <li className="sm:text-3xl text-2xl font-extrabold">Our Commitment</li>
            <li className="sm:text-[18px] text-[15px]">
              Our commitment is to create world-class web applications that
              consistently surpass your expectations, delivering exceptional
              performance, innovation, and user experience.
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full text-justify sm:flex flex-col gap-10 sm:p-10 p-5">
        <div className="flex items-center justify-center sm:gap-30 gap-10 flex-col sm:flex-row py-10">
          <ul className="max-w-160 flex flex-col gap-5">
            <li className="text-2xl font-extrabold sm:text-start text-center">Bug-Free Software</li>
            <li className="text-[15px]">
              We are committed to delivering high-quality, bug-free software. If
              you encounter any issues after deployment, our team will promptly
              resolve them at no additional cost, ensuring a seamless experience
              for your business.
            </li>
            <br />
            <li className="text-2xl font-extrabold sm:text-start text-center">Latest Technologies</li>
            <li className="text-[15px]">
              We leverage cutting-edge technologies to build robust and scalable
              solutions for our clients. Our expertise includes modern
              technology stacks such as Python, React, Next.js, and Mysql,
              Nonsql enabling us to deliver advanced software capabilities and
              exceptional performance.
            </li>
          </ul>
          <img
            src="https://media.istockphoto.com/id/2222587923/photo/ai-coding-assistant-for-software-development-concept-machine-learning-code-programmer-use.jpg?s=612x612&w=0&k=20&c=MIBb9OUC84UwHQIsTLdbb-40oszdFle2iQLFkoR-0mE="
            alt=""
            className="w-120 rounded-[5px] border border-white"
          />
        </div>
        <div className="flex items-center justify-center sm:gap-30 gap-10 flex-col-reverse sm:flex-row">
          <img
            src="https://media.istockphoto.com/id/2210688897/photo/ux-ui-design-web-and-application-user-design-concepts-web-design-application-design-user.jpg?s=612x612&w=0&k=20&c=xGqukPJMP8lexSPr9mFW9_mZXgksPNd2p9MGBY5UjHw="
            alt=""
            className="w-120 rounded-[5px] border border-white"
          />
          <ul className="max-w-160 flex flex-col gap-5">
            <li className="text-2xl font-extrabold sm:text-start text-center">Lifetime Support</li>
            <li className="text-[15px]">
              Tired of working with agencies that disappear after a few years?
              We believe in building long-term relationships with our clients.
              With a strong commitment to continuity and growth, we strive to
              provide reliable support for years to come.
            </li>
            <br />
            <li className="text-2xl font-extrabold sm:text-start text-center">Full-Stack Team</li>
            <li className="text-[15px]">
              Our experienced software development team includes UI/UX
              designers, front-end developers, software engineers, QA and
              testing specialists, business analysts, project managers, and
              database administrators. Together, we ensure every project is
              executed with precision and excellence.
            </li>
          </ul>
        </div>
        <div className="w-full items-center flex sm:px-30 text-start p-5">
          <ul className="flex flex-col gap-5 max-w-160 text-justify">
            <li className="text-2xl font-extrabold">Agile Development</li>
            <li className="text-[15px]">
              We follow agile software development methodologies to ensure
              structured processes, transparency, and timely delivery. Our
              leadership team comprises experienced software architects with
              backgrounds in multinational and international companies, bringing
              global expertise to every project.
            </li>
          </ul>
        </div>
      </div>
      <FAQ />
      <Schedule />
      <Footer />
    </div>
  );
}

export default CustomApplication;
