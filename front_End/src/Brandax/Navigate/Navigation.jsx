import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CompanyLogo from "../Photo/Brandax_Logo.png";
import { CgClose } from "react-icons/cg";
import { IoIosArrowBack } from "react-icons/io";
import animation from "../animation/6ac0c17e-1152-11ee-a821-83824ddc0ded.gif";
import { HiMiniBars3 } from "react-icons/hi2";

function Navigation() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [isTop, setIsTop] = useState(true);

  const menuItems = [
    {
      title: "Digital Marketing",
      items: [
        { name: "Social Media Marketing", path: "/Socialmedia" },
        { name: "Content Marketing", path: "/ContentMarketing" },
        { name: "Email Marketing", path: "/EmailMarketing" },
        { name: "Online Advertising", path: "/OnlineAdvertising" },
        { name: "Google Ads", path: "/GoogleAds" },
        { name: "Influencer Marketing", path: "/InfluencerMarketing" },
        { name: "Online Reputation", path: "/OnlineReputation" },
        { name: "Video Marketing", path: "/VideoMarketing" },
      ],
    },
    {
      title: "Web Development",
      items: [
        {
          name: "Custom Application Development",
          path: "/custom-application",
        },
        { name: "Web Design Service", path: "/web-design" },
        { name: "Web Hosting", path: "/web-hosting" },
        { name: "ECommerce Solutions", path: "/ecommerce" },
      ],
    },
    {
      title: "Branding",
      path: "/branding",
    },
    {
      title: "About",
      path: "/about",
    },
  ];

  const handleEnter = (index) => {
    if (timeoutId) clearTimeout(timeoutId);
    setActiveMenu(index);
  };

  const handleLeave = () => {
    const id = setTimeout(() => {
      setActiveMenu(null);
    }, 200);

    setTimeoutId(id);
  };

  const handleMobileMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  const handleActive = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300  ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div
        className={`w-full h-20 absolute items-center px-5 sm:hidden ${
          isTop ? "flex" : "hidden"
        }`}
      >
        <HiMiniBars3
          className="text-2xl text-[#397ABF] cursor-pointer"
          onClick={handleActive}
        />
      </div>

      <div
        className={`fixed top-0 left-0 w-75 shadow-lg h-screen bg-white z-50
  transition-all duration-300 ease-in-out
  ${
    isMobileMenuOpen
      ? "translate-x-0 scale-100 opacity-100"
      : "-translate-x-full scale-95 opacity-0"
  }`}
      >
        <div className="shadow rounded-full w-70 px-3 h-20 flex flex-row-reverse items-center justify-between ">
          <CgClose className="text-2xl cursor-pointer" onClick={handleActive} />
          <a href="/">
            <img src={CompanyLogo} alt="Brandax" className="h-15 ml-2" />
          </a>
        </div>

        <ul className="mt-5 text-[15px] font-bold">
          {menuItems.map((menu, index) => (
            <li key={index} className="border-b border-[#397ABF]">
              <div className="flex justify-between items-center py-4 px-4">
                <span
                  className="cursor-pointer"
                  onClick={() => menu.path && navigate(menu.path)}
                >
                  <li onClick={() => handleMobileMenu(index)}>{menu.title}</li>
                </span>
                {menu.items && (
                  <IoIosArrowBack
                    className={`cursor-pointer transition-all duration-500 ${
                      openMenu === index ? "-rotate-90" : "rotate-0"
                    }`}
                    onClick={() => handleMobileMenu(index)}
                  />
                )}
              </div>

              {openMenu === index && menu.items && (
                <ul className="">
                  {menu.items.map((item, i) => (
                    <li
                      key={i}
                      className="px-8 py-3 text-sm font-normal cursor-pointer transition-all 
                      duration-500 hover:bg-[#397ABF] hover:text-white"
                      onClick={() => {
                        navigate(item.path);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="">
          <img
            src={animation}
            alt="Loading..."
            className="w-full mt-5 opacity-70 h-full"
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto sm:flex hidden justify-between items-center h-25 ">
        {/* Logo */}
        <img
          src={CompanyLogo}
          alt="Brandax"
          className="h-20 cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* Menu */}
        <ul className="flex gap-12 font-semibold">
          {menuItems.map((menu, index) => (
            <li
              key={index}
              className="relative"
              onMouseEnter={() => handleEnter(index)}
              onMouseLeave={handleLeave}
            >
              <button
                className="hover:text-[#397ABF] transition-all duration-300"
                onClick={() => menu.path && navigate(menu.path)}
              >
                {menu.title}
              </button>

              {menu.items && activeMenu === index && (
                <div className="absolute top-10 left-0 w-64 bg-white/90 rounded-xl shadow-lg overflow-hidden">
                  {menu.items.map((item, i) => (
                    <div
                      key={i}
                      className="px-4 py-3 border-b cursor-pointer font-light hover:bg-[#397ABF] hover:text-white transition-all"
                      onClick={() => navigate(item.path)}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
