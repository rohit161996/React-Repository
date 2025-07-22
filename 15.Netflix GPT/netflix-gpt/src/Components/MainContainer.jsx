import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
    const movies = useSelector(store => store.movies.nowPlayingMovies);

    /* Early Rendering 
     * If data is not present 
     * avoids error */
    if(movies === null) return;

    const mainMovie = movies[3];
    // console.log(mainMovie);

    const {original_title, overview, id} = mainMovie;

    return(
        <div>
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movieid={id}/>
        </div>
    );
}

export default MainContainer;