import React, { useState } from "react";
function FAQ() {
      const [active, setActive] = useState(null);

  const handleToggle = (id) => {
    setActive(active === id ? null : id);
  };
  return (
    <div className="w-full bg-white py-15 px-3 flex flex-col items-center gap-7">
      <h1 className="text-4xl font-bold">FAQ's</h1>
      <p>Some awesome words from awesome people</p>

      <div className="max-w-7xl w-full flex flex-col lg:flex-row sm:gap-10 gap-20">

        {/* FAQ Section */}
        <div className="flex flex-col gap-7 flex-1">

          {/* FAQ 1 */}
          <div
            className={`overflow-hidden border-b text-start p-3 flex flex-col gap-3 transition-all duration-300 ${
              active === 1 ? "max-h-40" : "max-h-10"
            }`}
          >
            <p
              className="font-bold cursor-pointer"
              onClick={() => handleToggle(1)}
            >
              What Is Online Advertising?
            </p>

            <p className="text-[#397ABF] font-light">
              Expand your brand's reach and connect with the right audience
              through strategic online advertising. Brandax delivers customized
              digital campaigns designed to increase visibility, drive
              engagement, and achieve measurable business growth.
            </p>
          </div>

          {/* FAQ 2 */}
          <div
            className={`overflow-hidden border-b text-start p-3 flex flex-col gap-3 transition-all duration-300 ${
              active === 2 ? "max-h-40" : "max-h-10"
            }`}
          >
            <p
              className="font-bold cursor-pointer"
              onClick={() => handleToggle(2)}
            >
              What Are The Types Of Online Advertising?
            </p>

            <p className="text-[#397ABF] font-light">
              The main types of online advertising include Search Engine
              Advertising, Social Media Advertising, Display Advertising,
              Video Advertising, Remarketing, and Local Advertising.
            </p>
          </div>

          {/* FAQ 3 */}
          <div
            className={`overflow-hidden border-b text-start p-3 flex flex-col gap-3 transition-all duration-300 ${
              active === 3 ? "max-h-32" : "max-h-10"
            }`}
          >
            <p
              className="font-bold cursor-pointer"
              onClick={() => handleToggle(3)}
            >
              Why Online Advertising Is Essential in the Modern Era?
            </p>

            <p className="text-[#397ABF] font-light">
              Online advertising is vital for modern businesses, helping brands
              expand their reach, attract potential customers, and stay
              competitive.
            </p>
          </div>

          {/* FAQ 4 */}
          <div
            className={`overflow-hidden border-b text-start p-3 flex flex-col gap-3 transition-all duration-300 ${
              active === 4 ? "max-h-40" : "max-h-10"
            }`}
          >
            <p
              className="font-bold cursor-pointer"
              onClick={() => handleToggle(4)}
            >
              Why Online Advertising Has Become a Popular Marketing Method?
            </p>

            <p className="text-[#397ABF] font-light">
              Online advertising has become a popular marketing method because
              it enables businesses to reach the right audience, increase brand
              visibility, and achieve measurable results in a cost-effective
              manner.
            </p>
          </div>

        </div>

        {/* Image Section */}
        <div className="flex flex-col items-center gap-5 lg:w-[400px] w-full">
          <img
            src="https://media.istockphoto.com/id/522805842/photo/do-you-suit-this-position.jpg?s=612x612&w=0&k=20&c=fZI58dzv_oaCR02jm1Y7vmA6Sl5-imNgyP4dPg6kOTc="
            alt=""
            className="w-full max-w-[400px] rounded-[5px] object-cover shadow"
          />

          <button className="px-6 py-3 bg-[#397ABF] text-white rounded-full hover:bg-[#2a5a8c] shadow-lg transition">
            Schedule Appointment Today
          </button>
        </div>

      </div>
    </div>
  )
}

export default FAQ