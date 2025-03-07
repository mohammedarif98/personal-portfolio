import { AiOutlineMail } from "react-icons/ai";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";



export default function ContactForm() {
    return (
        <div className="container mx-auto p-4 sm:p-8">
            <div className="flex justify-start">
                <p className="text-3xl font-semibold text-red-700 underline underline-offset-4">Contact</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 my-6 p-8">
                {/* -------------- Contact Details ----------------- */}
                <div className="w-full lg:w-1/3 space-y-8">
                    <p className="font-bold sm:text-lg md:text-xl lg:text-2xl">GET IN TOUCH WITH</p>
                    <div className="flex items-center gap-6">
                        <span className="text-2xl p-3 rounded-full bg-red-100 text-red-700">
                            <IoLocationOutline />
                        </span>
                        <div className="">
                            <p className="text-xl font-bold">Address</p>
                            <span className="text-lg">Ernakulam 682040, Kerala, India</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <span className="text-2xl p-3 rounded-full bg-red-100 text-red-700">
                            <IoCallOutline />
                        </span>
                        <div className="">
                            <p className="text-xl font-bold">Contact Us</p>
                            <span className="text-lg">+91 7012157539</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <span className="text-2xl p-3 rounded-full bg-red-100 text-red-700">
                            <AiOutlineMail />
                        </span>
                        <div className="">
                            <p className="text-xl font-bold">Email Us</p>
                            <span className="text-lg">arifcsidhik@gmail.com</span>
                        </div>
                    </div>
                </div>

                {/* ------------------- Contact Form -------------------- */}
                <div className="w-full lg:w-2/3">
                    <form className="space-y-6">
                        {/* Name and Email Fields */}
                        <div className="flex flex-col sm:flex-row gap-6">
                            <div className="w-full sm:w-1/2">
                                <label htmlFor="name" className="block text-md font-normal mb-2">
                                    Name:
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="w-full sm:w-1/2">
                                <label htmlFor="email" className="block text-md font-normal mb-2">
                                    Email:
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500"
                                    placeholder="Your Email"
                                />
                            </div>
                        </div>

                        {/* Subject Field */}
                        <div>
                            <label htmlFor="subject" className="block text-md font-normal mb-2">
                                Subject:
                            </label>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500"
                                placeholder="Subject"
                            />
                        </div>

                        {/* Message Field */}
                        <div>
                            <label htmlFor="message" className="block text-md font-normal mb-2">
                                Message:
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                rows={6}
                                className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500"
                                placeholder="Your Message"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-red-700 text-white py-2 px-4 hover:bg-red-800 transition-colors duration-300"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}