"use client"

import { FaLink } from "react-icons/fa";


export default function Portfolio() {

    return (
        <div className="container mx-auto p-4 sm:p-8">
            <div className="flex justify-start">
                <p className="text-3xl font-semibold text-red-700 underline underline-offset-4">PortFolio</p>
            </div>

            {/* ----------------- Image Grid ---------------- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 p-2">
                {[
                    { src: "/images/project-images/Screenshot (25).png", title: "Ecommerce Web Application", url: "https://www.essentialstore.live/" },
                    { src: "/images/project-images/Screenshot (26).png", title: "Media Storage Web Application" },
                    { src: "/images/project-images/Screenshot (27).png", title: "Blogging Web Application" }
                ].map((project, index) => (
                    <div key={index} className="relative w-full h-auto overflow-hidden shadow-lg group">
                        <img
                            src={project.src}
                            alt={`Project ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {/* ---------------- Hover Text (Centered with Fixed Size) ---------------- */}
                        <div className="absolute top-1/2 left-1/2 h-24 w-96 flex gap-x-4 justify-center items-center bg-white/90 text-black text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 transform -translate-x-1/2 -translate-y-1/2">
                            <p className="text-lg font-bold capitalize">{project.title}</p>
                            <p><FaLink onClick={()=> window.open( project.url, "_blank" )} className="cursor-pointer" /></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
