import React from "react";
import logo from "../Photo/Brandax_Logo.png";
import {
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-[#F5F5F5] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company Info */}
          <div className="flex flex-col gap-6">
            <img
              src={logo}
              alt="Brandax"
              className="w-36"
            />

            <div>
              <h3 className="text-xl font-bold text-black">
                Built on hard work. Driven by results.
              </h3>

              <p className="text-gray-600 mt-3 text-sm leading-6">
                We help businesses grow through design,
                development, and digital marketing
                solutions.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-[#397ABF] mb-3">
                Contact Info
              </h4>

              <div className="text-gray-600 text-sm space-y-2">
                <p>Kerala, India</p>
                <p>brandaxbrandingstudio@gmail.com</p>
                <p>+91 XXXXX XXXXX</p>
              </div>
            </div>
          </div>

          {/* Digital Marketing */}
          <div>
            <h3 className="text-2xl font-semibold text-black mb-6">
              Digital Marketing Services
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>Social Media Marketing</li>
              <li>Content Marketing</li>
              <li>Email Marketing</li>
              <li>Online Advertising</li>
              <li>Google Ads</li>
              <li>Influencer Marketing</li>
              <li>Online Reputation</li>
              <li>Video Marketing</li>
            </ul>
          </div>

          {/* Development */}
          <div>
            <h3 className="text-2xl font-semibold text-black mb-6">
              Design & Development
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>Custom Application Development</li>
              <li>Web Design Service</li>
              <li>Web Hosting</li>
              <li>ECommerce Solutions</li>
            </ul>
          </div>

          {/* Branding */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-black mb-6">
                Online Branding
              </h3>

              <ul className="space-y-3 text-gray-700">
                <li>Influence Marketing</li>
                <li>Corporate Video Production</li>
                <li>Digital Business Card Maker</li>
                <li>Video Production</li>
                <li>Theatre Advertising</li>
              </ul>
            </div>

            <div className="flex gap-8 mt-10 text-4xl text-black">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="hover:text-[#397ABF] transition" />
              </a>

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp className="hover:text-[#397ABF] transition" />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="hover:text-[#397ABF] transition" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center mt-16 border-t border-gray-300 pt-6">
          <p className="text-gray-500 text-sm">
            © 2026 Brandax. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;