import React from "react";

function Dash() {
  return (
    <div className="w-full h-auto items-end flex flex-col gap-3 p-5 ">
      <div className="w-[83%] h-[300px] box-border flex gap-3">
        <div className="flex flex-col gap-2.5">
          <div className="w-85 h-35 bg-[#202020] rounded-2xl p-3 flex flex-col gap-5">
            <div className="">
              {" "}
              <p className="text-[25px] font-semibold ml-10">
                Final Tune Model
              </p>
              <p className="text-[12px]">No need to reset this user data</p>
            </div>
            <div className="w-30 h-10 bg-[#07AD44] rounded-full flex items-center justify-center text-[#3CF220]">
              Active
            </div>
          </div>
          <div className="w-85 h-35 bg-[#202020] rounded-2xl p-3 flex flex-col gap-2">
            <div className="flex items-center gap-2.5">
              <div className="w-15 h-15 bg-amber-100 rounded-full"></div>
              <ul className="text-[12px]">
                <li>Arun Krishna</li>
                <li>arun@gmail.com</li>
                <li>+918451926300</li>
              </ul>
            </div>
            <div className="w-60 h-10 bg-[#4F4F4F] text-[20px] font-semibold flex items-center justify-center rounded-full">
              Graphic designer{" "}
            </div>
          </div>
        </div>
        <div className="w-full h-73 bg-[#4F4F4F] rounded-2xl"></div>
      </div>
      <div className="w-[83%] h-[400px] bg-[#202020] rounded-2xl p-4 flex flex-col gap-4">
        {/* HEADER */}
        <div className="grid grid-cols-[60px_200px_1fr_150px_120px_150px] items-center px-4 text-[15px]">
          <div></div>

          <p className="bg-white text-black px-4 py-1 rounded-full text-center">
            Owner
          </p>

          <p className="bg-white text-black px-4 py-1 rounded-full text-center">
            Product
          </p>

          <p className="bg-white text-black px-4 py-1 rounded-full text-center">
            Ownership
          </p>

          <p className="bg-white text-black px-4 py-1 rounded-full text-center">
            Bill
          </p>

          <p className="bg-white text-black px-4 py-1 rounded-full text-center">
            Status
          </p>
        </div>

        {/* BODY */}
        <div className="flex-1 border border-white rounded-2xl p-3 flex flex-col gap-2 overflow-y-auto scrollbar-hide">
          {/* ROW */}
          <div className="grid grid-cols-[60px_200px_1fr_150px_120px_150px] text-[20px] items-center bg-[#4F4F4F] px-4 py-3 rounded-lg gap-2">
            {/* Avatar */}
            <div className="w-12 h-12 bg-amber-100 rounded-full"></div>

            {/* Name */}
            <p className="truncate text-white">Jone vargees</p>

            {/* Product */}
            <p className="text-white">Web design</p>

            {/* Ownership */}
            <span className="bg-white text-black px-1 py-1 rounded-full text-center">
              Varun
            </span>

            {/* Bill */}
            <span className="bg-white text-black px-1 py-1 rounded-full text-center">
              15,000
            </span>

            {/* Status */}
            <span className="bg-green-500 text-white px-1 py-1 rounded-full text-center">
              Completed
            </span>
          </div>
        </div>
      </div>
      <div className="w-[83%] h-auto flex gap-3">
        <div className="w-200 h-auto bg-[#202020] rounded-tl-2xl rounded-tr-2xl flex flex-col gap-3">
          <div className="w-full border-b p-6 gap-2 flex flex-col">
            <p className="text-3xl font-bold">New Work</p>
            <p className="text-[12px]">Update new status of the work post and re post the work also</p>
          </div>
          <div className=" flex gap-3 text-[18px] px-2">
            <div className="flex flex-col w-120  gap-8 mt-10">
              <input type="text" placeholder="Customer Name" className="w-full p-3 border rounded-2xl"/>
              <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-2xl"/>
              <input type="text" placeholder="Customer Number" className="w-full p-3 border rounded-2xl"/>
              <input type="text" placeholder="Product" className="w-full p-3 border rounded-2xl"/>
            </div>
            <div className="flex flex-col w-120 mt-10 gap-8">
              <input type="text" placeholder="Customer Place" className="w-full p-3 border rounded-2xl"/>
              <div className="flex w-full justify-between gap-3">
                <input type="text" placeholder="Day's " className="w-full p-3 border rounded-2xl"/>
                <input type="text" placeholder="Price" className="w-full p-3 border rounded-2xl"/>
              </div>
              <input type="text" placeholder="Sticky Note" className="w-full p-3 border rounded-2xl h-33"/>
            </div>
            
          </div>
          <button className="w-full h-10 bg-[#397ABF]">Add project</button>
        </div>
        <div className="w-full bg-[#202020] h-130 rounded-2xl">

          {/* ....................................Amount & credit points....................... */}
          <div className=" w-full flex items-center h-20 font-extrabold border-b border-white justify-center"><p>Amount & credit points</p></div>
        </div>
      </div>
    </div>
  );
}

export default Dash;
