import React, { useState } from "react";
import logo from "../../../../public/Brandax Logo.png";
import { IoMdSettings } from "react-icons/io";

function Nav() {
  const [activeItem, setActiveItem] = useState(false);
  const [activeBooking, setActiveBooking] = useState(false);
  const [activePayment, setActivePayment] = useState(false);
  const [activeCustomers, setActiveCustomers] = useState(false);
  const [activeReviews, setActiveReviews] = useState(false);

  const handlechange_dashboard = () => {
    setActiveItem(!activeItem);
    setActiveBooking(false);
    setActivePayment(false);
    setActiveCustomers(false);
    setActiveReviews(false);
  };
  const handlechange_booking = () => {
    setActiveBooking(!activeBooking);
    setActiveItem(false);
    setActivePayment(false);
    setActiveCustomers(false);
    setActiveReviews(false);
  };
  const handlechange_payment = () => {
    setActivePayment(!activePayment);
    setActiveItem(false);
    setActiveBooking(false);
    setActiveCustomers(false);
    setActiveReviews(false);
  };
  const handlechange_customers = () => {
    setActiveCustomers(!activeCustomers);
    setActiveItem(false);
    setActiveBooking(false);
    setActivePayment(false);
    setActiveReviews(false);
  };
  const handlechange_reviews = () => {
    setActiveReviews(!activeReviews);
    setActiveItem(false);
    setActiveBooking(false);
    setActivePayment(false);
    setActiveCustomers(false);
  };
  return (
    <div className="w-65 h-screen bg-[#202020] text-white flex flex-col  gap-10 justify-between font-Nunito fixed">
      <div className="w-full h-auto flex flex-col py-3">
        <div className="w-full px-5">
          <img src={logo} alt="" className="w-20 rounded-full" />
          <p>Brabdax</p>
        </div>
        <div className="flex flex-col gap-5 mt-10 text-[18px] font-semibold">
          <ul className="flex  flex-col gap-2">
            <div
              className={`${activeItem === true ? "border border-[#397ABF] bg-[#123458]" : `bg-[#4F4F4F]`} w-50 h-15  flex items-center justify-center rounded-tr-[10px] rounded-br-[10px]`}
              onClick={handlechange_dashboard}
            >
              <li>Dashboard</li>
            </div>

            <div
              className={`${activeBooking === true ? "border border-[#397ABF] bg-[#123458]" : `bg-[#4F4F4F]`} w-50 h-15  flex items-center justify-center rounded-tr-[10px] rounded-br-[10px]`}
              onClick={handlechange_booking}
            >
              {" "}
              <li>Booking</li>
            </div>

            <div
              className={`${activePayment === true ? "border border-[#397ABF] bg-[#123458]" : `bg-[#4F4F4F]`} w-50 h-15  flex items-center justify-center rounded-tr-[10px] rounded-br-[10px]`}
              onClick={handlechange_payment}
            >
              {" "}
              <li>Payment</li>
            </div>

            <div
              className={`${activeCustomers === true ? "border border-[#397ABF] bg-[#123458]" : `bg-[#4F4F4F]`} w-50 h-15  flex items-center justify-center rounded-tr-[10px] rounded-br-[10px]`}
              onClick={handlechange_customers}
            >
              <li>Customers</li>
            </div>

            <div
              className={`${activeReviews === true ? "border border-[#397ABF] bg-[#123458]" : `bg-[#4F4F4F]`} w-50 h-15  flex items-center justify-center rounded-tr-[10px] rounded-br-[10px]`}
              onClick={handlechange_reviews}
            >
              {" "}
              <li>Reviews</li>
            </div>
          </ul>
        </div>
      </div>
      <div className="w-full h-75 flex flex-col items-start px-5 justify-end gap-10 py-5">
        <div className="w-15 h-15 bg-white rounded-full"></div>
        <IoMdSettings className="text-3xl ml-3"/>
      </div>
    </div>
  );
}

export default Nav;
