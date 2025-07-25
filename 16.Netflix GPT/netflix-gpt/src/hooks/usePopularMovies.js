import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"; 
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
    // Dispatch the Action 
    const dispatch = useDispatch();

    /* 
     * MEMOIZATION :-
     * Subscribe to the store to fetch the nowPlayingMovies
     * make the API call in the useEffect() whenever nowPlayingMovies is null 
     */
    const searchPopularMovies = useSelector(store => store.movies.popularMovies);

    // Creating the fetch function to fetch the movies data
    const getPopularMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
            API_OPTIONS
        );
        const json = await data.json();
        // console.log(json.results);
        // Send the data to the store
        dispatch(addPopularMovies(json.results));
    }

    // Calling the fetch function once using the useEffect Hook
    useEffect(() => {
        if (!searchPopularMovies) {
        getPopularMovies();
        }
    }, []);
}

export default usePopularMovies;