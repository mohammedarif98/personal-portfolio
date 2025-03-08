import '@/app/loading'
import Image from 'next/image';


export default function Services() {
    
    return (
        <div className="container mx-auto p-4 sm:p-8">
            <div className="flex justify-start">
                <p className="text-3xl font-semibold text-red-700 underline underline-offset-4 mb-8 ">Services</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* ----------- Front-End Development Box --------------- */}
                <div className="relative bg-[#ebebeb] p-6 shadow-md border border-gray-200 overflow-hidden group">
                    <div className="absolute inset-0 bg-pink-700 origin-bottom transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out"></div>
                    <div className="relative z-10">
                        <div className="flex justify-center items-center p-2">
                            <Image src="/images/website.png"
                                alt="frontend-img" height={80} width={80}
                                className="group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300"
                            />
                        </div>
                        <p className="text-xl font-bold text-center mb-4 group-hover:text-white transition-colors duration-300">Front-End Development</p>
                        <p className="text-black text-justify leading-normal hyphens-auto group-hover:text-white transition-colors duration-300">
                            Specializing in creating responsive and user-friendly interfaces using modern technologies like React.js,
                            Next.js, Tailwind CSS, and JavaScript.I focus on delivering seamless user experiences across all devices.
                        </p>
                    </div>
                </div>

                {/* --------------- Back-End Development Box --------------- */}
                <div className="relative bg-[#ebebeb] p-6 shadow-md border border-gray-200 overflow-hidden group">
                    <div className="absolute inset-0 bg-pink-700 origin-bottom transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out"></div>
                    <div className="relative z-10">
                        <div className="flex justify-center items-center p-2">
                            <Image src="/images/backend-coding.png"
                                alt="backend-img" height={80} width={80}
                                className="group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300"
                            />
                        </div>
                        <p className="text-xl font-bold text-center mb-4 group-hover:text-white transition-colors duration-300">Back-End Development</p>
                        <p className="text-black text-justify leading-normal hyphens-auto group-hover:text-white transition-colors duration-300">
                            Building robust and scalable server-side applications using Node.js, Express.js, and MongoDB.
                            I ensure secure and efficient data handling, API integrations, and database management.
                        </p>
                    </div>
                </div>

                {/* --------------- Full-Stack Development Box ------------------- */}
                <div className="relative bg-[#ebebeb] p-6 shadow-md border border-gray-200 overflow-hidden group">
                    <div className="absolute inset-0 bg-pink-700 origin-bottom transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out"></div>
                    <div className="relative z-10">
                        <div className="flex justify-center items-center p-2">
                            <Image src="/images/full-stack.png"
                                alt="fullstack-img" height={80} width={80}
                                className="group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300"
                            />
                        </div>
                        <p className="text-xl font-bold text-center mb-4 group-hover:text-white transition-colors duration-300">Full-Stack Development</p>
                        <p className="text-black text-justify leading-normal hyphens-auto group-hover:text-white transition-colors duration-300">
                            Offering end-to-end web development solutions, combining front-end and back-end expertise to deliver complete,
                            scalable, and high-performance web applications.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}