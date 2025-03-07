

export default function Loading() {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50">
            <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white mx-auto"></div>
                <p className="mt-4 text-white">Loading, please wait...</p>
            </div>
        </div>
    );
}