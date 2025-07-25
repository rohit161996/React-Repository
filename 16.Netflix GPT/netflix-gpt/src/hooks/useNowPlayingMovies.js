import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    // Dispatch the Action 
    const dispatch = useDispatch();

    /* 
     * MEMOIZATION :-
     * Subscribe to the store to fetch the nowPlayingMovies
     * make the API call in the useEffect() whenever nowPlayingMovies is null 
     */
    const searchNowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);

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

    /* Calling the fetch function once using the useEffect Hook */
    useEffect(() => {
    if (!searchNowPlayingMovies) {
            getNowPlayingMovies();
       }
    }, []);
}


export default useNowPlayingMovies;