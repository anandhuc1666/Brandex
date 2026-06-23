import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import FAQ from "../FAQ/FAQ";
import Schedule from "../Appoiment/Schedule";
import Footer from "../../Footers/Footer";

function Webdesign() {
  const list_special = [
    {
      title: "UI/UX Design",
      discription:
        "At Brandax, we create intuitive and engaging user experiences that leave a lasting impression. Our UI/UX design approach focuses on usability, aesthetics, and seamless interactions, ensuring your website not only looks stunning but also delivers exceptional performance across all devices.",
    },
    {
      title: "Website Maintenance & Support",
      discription:
        "A successful website requires continuous care and optimization. Brandax provides reliable maintenance and support services to ensure your website remains secure, up-to-date, and performing at its best. From regular updates to technical assistance, our team is committed to keeping your digital presence running smoothly.",
    },
    {
      title: "Custom Web Development",
      discription:
        "Build a strong online presence with advanced SEO strategies from Brandax. We optimize your website for search engines to improve visibility, attract quality traffic, and help your business reach potential customers effectively. Our goal is to ensure your website ranks higher and delivers measurable results.",
    },
    {
      title: "SEO Optimization",
      discription:
        "Every business is unique, and so are its requirements. Brandax develops custom web solutions tailored to your specific goals. Using modern technologies and scalable architectures, we build secure, high performance websites that support your growth and provide outstanding user experiences.",
    },
  ];
  return (
    <div className="w-full h-auto bg-[#F0F0F3] text-black sm:pt-30 pt-10 flex flex-col justify-center gap-5 font-Arimo">
      <div className="w-full h-auto flex sm:flex-row flex-col items-center justify-evenly sm:gap-0 gap-10 p-6">
        <ul className="flex flex-col gap-3">
          <li className="sm:text-5xl text-3xl  sm:leading-15 font-medium">
            Custom Website Design <br />
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
                Custom Application
              </span>{" "}
            </a>
          </li>
        </ul>
        <img
          src="https://media.istockphoto.com/id/2212360504/photo/holographic-ui-ux-display-icons-of-ux-ui-designer-creative-planning-data-visualization-web.jpg?s=612x612&w=0&k=20&c=djva2dSeRul05un08MwAq6mtJWziQ98K8eEa9y8YBh4="
          alt=""
          className="w-full sm:w-[650px] h-[250px] sm:h-[400px] object-cover rounded-[15px] border border-white shadow"
        />
      </div>
      <div className="w-full h-auto flex flex-col sm:flex-row items-center justify-between list-none px-5 sm:px-30 gap-6">
        <li className="max-w-[800px] sm:text-[18px] text-[15px] text-justify">
          Your website represents your brand and creates the first impression
          for your customers. Make that impression memorable with a beautifully
          crafted website that reflects your reliability, credibility, and
          commitment. Our expert team combines creativity and technology to
          build visually appealing, fully functional, and user-friendly websites
          that help transform visitors into customers.
        </li>
        <Link to={"/Booking"}>
          <button className="px-6 py-3 bg-[#397ABF] text-white rounded-full text-[15px] hover:bg-[#2a5a8c] shadow-lg cursor-pointer border">
            Schedule Appointment Today
          </button>
        </Link>
      </div>
      <div className="w-full max-w-270  h-auto flex flex-col text-justify sm:px-30 p-5 gap-5">
        <h1 className="sm:text-3xl text-2xl font-bold">Web Design Services</h1>
        <p className=" text-justify sm:text-[18px] text-[15px]">
          At Brandax, we believe your website is more than just an online
          presence it's the digital representation of your brand. Our expert
          team creates stunning, responsive, and high-performing websites that
          combine creativity, functionality, and seamless user experiences.
          Whether you're looking to establish a new online presence or elevate
          your existing one, Brandax delivers customized web design solutions
          that help your business attract customers, build credibility, and
          achieve long term digital success.
        </p>
      </div>
      <div className="flex sm:flex-row flex-col justify-center gap-10 p-5">
        <img
          src="https://media.istockphoto.com/id/2171752327/photo/top-view-of-smart-team-using-mind-map-while-putting-hand-together-convocation.jpg?s=612x612&w=0&k=20&c=xh3-ZnSGXcPzpkoRAigfKt769ZfPcwJ-AVulEWTQypM="
          alt=""
          className="rounded-[5px] border border-white"
        />
        <ul className="flex flex-col gap-5">
          <li className="sm:text-3xl text-2xl font-bold">E-Commerce Solutions</li>
          <li className="max-w-[620px] text-justify sm:text-[18px] text-[15px]">
            Accelerate your business growth with powerful e-commerce solutions
            from Brandax. Explore the endless possibilities of digital commerce
            with beautifully designed, highly interactive, and robust online
            stores tailored to your business needs. Our scalable and secure
            e-commerce platforms deliver seamless user experiences, making it
            easy to attract customers, drive sales, and build lasting
            relationships. From intuitive navigation to advanced functionality,
            we create feature-rich e-commerce websites that help your business
            thrive in the competitive online marketplace.
          </li>
        </ul>
      </div>
      <div className="w-full h-auto flex items-center justify-center p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-15">
          {list_special.map((item, index) => (
            <div key={index} className="max-w-150 text-justify">
              <div className="flex flex-col gap-3">
                {" "}
                <h1 className="text-2xl font-extrabold text-center sm:text-start">
                  {item.title}
                </h1>
                <p className="sm:text-[15px] text-[13px]">{item.discription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-auto flex flex-col items-center font-serif py-10 gap-10 sm:px-0 px-5 text-center sm:text-start">
        <h1 className="sm:text-3xl text-2xl font-medium">
          PROCESS<span className="text-[#397ABF] font-extrabold">BEHIND</span>
        </h1>
        <p className="sm:max-w-[730px] max-w-[350px] sm:text-[16px] sm:text-center text-[14px] text-justify font-Arimo">
          At Brandax, we follow a strategic and collaborative approach to ensure
          every project is delivered with excellence. From understanding your
          requirements to launching the final product, our team focuses on
          innovation, quality, and customer satisfaction at every stage.
        </p>
      <div className="grid sm:grid-cols-2 gap-5 mt-10 font-Arimo text-[12px]">
  <div className="w-full sm:max-w-120 min-h-[170px] text-start bg-white rounded-[5px] shadow p-4 flex sm:items-center items-start gap-5">
    <div className="w-20 h-20 shrink-0 bg-[#397ABF] text-white font-bold text-4xl flex items-center justify-center font-Nunito">
      1
    </div>

    <ul className="flex flex-col gap-2">
      <li className="font-bold text-[15px]">
        Discovery & Planning
      </li>
      <li className="text-[13px] leading-6">
        We analyze your business goals, target audience, and project
        requirements to create a clear roadmap for success.
      </li>
    </ul>
  </div>

  <div className="w-full sm:max-w-120 min-h-[170px] text-start bg-white rounded-[5px] shadow p-4 flex sm:items-center items-start gap-5">
    <div className="w-20 h-20 shrink-0 bg-[#F0F0F3] text-[#397ABF] font-bold text-4xl flex items-center justify-center font-Nunito">
      2
    </div>

    <ul className="flex flex-col gap-2">
      <li className="font-bold text-[15px]">
        Design & Prototyping
      </li>
      <li className="text-[13px] leading-6">
        Our creative team designs intuitive and visually appealing interfaces
        that reflect your brand identity and enhance user experiences.
      </li>
    </ul>
  </div>

  <div className="w-full sm:max-w-120 min-h-[170px] text-start bg-white rounded-[5px] shadow p-4 flex sm:items-center items-start gap-5">
    <div className="w-20 h-20 shrink-0 bg-[#F0F0F3] text-[#397ABF] font-bold text-4xl flex items-center justify-center font-Nunito">
      3
    </div>

    <ul className="flex flex-col gap-2">
      <li className="font-bold text-[15px]">
        Development & Testing
      </li>
      <li className="text-[13px] leading-6">
        Using modern technologies and agile methodologies, we build secure,
        scalable, and high-performing solutions while ensuring thorough
        quality testing.
      </li>
    </ul>
  </div>

  <div className="w-full sm:max-w-120 min-h-[170px] text-start bg-white rounded-[5px] shadow p-4 flex sm:items-center items-start gap-5">
    <div className="w-20 h-20 shrink-0 bg-[#397ABF] text-white font-bold text-4xl flex items-center justify-center font-Nunito">
      4
    </div>

    <ul className="flex flex-col gap-2">
      <li className="font-bold text-[15px]">
        Launch & Ongoing Support
      </li>
      <li className="text-[13px] leading-6">
        After a successful launch, we provide continuous maintenance and
        support to keep your digital presence running smoothly and efficiently.
      </li>
    </ul>
  </div>
</div>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 p-5">
        <div className="flex gap-10 items-center sm:flex-row flex-col">
          <ul className="flex flex-col gap-5">
            <li className="text-2xl font-medium">Our Commitments & Guarantee</li>
            <li className="max-w-[620px] text-justify sm:text-[18px] text-[15px] font-light">
              At Brandax, our commitment to excellence is the foundation of
              every website we create. We believe in a collaborative approach
              where your vision becomes our mission. With a strong focus on
              quality, timely delivery, and customer satisfaction, we ensure
              that every website we design not only meets but exceeds your
              expectations. Our goal is to deliver innovative, high-performing,
              and user friendly digital experiences that help your business grow
              and succeed online.
            </li>
          </ul>
          <img
            src="https://media.istockphoto.com/id/2273623896/photo/creative-team-stacking-hands-over-ui-ux-mobile-app-wireframes-on-a-desk-collaboration.jpg?s=612x612&w=0&k=20&c=TxXYKk5whDkimKgR793FOQiE5OTQMXjY5qN410VAhd4="
            alt=""
            className="w-full max-w-120 rounded-[5px] border border-white"
          />
        </div>
        <div className="flex gap-10 flex-col-reverse sm:flex-row">
          <img
            src="https://media.istockphoto.com/id/1262218295/photo/website-designer-creative-planning-phone-app-development-sketch-template-layout-framework.jpg?s=612x612&w=0&k=20&c=_OTrVXVZl2H-iTGNNYEUGMU7KT-yUz98gFOskleQ6mo="
            alt=""
            className="w-full max-w-120 rounded-[5px] border border-white"
          />
          <ul className="max-w-[620px] text-justify sm:text-[18px] text-[15px] flex flex-col gap-5">
            <li className="text-2xl font-medium">Creative UI/UX Design</li>
            <li className="font-light">
              We believe great design begins with understanding your users.
              Through research, wireframing, and creative prototyping, Brandax
              develops seamless digital experiences that combine functionality
              with stunning aesthetics to deliver exceptional results.
            </li>
            <li className="text-2xl font-medium">Designing Experiences That Inspire</li>
            <li className="font-light">
              From wireframes to polished interfaces, Brandax crafts modern,
              intuitive, and visually compelling designs that turn ideas into
              remarkable digital experiences.
            </li>
          </ul>
        </div>
      </div>
      <FAQ/>
      <Schedule/>
      <Footer/>
    </div>
  );
}

export default Webdesign;
