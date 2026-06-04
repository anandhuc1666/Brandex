import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CompanyLogo from "../Photo/Brandax_Logo.png";

function Navigation() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(null);

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


  const [timeoutId, setTimeoutId] = useState(null);

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

  return (
    <nav className="fixed top-0 left-0 w-full z-50 text-black bg-white/30 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 ">
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
                      className="px-4 py-3 border-b cursor-pointer hover:bg-[#397ABF] hover:text-white transition-all"
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