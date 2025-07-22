const VideoTitle = ({ title, overview }) => {
    return (
        <div className="w-screen aspect-video pt-[32%] px-24 absolute text-white">
            <h2 className="font-bold text-4xl">{title}</h2>
            <h3 className="py-6 text-lg w-3/4">{overview}</h3>
            <div className="my-4">
                <button className="bg-white text-black p-4 px-8 mx-2 rounded-lg text-xl cursor-pointer hover:bg-white/80">
                    <i className="ri-play-fill"></i> Play
                </button>
                <button  className="bg-gray-500 mx-2 rounded-lg text-white p-4 px-12 text-xl bg-opacity-50 cursor-pointer hover:bg-gray-500/90">
                    <i className="ri-information-line"></i> More Info
                </button>
            </div>
        </div>
    );
}

export default VideoTitle;
