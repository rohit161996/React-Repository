import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    // Dispatch the Action 
    const dispatch = useDispatch();

    // Creating the fetch function to fetch the movies data
    const getNowPlayingMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/now_playing",
            API_OPTIONS
        );
        const json = await data.json();
        // console.log(json.results);
        // Send the data to the store
        dispatch(addNowPlayingMovies(json.results));
    }

    // Calling the fetch function once using the useEffect Hook
    useEffect(() => {
        getNowPlayingMovies();
    }, []);
}

export default useNowPlayingMovies;