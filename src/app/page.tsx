"use client"

import { BsLinkedin } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";



export default function Home() {

  const OpenEmail = () => {
    window.location.href = "mailto:arifcsidhik@gmail.com";
  };

  const OpenGithub = () => {
    window.open("https://github.com/mohammedarif98", "_blank");
  };

  const OpenLinkedIn = () => {
    window.open("https://www.linkedin.com/in/mohammed-arif-b5293225a/", "_blank");
  };

  const OpenWhatsApp = () => {
    const phoneNumber = "917012157539"; 
    const message = "Hi Arif, I came across your portfolio and wanted to connect."; 
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };


  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-center items-center min-h-[850px] p-4">
      {/* ---------------- Left Section ---------------- */}
      <div className="space-y-2 md:mr-8 text-center md:text-left">
        <p className="font-bold bellefair-regular text-[16px] md:text-[18px] lg:text-[20px] first-letter:text-red-800 first-letter:font-bold first-letter:text-3xl">
          I&apos;m a Full-Stack Developer, Passionate about building scalable,<br /> accessible, and user-friendly applications.
        </p>
        <hr className="my-2" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-2">
          <div className="flex gap-2 text-2xl items-center">
            <p className="bellefair-regular text-[16px] md:text-[18px]">Let&apos;s Connect : </p>
            <BsLinkedin onClick={ OpenLinkedIn } className="text-blue-900 hover:text-blue-700 cursor-pointer hover:scale-110 transition-transform duration-300" />
            <FaWhatsappSquare onClick={ OpenWhatsApp } className="text-green-500 hover:text-green-700 cursor-pointer hover:scale-110 transition-transform duration-300" />
            <SiGmail onClick={ OpenEmail } className="text-orange-700 hover:text-orange-500 cursor-pointer hover:scale-110 transition-transform duration-300" />
            <FaSquareGithub onClick={ OpenGithub } className="text-black hover:text-gray-700 cursor-pointer hover:scale-110 transition-transform duration-300" />
          </div>
          <div>
            <a href="/pdf/MohammedArif_Full-Stack.pdf" download="Mohammed_Arif_Resume.pdf">
              <button className="bg-black text-white px-2 py-1 text-[14px] cursor-pointer md:text-[16px] border-1 border-white rounded-sm hover:bg-gray-800 hover:text-white hover:shadow-lg transition-all duration-300">
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* ----------------- Middle Section (Profile Image) -------------------- */}
      <div className="my-8 md:my-0 rounded-full border-2 border-dotted border-black p-2">
        <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 overflow-hidden rounded-full">
          <img
            src="/images/profile-image.jpg"
            alt="profile-image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* -------------------- Right Section -------------------- */}
      <div className="space-y-2 md:ml-8 text-center md:text-left">
        <p className="font-paytone text-2xl sm:text-3xl lg:text-5xl text-red-800">Mohammed Arif</p>
        <hr className="my-2" />
      </div>
    </div>
  );
}