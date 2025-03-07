

export default function Portfolio() {
    return (
        <div className="container mx-auto p-4 sm:p-8">
            {/* Title */}
            <div className="flex justify-start">
                <p className="text-3xl font-semibold text-red-700 underline underline-offset-4">PortFolio</p>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 p-2">
                <div className="w-full h-auto overflow-hidden shadow-lg">
                    <img
                        src="/images/project-images/Screenshot (25).png"
                        alt="Project 1"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="w-full h-auto overflow-hidden shadow-lg">
                    <img
                        src="/images/project-images/Screenshot (26).png"
                        alt="Project 2"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="w-full h-auto overflow-hidden shadow-lg">
                    <img
                        src="/images/project-images/Screenshot (27).png"
                        alt="Project 3"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}