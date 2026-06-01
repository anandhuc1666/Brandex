import React from "react";
import call_employer from "../../Photo/busy-employer.jpg";

function Schedule() {
  return (
    <div className="flex flex-col items-center justify-center text-white">
      <div className="w-full h-150 bg-linear-to-r from-[#397ABF]/60 via-[#397ABF]/60 to-[#FFFFFF] flex items-center justify-between">
        <div className="w-180 h-150  flex flex-col items-end text-start">
          <div className="flex flex-col gap-10">
            <h1 className="text-start text-2xl font-semibold">
              Our Commitments
            </h1>
            <h5 className="max-w-150">
              Digital world has been our playground since 1998. We have evolved
              into a leading digital marketing company in Kerala by diversifying
              our services over the period. Our professionals explore and
              exploit the digital arena to attain incredible results for our
              clientele.
            </h5>
          </div>
          <div className="relative w-150 h-100  flex items-center">
            <div className="w-120 h-70 bg-white absolute bottom-2 rounded-[32px]"></div>
            <img
              src={call_employer}
              alt=""
              className="h-80 left-7 absolute rounded-[10px] border border-black"
            />
          </div>
        </div>
        <div className="w-180 h-150 relative flex p-3 text-black">
          <div className="w-150 h-100 bg-[#397ABF]/50 border border-black rounded-2xl z-20 absolute top-10 left-10 flex flex-col gap-10 justify-between p-3 items-center">
            {/* ...............................................................user appoiment form............................ */}

            <h1 className="text-black text-2xl font-semibold">
              Let’s Build{" "}
              <span className="text-[#397ABF]">Something Great</span>
            </h1>
            <form action="submit" className="flex gap-10 text-white">
              <div className="flex flex-col gap-5">
                <input
                  type="text"
                  placeholder="Name"
                  className="border-b outline-none focus:outline-none active:outline-none px-2 py-2 w-60"
                />
                <input
                  type="email"
                  placeholder="E-mail Address"
                  className="border-b outline-none focus:outline-none active:outline-none px-2 py-2 w-60"
                />
                <input
                  type="text"
                  placeholder="Requirements"
                  className="border-b outline-none focus:outline-none active:outline-none px-2 py-2 w-60"
                />
              </div>
              <div className="flex flex-col gap-5">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="border-b outline-none focus:outline-none active:outline-none px-2 py-2 w-60"
                />
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="border-b outline-none focus:outline-none active:outline-none px-2 py-2 w-60"
                />
                <button className="w-60 bg-white/60 border text-black border-white h-10 rounded-full shadow cursor-pointer" type="submit">Submit</button>
              </div>
            </form>
            <p>Share your requirements and our team will contact you shortly.</p>
          </div>
          <div className="w-100 h-50 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl bg-white/80"></div>
        </div>
      </div>
      <div className="w-full h-100 bg-[#397ABF]/60 flex flex-col gap-10 pl-30 justify-end p-3">
        <h1 className="text-3xl font-semibold">About our agency</h1>
        <p className="max-w-200">
          We are a professional Digital marketing agency based in India,
          specializing in web development and design for enterprises worldwide.
          Our expertise includes visually appealing web designs, SEO, Paid ads,
          graphic design, effective digital marketing solutions & more to
          improve search engine rankings. Our experienced team starts by
          understanding your business and strategies, delivering optimal
          solutions for growth. We prioritize client satisfaction through
          innovative ideas, rigorous testing, and on-time delivery.
        </p>
        <button className="cursor-pointer px-5 w-80 py-3 bg-white text-[#397ABF] rounded-full shadow hover:bg-[#397ABF]/60 hover:text-white">
          Schedule Appointment Today
        </button>
      </div>
    </div>
  );
}

export default Schedule;
