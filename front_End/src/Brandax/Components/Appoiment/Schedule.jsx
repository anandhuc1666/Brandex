import React, { useState } from "react";
import call_employer from "../../Photo/busy-employer.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Schedule() {
  const values_data = {
    name: "",
    company: "",
    phone: "",
    email: "",
    requirement: "",
  };
  const [data, setData] = useState(values_data);
  const SheetURL =
    "https://script.google.com/macros/s/AKfycbzByb78blBRQp4UN6hr1DgpJi5bw2ZGEnggCGwxrovI2TitLpRAcTxuF1Wp5grviWtalA/exec";
 const handlechangeAPO = (e) => {
  const { name, value } = e.target;

  setData((prev) => ({
    ...prev,
    [name]: value,
  }));
};
const HandelePass = async (e) => {
  e.preventDefault();

  const toastId = toast.loading("Submitting appointment...");

  try {
    await fetch(SheetURL, {
      method: "POST",
      body: JSON.stringify(data),
    });

    toast.update(toastId, {
      render: "Appointment submitted successfully!",
      type: "success",
      isLoading: false,
      autoClose: 3000,
    });

    setData(values_data);
  } catch (error) {
    console.error(error);

    toast.update(toastId, {
      render: "Submission failed!",
      type: "error",
      isLoading: false,
      autoClose: 3000,
    });
  }
};
  return (
    <div className="flex flex-col text-white">
      {/* Top Section */}
      <div className="w-full bg-gradient-to-r from-[#397ABF]/60 via-[#397ABF]/60 to-white py-16 px-5 lg:px-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side */}
          <div className="w-full lg:w-1/2 flex flex-col gap-10">
            <div>
              <h1 className="text-3xl font-bold mb-5">Our Commitments</h1>

              <p className="text-base md:text-lg leading-8 max-w-xl">
                Digital world has been our playground since 1998. We have
                evolved into a leading digital marketing company in Kerala by
                diversifying our services over the period. Our professionals
                explore and exploit the digital arena to attain incredible
                results for our clientele.
              </p>
            </div>

            {/* Image Section */}
            <div className="relative w-full max-w-xl h-[320px] sm:h-[400px]">
              <div className="absolute bottom-0 right-0 w-[80%] h-[250px] bg-white rounded-3xl"></div>

              <img
                src={call_employer}
                alt="Employer"
                className="absolute top-0 left-0 w-[90%] h-[280px] sm:h-[350px] object-cover rounded-2xl border border-black shadow-lg"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-2xl bg-white/30 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl p-8">
              <h1 className="text-center text-3xl font-bold text-black mb-8">
                Let’s Build{" "}
                <span className="text-[#397ABF]">Something Great</span>
              </h1>

              <form className="grid md:grid-cols-2 gap-6" onSubmit={HandelePass}>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={data.name}
                  onChange={handlechangeAPO}
                  className="w-full border-b border-gray-400 bg-transparent py-3 outline-none text-black"
                />

                <input
                  type="text"
                  placeholder="Company Name"
                  name="company"
                  value={data.company}
                  onChange={handlechangeAPO}
                  className="w-full border-b border-gray-400 bg-transparent py-3 outline-none text-black"
                />

                <input
                  type="email"
                  placeholder="E-mail Address"
                  name="email"
                  value={data.email}
                  onChange={handlechangeAPO}
                  className="w-full border-b border-gray-400 bg-transparent py-3 outline-none text-black"
                />

                <input
                  type="number"
                  placeholder="Phone Number"
                  name="phone"
                  value={data.phone}
                  onChange={handlechangeAPO}
                  className="w-full border-b border-gray-400 bg-transparent py-3 outline-none text-black"
                />

                <input
                  type="text"
                  placeholder="Requirements"
                  name="requirement"
                  value={data.requirement}
                  onChange={handlechangeAPO}
                  className="md:col-span-2 w-full border-b border-gray-400 bg-transparent py-3 outline-none text-black"
                />

                <button
                  type="submit"
                  className="md:col-span-2 w-full bg-white text-[#397ABF] font-semibold py-3 rounded-full shadow hover:bg-[#397ABF] hover:text-white transition-all duration-300"
                >
                  Submit
                </button>
                
              </form>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      theme="colored"
    />
              <p className="text-center text-black mt-6">
                Share your requirements and our team will contact you shortly.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full bg-[#397ABF]/60 py-16 px-5 md:px-10 lg:px-20">
        <div className="max-w-6xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            About our agency
          </h1>

          <p className="leading-8 text-base md:text-lg mb-10">
            We are a professional Digital Marketing agency based in India,
            specializing in web development and design for enterprises
            worldwide. Our expertise includes visually appealing web designs,
            SEO, paid ads, graphic design, and effective digital marketing
            solutions that improve search engine rankings. Our experienced team
            starts by understanding your business goals and strategies,
            delivering optimal solutions for growth. We prioritize client
            satisfaction through innovative ideas, rigorous testing, and on-time
            delivery.
          </p>

          <button className="px-8 py-4 bg-white text-[#397ABF] rounded-full shadow-lg hover:bg-[#397ABF] hover:text-white border border-white transition-all duration-300">
            Schedule Appointment Today
          </button>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
