import React, { useEffect, useState } from "react";
import { MdEditSquare } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import Update from "../Update/Update";
import axios from "axios";

function Book() {
    const [dataPass, setDataPass] = useState();
    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get( `${import.meta.env.VITE_API_URL}/api/v1/project/getallprojects`).then((response) => {
        setData(response.data.projects);
    }).catch((error) => {
        console.log(error);
    });
    },[]) 


const PassToUpdate = (data) => {
    setDataPass(data);
}
console.log(data);
  return (
    <div className="w-full bg-black h-screen flex items-center justify-end">
      <div className="w-[83%] h-screen p-3 box-border flex flex-col gap-3">
        <div className="bg-[#202020] w-full h-30 rounded-2xl flex gap-3 items-center px-3">
          <div className="w-25 h-25 rounded-2xl bg-[#4F4F4F] p-3">
            <ul className="flex items-center w-full flex-col gap-3">
              <li>admin</li>
              <li>1</li>
            </ul>
          </div>
          <div className="w-25 h-25 rounded-2xl bg-[#4F4F4F] p-3">
            <ul className="flex items-center w-full flex-col gap-3">
              <li>customers</li>
              <li>5</li>
            </ul>
          </div>
          <div className="w-25 h-25 rounded-2xl bg-[#4F4F4F] p-3">
            <ul className="flex items-center w-full flex-col gap-3">
              <li>bookings</li>
              <li>10</li>
            </ul>
          </div>
          <div className="w-25 h-25 rounded-2xl bg-[#4F4F4F] p-3">
            <ul className="flex items-center w-full flex-col gap-3">
              <li>revenue</li>
              <li>$1000</li>
            </ul>
          </div>
        </div>
        <div className="w-ful h-auto">
          <div className="w-100 h-20 bg-[#202020] rounded-2xl text-center flex flex-col gap-2 px-3">
            <p className="text-white text-2xl font-Nunito border-b">Bookings</p>
            <p className="text-[12px] text-[#4F4F4F]">You are a admin and can only update bookings & update delete customers details</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 relative">
          <div className="w-full h-120 bg-[#202020] rounded-2xl overflow-y-auto scrollbar-hide transform-fill ">
            <div className="w-full h-auto flex flex-col gap-2 p-3">
                { 
                Array.isArray(data) &&
                    data?.map((item,index)=>(
                <div key={index} className="w-full h-30 bg-[#4F4F4F] border-b flex items-center px-3 gap-3 rounded-2xl">
                    <ul className="flex w-full flex-col gap-3">
                        <li className="text-2xl font-bold">Booking 1</li>
                        <li>Customer: {item?.customer_name}</li>
                    </ul>
                     <ul className="flex w-full flex-col gap-3">
                        <li className="text-2xl font-bold">Number</li>
                        <li>{item?.ncustomer_phone}</li>
                    </ul>
                     <ul className="flex w-full flex-col gap-3">
                        <li className="text-2xl font-bold">Product</li>
                        <li>{item?.product}</li>
                    </ul>
                     <ul className="flex w-full flex-col gap-3">
                        <li className="text-2xl font-bold">Status</li>
                        <li className="text-red-500">{item?.position}</li>

                    </ul>
                     <ul className="flex w-full flex-col gap-3">
                        <li className="text-2xl font-bold">Product Price</li>
                        <li>${item?.price}</li>
                    </ul>
                     <ul className="flex w-full flex-col gap-3">
                        <li className="text-2xl font-bold">Owner</li>
                        <li>{item?.user_name}</li>
                    </ul>
                    <div className=" flex items-center gap-3 flex-col">
                        <MdEditSquare className="text-3xl hover:text-blue-400 cursor-pointer" onClick={() => PassToUpdate(item)}/>
                        <MdDeleteForever className="text-3xl hover:text-red-400 cursor-pointer"/>
                    </div>
                </div>
                    ))
                }

            </div>
          </div>
          <div className="w-full h-10 flex items-center justify-center  gap-3">
            <button className="px-5 py-1 rounded-2xl text-white bg-[#4F4F4F]">-</button>
            <p className="p-1 rounded-2xl border">1</p>
            <button className="px-5 py-1 rounded-2xl text-white bg-[#4F4F4F]">+</button>
          </div>
          <Update status={dataPass}/>
        </div>
      </div>
    </div>
  );
}

export default Book;
