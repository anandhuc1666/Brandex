import React, { useState } from "react";
import Company_Logo_Brandax from "../Photo/Brandax_Logo.png";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const handleOne = () => {
    setOne(true);
    setTwo(false);
    setThree(false);
    setFour(false);
  };
  const handleTwo = () => {
    setOne(false);
    setTwo(true);
    setThree(false);
    setFour(false);
  };
  const handleThree = () => {
    setOne(false);
    setTwo(false);
    setThree(true);
    setFour(false);
  };
  const handleFour = () => {
    setOne(false);
    setTwo(false);
    setThree(false);
    setFour(true);
  };
  // ............................................................under box section.....................................................
  const navigate = useNavigate()
  const [type1, setType1] = useState(false);
  const [type2, setType2] = useState(false);
  const [type3, setType3] = useState(false);
  const [type4, setType4] = useState(false);
  const [type5, setType5] = useState(false);
  const [type6, setType6] = useState(false);
  const [type7, setType7] = useState(false);
  const [type8, setType8] = useState(false);
  const handleType1 = () => {
    setOne(false);
    navigate("/Socialmedia")
    setType1(true);
    setType2(false);
    setType3(false);
    setType4(false);
    setType5(false);
    setType6(false);
    setType7(false);
    setType8(false);
  };
    const handleType2 = () => {
      setOne(false);
      navigate("/ContentMarketing")
    setType1(false);
    setType2(true);
    setType3(false);
    setType4(false);
    setType5(false);
    setType6(false);
    setType7(false);
    setType8(false);
  };
    const handleType3 = () => {
      setOne(false);
      navigate("/EmailMarketing")
    setType1(false);
    setType2(false);
    setType3(true);
    setType4(false);
    setType5(false);
    setType6(false);
    setType7(false);
    setType8(false);
  };
    const handleType4 = () => {
      setOne(false);
       navigate("/OnlineAdvertising")
    setType1(false);
    setType2(false);
    setType3(false);
    setType4(true);
    setType5(false);
    setType6(false);
    setType7(false);
    setType8(false);
  };
    const handleType5 = () => {
      setOne(false);
      navigate("/GoogleAds")
    setType1(false);
    setType2(false);
    setType3(false);
    setType4(false);
    setType5(true);
    setType6(false);
    setType7(false);
    setType8(false);
  };
    const handleType6 = () => {
      setOne(false);
      navigate("/InfluencerMarketing")
    setType1(false);
    setType2(false);
    setType3(false);
    setType4(false);
    setType5(false);
    setType6(true);
    setType7(false);
    setType8(false);
  };
    const handleType7 = () => {
      setOne(false);
      navigate("/OnlineReputation")
    setType1(false);
    setType2(false);
    setType3(false);
    setType4(false);
    setType5(false);
    setType6(false);
    setType7(true);
    setType8(false);
  };
    const handleType8 = () => {
      setOne(false);
      navigate("/VideoMarketing")
    setType1(false);
    setType2(false);
    setType3(false);
    setType4(false);
    setType5(false);
    setType6(false);
    setType7(false);
    setType8(true);
  };

  return (
    <div className="w-full mx-auto flex bg-[#397ABF]/70 backdrop-blur-sm items-center justify-between px-5 fixed z-10">
     <a href="/"><img src={Company_Logo_Brandax} alt="Brandax" className="h-20" id="#"/></a> 
      <ul className="flex gap-15 font-Nunito mr-30 text-[18px]">
        <div className="relative m-auto flex items-start justify-center">
          <li
            className={`hover:text-[#397ABF] font-bold ${one === true ? "text-[#397ABF]" : "text-white"}`}
            onMouseEnter={handleOne}
          >
            Digital Marketing
          </li>
          {one && (
            <div className="w-50 h-auto top-10 bg-white flex flex-col items-center absolute rounded-[10px] text-black py-3">
              <div
                className={`w-full text-[15px] flex items-start justify-start pl-3 py-3 border-b hover:text-[#397ABF] ${type1 && "text-[#397ABF] font-bold"}`}
                onClick={handleType1}
              >
                <li>Social Media Marketing</li>
              </div>
              <div
                className={`w-full text-[15px] flex items-start justify-start pl-3 py-3 border-b hover:text-[#397ABF] ${type2 && "text-[#397ABF] font-bold"}`}
                onClick={handleType2}
              >
                <li>Content Marketing</li>
              </div>
              <div
                className={`w-full text-[15px] flex items-start justify-start pl-3 py-3 border-b hover:text-[#397ABF] ${type3 && "text-[#397ABF] font-bold"}`}
                onClick={handleType3}
              >
                <li>Email Marketing</li>
              </div>

              <div
                className={`w-full text-[15px] flex items-start justify-start pl-3 py-3 border-b hover:text-[#397ABF] ${type4 && "text-[#397ABF] font-bold"}`}
                onClick={handleType4}
              >
                <li>Online Advertising</li>
              </div>

              <div
                className={`w-full text-[15px] flex items-start justify-start pl-3 py-3 border-b hover:text-[#397ABF] ${type5 && "text-[#397ABF] font-bold"}`}
                onClick={handleType5}
              >
                <li>Google Ads</li>
              </div>

              <div
                className={`w-full text-[15px] flex items-start justify-start pl-3 py-3 border-b hover:text-[#397ABF] ${type6 && "text-[#397ABF] font-bold"}`}
                onClick={handleType6}
              >
                <li>Influencer Marketing</li>
              </div>

              <div
                className={`w-full text-[15px] flex items-start justify-start pl-3 py-3 border-b hover:text-[#397ABF] ${type7 && "text-[#397ABF] font-bold"}`}
                onClick={handleType7}
              >
                <li>Online Reputation</li>
              </div>

              <div
                className={`w-full text-[15px] flex items-start justify-start pl-3 py-3 border-b hover:text-[#397ABF] ${type8 && "text-[#397ABF] font-bold"}`}
                onClick={handleType8}
              >
                <li>Video Marketing</li>
              </div>
            </div>
          )}
        </div>
        <div className="relative m-auto flex items-start justify-center">
          <li
            className={`hover:text-[#397ABF] font-bold ${two === true ? "text-[#397ABF]" : "text-white"}`}
            onMouseEnter={handleTwo}
          >
            Web Development
          </li>
          {two && (
            <div className="w-70 h-auto top-10 bg-white flex flex-col items-center absolute rounded-[10px] text-black py-3">
              <div
                className={`w-full text-[15px] flex items-start justify-start pl-3 py-3 border-b hover:text-[#397ABF] hover:font-bold`}
              >
                <li>Custom Application Development</li>
              </div>
              <div
                className={`w-full text-[15px] flex items-start justify-start pl-3 py-3 border-b hover:text-[#397ABF] hover:font-bold`}
              >
                <li>Web Design Service</li>
              </div>
              <div
                className={`w-full text-[15px] flex items-start justify-start pl-3 py-3 border-b hover:text-[#397ABF] hover:font-bold`}
              >
                <li>Web Hosting</li>
              </div>
              <div
                className={`w-full text-[15px] flex items-start justify-start pl-3 py-3 border-b hover:text-[#397ABF] hover:font-bold`}
              >
                <li>ECommerce Solutions</li>
              </div>
            </div>
          )}
        </div>

        <div className="relative m-auto flex items-start justify-center">
          <li
            className={`hover:text-[#397ABF] font-bold ${three === true ? "text-[#397ABF]" : "text-white"}`}
            onMouseEnter={handleThree}
          >
            Branding
          </li>
        </div>

        <div className="relative m-auto flex items-start justify-center">
          <li
            className={`hover:text-[#397ABF] font-bold ${four === true ? "text-[#397ABF]" : "text-white"}`}
            onMouseEnter={handleFour}
          >
            About
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Navigation;
