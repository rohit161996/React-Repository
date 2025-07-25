import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GPTSearch from './GPTSearchPage';
import { useSelector } from 'react-redux';

function Browse() {

  /* Using the boolean value from the Store */
  const showGptSearch = useSelector(store => store.gpt.showGPTSearch);

  /* Calling our custom Hooks to fetch movie data */
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {
        showGptSearch ?
          <GPTSearch /> :
          <div>
            <MainContainer />
            <SecondaryContainer />
          </div>
      }
    </div>
  )
}

export default Browse
