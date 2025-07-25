import { useSelector } from "react-redux";
import { useMovieTrailer } from "../hooks/useMovieTrailer";
const VideoBackground = ({ movieid }) => {

    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

    // console.log("Trailer Video" ,trailerVideo);
    useMovieTrailer(movieid);

    return (
        trailerVideo &&
        (<div className = "w-screen h-screen" >
            <iframe
                className="w-full aspect-video pointer-events-none"
                src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&playsinline=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
            ></iframe>
        </div >)
    );
}

export default VideoBackground;