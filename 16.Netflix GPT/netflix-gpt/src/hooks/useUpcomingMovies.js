import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useUpcomingMovies = () => {

    const dispatch = useDispatch();

    /* 
     * MEMOIZATION :-
     * Subscribe to the store to fetch the nowPlayingMovies
     * make the API call in the useEffect() whenever nowPlayingMovies is null 
     */
    const searchUpcomingMovies = useSelector(store => store.movies.upcomingMovies);    

    const getPopularMovies = async () =>{
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
    }

    useEffect(()=>{
       if(!searchUpcomingMovies){
            getPopularMovies();
       }
    }, []);
}

export default useUpcomingMovies;