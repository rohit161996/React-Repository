import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
    const movies = useSelector(store => store.movies.nowPlayingMovies);

    /* Early Rendering 
     * If data is not present 
     * avoids error */
    if(movies === null) return;

    // const mainMovie = movies[Math.floor(Math.random() * 10)];
    // console.log(mainMovie);
    const mainMovie = movies[0];

    const {original_title, overview, id} = mainMovie;

    return(
        <div className='pt-40 md:pt-0'>
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movieid={id}/>
        </div>
    );
}

export default MainContainer;