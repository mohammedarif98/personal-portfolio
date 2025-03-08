"use client"

import { BsLinkedin } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export default function Footer() {

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
    
    return(
        <div className="mx-auto sm:p-8 bg-red-100 p-4 space-y-2 ">
            <p className="text-[16px] md:text-[18px] lg:text-[24px] font-bold text-black text-center">Mohammed Arif </p>
            <div className="flex gap-2 text-2xl justify-center items-center">
                <BsLinkedin onClick={ OpenLinkedIn } className="text-blue-900 hover:text-blue-700 cursor-pointer hover:scale-110 transition-transform duration-300" />
                <FaWhatsappSquare onClick={ OpenWhatsApp } className="text-green-500 hover:text-green-700 cursor-pointer hover:scale-110 transition-transform duration-300" />
                <SiGmail onClick={ OpenEmail } className="text-orange-700 hover:text-orange-500 cursor-pointer hover:scale-110 transition-transform duration-300" />
                <FaSquareGithub onClick={ OpenGithub } className="text-black hover:text-gray-700 cursor-pointer hover:scale-110 transition-transform duration-300" />
            </div>
        </div>
    )
}