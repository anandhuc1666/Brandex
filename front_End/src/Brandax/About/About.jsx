import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Footer from "../../Brandax/Footers/Footer";

function About() {
  const list_array = [
    {
      image:
        "https://lottie.host/2b4acb20-5a34-4154-a12e-7a6a54c5e9e8/hLYhnNa7dY.lottie",
      title: "Customer Centric Approach",
      discription:
        "We place our clients at the center of everything we do, ensuring that every project is aligned with their goals and expectations.",
    },
    {
      image:
        "https://lottie.host/02b5213c-5ecf-4427-8678-a70e27676d90/jPxBiJftbJ.lottie",
      title: "Innovative Solutions",
      discription:
        "Using the latest technologies and industry best practices, we create scalable and future ready digital solutions.",
    },
    {
      image:
        "https://lottie.host/ade3088c-695e-443e-bda2-333a99e73073/rMoA1tY3sH.lottie",
      title: "Quality & Reliability",
      discription:
        "We are committed to delivering secure, high performing, and user-friendly products that exceed expectations.",
    },
    {
      image:
        "https://lottie.host/fbb09ed9-bd21-4071-bcd3-14d9126f2eca/KMjD0rjY7o.lottie",
      title: "Dedicated Support",
      discription:
        "Our relationship with clients extends beyond project delivery. We provide continuous support and maintenance to ensure long-term success.",
    },
  ];
  return (
    <div className="w-full h-auto bg-[#F0F0F3] text-black font-Nunito sm:pt-30 pt-10 flex flex-col justify-center gap-5">
      <div className="w-full flex sm:flex-row p-5 text-center flex-col items-center justify-center sm:gap-30 gap-10">
        <div className="flex flex-col gap-10">
          <h1 className="sm:text-5xl text-3xl font-bold font-Arimo">Brandax</h1>
          <ul className="flex flex-col gap-5">
            <li className="text-2xl font-bold">
              Transforming Ideas into Digital Success
            </li>
            <li className="max-w-150 text-justify sm:text-[18px] text-[15px] font-light">
              At Brandax, we are passionate about creating innovative digital
              solutions that help businesses establish a strong online presence
              and achieve sustainable growth. We specialize in web design, web
              development, e-commerce solutions, mobile app development, cloud
              hosting, and custom software development, delivering solutions
              tailored to the unique needs of each client. Our mission is to
              combine creativity, technology, and strategic thinking to build
              digital experiences that are visually stunning, highly functional,
              and performance-driven. Whether you're a startup, small business,
              or established enterprise, we are committed to helping you turn
              your vision into reality.
            </li>
          </ul>
        </div>
        <DotLottieReact
          src="https://lottie.host/9e8a7e63-19fe-4996-a3bd-62bad40c9a9c/uMNz7syHgb.lottie"
          loop
          autoplay
          className="w-100"
        />
      </div>
      <div className="w-full flex flex-col gap-5 items-center justify-center p-5">
        <div className="flex sm:flex-row flex-col-reverse gap-10">
          <img
            src="https://media.istockphoto.com/id/2219262594/photo/happy-programmers-listening-to-their-ceo-during-a-meeting-in-the-office.jpg?s=612x612&w=0&k=20&c=2vglOeJiUX5aACDxZRXoFucOt-Hk4fIH1paWX_XjYuk="
            alt=""
            className="w-120 rounded-[5px] border border-white"
          />
          <ul className="max-w-150 text-justify flex flex-col gap-5">
            <li className="text-2xl font-bold">Who We Are</li>
            <li className="text-[18px]">
              Brandax is a team of designers, developers, and digital
              strategists dedicated to delivering exceptional results. We
              believe that every business deserves a powerful digital presence,
              and we work closely with our clients to understand their goals and
              provide solutions that drive success.
            </li>
          </ul>
        </div>
        <div className="flex sm:flex-row flex-col sm:gap-30 gap-10 w-full items-center justify-evenly">
          <ul className="list-disc text-[18px]">
            <h1 className="text-2xl font-bold"> What We Do</h1>
            <br />
            <li>Custom Website Design & Development</li>
            <li>E-Commerce Development</li>
            <li>Mobile App Development</li>
            <li>Custom Software Solutions</li>
            <li>Cloud & Web Hosting Services</li>
            <li>UI/UX Design</li>
            <li>Website Maintenance & Support</li>
            <li>Performance Optimization</li>
          </ul>
          <img
            src="https://media.istockphoto.com/id/2148178472/photo/hispanic-programmers-collaborating-on-software-development-in-a-modern-office-setting.jpg?s=612x612&w=0&k=20&c=zLh00Lt30vgOdyHmcB8LGBuZloVc5iODcj_hDQAzVAs="
            alt=""
            className="w-120 rounded-[5px] border border-white"
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-10 p-5 sm:p-10 items-center font-Arimo">
        <h1 className="text-3xl font-extrabold text-center">
          Why Choose Brandax?
        </h1>
        <div className="flex items-center justify-center">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
            {list_array.map((item, index) => (
              <div
                key={index}
                className="w-full sm:max-w-150  bg-white rounded-[10px] shadow p-4 flex flex-col sm:flex-row items-center sm:items-start gap-5"
              >
                <DotLottieReact
                  src={item.image}
                  loop
                  autoplay
                  className="sm:h-20 h-35 shrink-0"
                />

                <ul className="flex flex-col gap-3 flex-1 text-center sm:text-start">
                  <li className="font-semibold text-[18px]">{item.title}</li>

                  <li className="text-[15px] leading-6 text-gray-700">
                    {item.discription}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-5 p-5 text-center sm:text-start">
        <div className="flex flex-col gap-10 w-full items-center justify-evenly">
          <ul className="flex flex-col gap-5">
            <li className="text-2xl font-bold">Our Vision</li>
            <li className="max-w-160 text-[18px] text-justify">
              To become a trusted digital transformation partner, empowering
              businesses with innovative technology solutions that inspire
              growth and create lasting value.
            </li>
          </ul>
          <DotLottieReact
            src="https://lottie.host/3bccd510-3cf1-46cd-b7ce-f42c4a921710/GrJYwVuLuW.lottie"
            loop
            autoplay
            className="w-70"
          />
        </div>
        <div className="flex gap-10 w-full items-center justify-evenly sm: flex-col-reverse">
          <DotLottieReact
            src="https://lottie.host/58d65575-92a5-49ae-8886-7b9d084a5b20/8Flhsxb10B.lottie"
            loop
            autoplay
            className="w-70"
          />
          <ul className="flex flex-col gap-5">
            <li className="text-2xl font-bold">Our Mission</li>
            <li className="max-w-160 text-[18px] text-justify">
              To deliver world-class digital experiences through creativity,
              innovation, and technical excellence while building long-term
              relationships based on trust, transparency, and customer
              satisfaction.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
