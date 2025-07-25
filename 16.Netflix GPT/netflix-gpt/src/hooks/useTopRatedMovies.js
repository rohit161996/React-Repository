import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
    // Dispatch the Action 
    const dispatch = useDispatch();

    /* 
     * MEMOIZATION :-
     * Subscribe to the store to fetch the nowPlayingMovies
     * make the API call in the useEffect() whenever nowPlayingMovies is null 
     */
    const searchTopRatedMovies = useSelector(store => store.movies.topRatedMovies);

    // Creating the fetch function to fetch the movies data
    const getTopRatedMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
            API_OPTIONS
        );
        const json = await data.json();
        // console.log(json.results);
        // Send the data to the store
        dispatch(addTopRatedMovies(json.results));
    }

    // Calling the fetch function once using the useEffect Hook
    useEffect(() => {
       if(!searchTopRatedMovies){
            getTopRatedMovies();
       }
    }, []);
}

export default useTopRatedMovies;