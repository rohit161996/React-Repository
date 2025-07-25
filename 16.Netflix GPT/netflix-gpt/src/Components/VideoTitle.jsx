const VideoTitle = ({ title, overview }) => {
    return (
        <div className="w-screen aspect-video pt-[32%] px-6 md:px-24 absolute text-white">
            {/* Title */}
            <h2 className="font-bold text-2xl md:text-4xl">
                {title}
            </h2>
            
            {/* Overview */}
            <h3 className="hidden md:inline-block py-6 text-lg w-3/4">
                {overview}
            </h3>

            {/* Buttons */}
            <div className="my-4 md:my-0">
                {/* Play Button */}
                <button className="bg-white text-black py-2 md:py-4 px-4 md:px-6 mx-2 rounded-lg text-xl cursor-pointer hover:bg-white/80">
                    <i className="ri-play-fill"></i> Play
                </button>
                {/* More Info Button */}
                <button className="hidden md:inline-block bg-gray-500 mx-2 rounded-lg text-white p-4 px-12 text-xl bg-opacity-50 cursor-pointer hover:bg-gray-500/90">
                    <i className="ri-information-line"></i> More Info
                </button>
            </div>
        </div>
    );
}

export default VideoTitle;
