import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

export const useMovieTrailer = (movieId) => {

    // const [trailerId, setTrailerId] = useState(null);

    const dispatch = useDispatch();

    const trailerVideo = useSelector(store => store.movies.trailerVideo);

    /* API Call to Get the Trailer Video of the Movie */
    const getMovieVideos = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/" +
            movieId +
            "/videos?language=en-US",
            API_OPTIONS
        );
        const json = await data.json();

        const filterData = json.results.filter((video) => video.type === "Trailer");

        /* We will take the first video if there is no movie with a trailer */
        const trailer = filterData.length ? filterData[0] : json.results[0];
        // console.log(trailer);

        // setTrailerId(trailer);
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(() => {
       if (!trailerVideo) {
            getMovieVideos();
       }
    }, []);

};