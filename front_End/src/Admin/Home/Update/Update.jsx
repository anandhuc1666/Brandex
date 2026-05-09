import React from 'react'
import { MdCancel } from "react-icons/md";

function Update() {
  return (
    <div className='w-160 h-130 rounded-2xl  bg-white/30 backdrop-blur-sm p-3 border absolute bottom-20 right-20'>
        <div className="w-full flex justify-end"><MdCancel className='text-2xl text-red-400 hover:text-red-600 cursor-pointer'/></div>
        <p className='text-center text-2xl'>Update Booking</p>
        <p className='text-center text-[12px] text-[#222222]'>Edit the details below</p>
        <div className="text-[12px]">
            <p>Booking I'D: 1535683165</p>
        </div>
       <div className="w-full h-auto flex gap-10 mt-5 text-black">
         <div className="w-full h-auto flex flex-col gap-12 mt-5">
           <input type="text" placeholder='customer name' className='border-b border-gray-300 px-1 focus:outline-none'/>
           <input type="text" placeholder='Owner ship' className='border-b border-gray-300 px-1 focus:outline-none'/>
           <input type="text" placeholder='customer number' className='border-b border-gray-300 px-1 focus:outline-none'/>
           <select name="position" id="position" className='border-b border-gray-300 px-1 focus:outline-none placeholder:pro'>
            <option value="" className='bg-gray-500 text-center text-2xl'>Select The Position</option>
             <option value="complete" className='text-green-500 bg-green-100 text-center'>Complete</option>
             <option value="pending" className='text-red-500 bg-red-100 text-center'>Pending</option>
             <option value="progress" className='text-yellow-500 bg-yellow-100 text-center'>Progress</option>
           </select>
          </div>
          <div className="w-full h-auto flex flex-col gap-12 mt-5">
           <input type="text" placeholder='Product' className='border-b border-gray-300 px-1 focus:outline-none'/>
           <input type="text" placeholder='customer Place' className='border-b border-gray-300 px-1 focus:outline-none'/>
           <input type="text" placeholder='Price' className='border-b border-gray-300 px-1 focus:outline-none'/>
          </div>
        </div>
        <button className='bg-blue-500 text-white mt-12 px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none'>Update</button>
    </div>
  )
}

export default Update