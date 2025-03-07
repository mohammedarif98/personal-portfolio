import '@/styles/about.css';

export default function About() {
    return (
        <div className="container mx-auto p-4 sm:p-8">
            {/* <div className="flex justify-center"> */}
                {/* <p className="text-3xl font-semibold text-black underline underline-offset-4">About</p> */}
            {/* </div> */}

            <div className="m-4">
                <p className="text-2xl text-red-700 font-semibold mb-4 underline underline-offset-4">About Me</p>
                <div className="px-2">
                    <p className="text-justify leading-normal hyphens-auto sm:text-[14px] md:text-[16px] lg:text-[17px]">
                        <span className="text-black font-bold italic">I am a self-taught Full-Stack Developer</span> with a strong proficiency in the MERN (MongoDB, Express.js, React.js, Node.js) stack. My journey in software development has been driven by a passion for problem-solving, innovation, and continuous learning. I excel at debugging complex issues and crafting efficient, scalable solutions that meet user needs. Through hands-on experience with personal projects and a commitment to independent learning, I have developed a deep understanding of modern web development practices and technologies. My adaptability and proactive approach enable me to thrive in dynamic environments, and I am always eager to take on new challenges to expand my skill set and deliver impactful results.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-[#ebebeb] shadow-sm mx-2 mt-4">
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">Name:</span>
                        <span>Mohammed Arif</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">Age:</span>
                        <span>26</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">Contact:</span>
                        <span>+91 7012157539</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">Degree:</span>
                        <span>Bachelor's (BSc Electronics)</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">City:</span>
                        <span>Ernakulam, Kerala, India</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">Country:</span>
                        <span>India</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">Experience:</span>
                        <span>1+ years</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">Email:</span>
                        <span className="text-red-800 hover:underline">
                            <a href="mailto:arifcsidhik@gmail.com">arifcsidhik@gmail.com</a>
                        </span>
                    </div>
                </div>
            </div>

            <div className="m-4">
                <p className="text-2xl text-red-700 font-semibold mb-4 underline underline-offset-4">Skills</p>
                <div className="overflow-hidden px-2 space-y-12">
                    {/* -------------- First Row of Skills Icons ------------------ */}
                    <div className="flex animate-scroll">
                        {[
                            { src: "/images/skills-icons/js.png", text: "JavaScript" },
                            { src: "/images/skills-icons/typescript.png", text: "TypeScript" },
                            { src: "/images/skills-icons/python.png", text: "Python" },
                            { src: "/images/skills-icons/html-5.png", text: "HTML5" },
                            { src: "/images/skills-icons/css-3.png", text: "CSS3" },
                            { src: "/images/skills-icons/bootstrap.png", text: "Bootstrap" },
                            { src: "/images/skills-icons/tailwind-css-icon.png", text: "Tailwind CSS" },
                            { src: "/images/skills-icons/nodejs.png", text: "Node.js" },
                            { src: "/images/skills-icons/express-js-icon.png", text: "Express.js" },
                        ].map((item, index) => (
                            <div key={index} className="flex items-center sm:mx-2 md:mx-4 lg:mx-6">
                                <img src={item.src} className="h-12 w-12" alt="skill" />
                                <p className="ml-2 text-sm font-semibold">{item.text}</p>
                            </div>
                        ))}
                        {/* ----------------- Duplicate the icons for seamless looping ------------------ */}
                        {[
                            { src: "/images/skills-icons/js.png", text: "JavaScript" },
                            { src: "/images/skills-icons/typescript.png", text: "TypeScript" },
                            { src: "/images/skills-icons/python.png", text: "Python" },
                            { src: "/images/skills-icons/html-5.png", text: "HTML5" },
                            { src: "/images/skills-icons/css-3.png", text: "CSS3" },
                            { src: "/images/skills-icons/bootstrap.png", text: "Bootstrap" },
                            { src: "/images/skills-icons/tailwind-css-icon.png", text: "Tailwind CSS" },
                            { src: "/images/skills-icons/nodejs.png", text: "Node.js" },
                            { src: "/images/skills-icons/express-js-icon.png", text: "Express.js" },
                        ].map((item, index) => (
                            <div key={`dup-${index}`} className="flex items-center sm:mx-2 md:mx-4 lg:mx-6">
                                <img src={item.src} className="h-12 w-12" alt="skill" />
                                <p className="ml-2 text-sm font-semibold">{item.text}</p>
                            </div>
                        ))}
                    </div>

                    {/* -------------------- Second Row of Skills Icons --------------------- */}
                    <div className="flex animate-scroll-reverse">
                        {[
                            { src: "/images/skills-icons/mongodb-icon.png", text: "MongoDB" },
                            { src: "/images/skills-icons/react-js-icon.png", text: "React.js" },
                            { src: "/images/skills-icons/nextjs-icon.png", text: "Next.js" },
                            { src: "/images/skills-icons/django-icon.png", text: "Django" },
                            { src: "/images/skills-icons/ds.png", text: "Data Structures" },
                            { src: "/images/skills-icons/mongoose.png", text: "Mongoose" },
                            { src: "/images/skills-icons/jwt.png", text: "JWT" },
                            { src: "/images/skills-icons/mysql.png", text: "MySQL" },
                            { src: "/images/skills-icons/postgresql.png", text: "PostgreSQL" },
                            { src: "/images/skills-icons/postman-icon.png", text: "Postman" },
                        ].map((item, index) => (
                            <div key={index} className="flex items-center sm:mx-2 md:mx-4 lg:mx-6">
                                <img src={item.src} className="h-12 w-12" alt="skill" />
                                <p className="ml-2 text-sm font-semibold">{item.text}</p>
                            </div>
                        ))}
                        {/* ----------------- Duplicate the icons for seamless looping ------------------ */}
                        {[
                            { src: "/images/skills-icons/mongodb-icon.png", text: "MongoDB" },
                            { src: "/images/skills-icons/react-js-icon.png", text: "React.js" },
                            { src: "/images/skills-icons/nextjs-icon.png", text: "Next.js" },
                            { src: "/images/skills-icons/django-icon.png", text: "Django" },
                            { src: "/images/skills-icons/ds.png", text: "Data Structures" },
                            { src: "/images/skills-icons/mongoose.png", text: "Mongoose" },
                            { src: "/images/skills-icons/jwt.png", text: "JWT" },
                            { src: "/images/skills-icons/mysql.png", text: "MySQL" },
                            { src: "/images/skills-icons/postgresql.png", text: "PostgreSQL" },
                            { src: "/images/skills-icons/postman-icon.png", text: "Postman" },
                            
                        ].map((item, index) => (
                            <div key={`dup-${index}`} className="flex items-center sm:mx-2 md:mx-4 lg:mx-6">
                                <img src={item.src} className="h-12 w-12" alt="skill" />
                                <p className="ml-2 text-sm font-semibold">{item.text}</p>
                            </div>
                        ))}
                    </div>

                    {/* -------------------- Third Row of Skills Icons --------------------- */}
                    <div className="flex animate-scroll">
                        {[
                            { src: "/images/skills-icons/redux-icon.png", text: "Redux" },
                            { src: "/images/skills-icons/rest-api.png", text: "REST API" },
                            { src: "/images/skills-icons/aws.png", text: "AWS" },
                            { src: "/images/skills-icons/nginx.png", text: "NGINX" },
                            { src: "/images/skills-icons/cloudinary.png", text: "Cloudinary" },
                            { src: "/images/skills-icons/social.png", text: "Git" },
                            { src: "/images/skills-icons/github.png", text: "GitHub" },
                            { src: "/images/skills-icons/socket.io.png", text: "Socket.IO" },
                            { src: "/images/skills-icons/google-firebase-icon.png", text: "Firebase" },
                        ].map((item, index) => (
                            <div key={index} className="flex items-center sm:mx-2 md:mx-4 lg:mx-6">
                                <img src={item.src} className="h-12 w-12" alt="skill" />
                                <p className="ml-2 text-sm font-semibold">{item.text}</p>
                            </div>
                        ))}
                        {/* ----------------- Duplicate the icons for seamless looping ------------------ */}
                        {[
                            { src: "/images/skills-icons/redux-icon.png", text: "Redux" },
                            { src: "/images/skills-icons/rest-api.png", text: "REST API" },
                            { src: "/images/skills-icons/aws.png", text: "AWS" },
                            { src: "/images/skills-icons/nginx.png", text: "NGINX" },
                            { src: "/images/skills-icons/cloudinary.png", text: "Cloudinary" },
                            { src: "/images/skills-icons/social.png", text: "Git" },
                            { src: "/images/skills-icons/github.png", text: "GitHub" },
                            { src: "/images/skills-icons/socket.io.png", text: "Socket.IO" },
                            { src: "/images/skills-icons/google-firebase-icon.png", text: "Firebase" },
                        ].map((item, index) => (
                            <div key={`dup-${index}`} className="flex items-center sm:mx-2 md:mx-4 lg:mx-6">
                                <img src={item.src} className="h-12 w-12" alt="skill" />
                                <p className="ml-2 text-sm font-semibold">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}