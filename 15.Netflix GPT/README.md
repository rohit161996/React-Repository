## Bug fix of redirection if not logged in :-
- We can access the Browse Page even if we have not logged in as user.
- http://localhost:5173/browse
- It is a bug which we need to resolve.
- We need to get the authentication every time the page loads, <Body/> of the Page is not loading 
  every time, sometimes <Body/> Component Loads, sometimes the <Login/> Component loads.
- We can use navigate() after the onAuthStateChanged() in the <Body/> Component but it is not allowed
  because the Parent Component is not allowed to navigate only children component under the Routing can navigate.
- We will place the onAuthStateChanged() in the <Header/> Component.
- We will write the navigate() only in the OnAuthStateChanged(), so it will be able to navigate only to different states.
- We do not need to do the routing from anywhere else other than the onAuthStateChanged()

## Unsubscribing of the User
- The onAuthStateChange() is an event listener which keeps the track of the User.
- Whenever the user "Login" or the user "Logout" this event listener keeps the track of it.
- Whenever the user Logout we have to unsubscribe to this also.
- We return function when we unmount the Component in the useEffect() and we can unsubscribe the event from the return.
- onAuthStateChange() returns the unsubscribe(), so when we call this unsubscribe() it will remove the User from our browser.
- When our <Header/> Component unloads it will unsubscribe to this component onAuthStateChange().
- Do not use the Hardcoded URL in the File use **utils/constants** directory.

## Constants 
- constants.js file is created which has all the constant string which have been used in the Project.
- The constants are imported in the Components from this file.

## Getting the Movie Data:-
- TMDB - The Movie DataBase.
- Login to the TMDB Database.
- Create the App on the TMDB Page.
- https://developer.themoviedb.org/docs/getting-started
- https://developer.themoviedb.org/reference/intro/getting-started
- MOVIE LISTS -> Now Playing (It is a GET API)

## NOTE:-
- We will always have to pass the API Options when we make an API call i.e. fetch the data from the API.
- In the utils/constants.js
```js
export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxN2E0YmYxZjc0NzMxN2IyYTU2MTUzMjc1ODQ4MzM3MyIsIm5iZiI6MTc1MzExNTMxMi4wMTMsInN1YiI6IjY4N2U2YWFmMDIxM2E0ZjczNTM4ZGQxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kr2xriHkN5GbkNKLY0eA3mo0volIvdOpFRrNbLfydDI'
    }
};
```

- We will make the API call from the Browse Page.
- We can use like the following:-
```js
fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));
```

or
```js
const getNowPlayingMovies = async () => {
  const data = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing",
    API_OPTIONS
  );
  const json = await data.json();
  console.log(json);
}
```

- This function to fetch the data from the API will be called from the useEffect because it will be called only once.
- To call this once we will be using the empty square brackets.

- Now the API call is made 2 times because of the Strict Mode.
- If we remove the Strict Mode the API Will be called only once.
- It is called 2 times because React does extra rendering of the components.
- It only happens in development mode to check the inconsistency in the rendering cycle.

## Adding a slice to add movies data to it:-
- Create a slice file for the movies - utils/moviesSlice.js
- Create a slice using the createSlice method from the @reduxjs/toolkit
- Inside the slice add the name of the slice.
- Add the initial state.
- Add reducers and export the actions and the reducers.

## Dispatching the action in the Browse Component:-
- Using the useDispatch() Hook we have to dispatch the action of the store and move the data fetched from the API to the store.
- Now create a custom Hook to seperate the fetch data functionality from the <Browse/> Component.
  - Fetching will be done through the custom Hook.
  - Displaying of the data will be done from the <Browser/> Component.

- Create the customHook in the hooks/useNowPlayingMovies.js
- Use the custom hook in the Browse.jsx

## Browse Component Building:-
1. Main Container with <MainContainer/>  <br>
   - Video Playing in the background. <VideoBackground/>
   - Video Title. <VideoTitle/>
2. Secondary Container <SecondaryContainer/> <br>
   - MovieList * n
   - Cards * n

- Now the data in the MainContainer and the SecondaryContainer will come from the Store.
- Data Will come from the Selectors in the <MainContainer/> <SecondaryContainer/>.
- Handled early rendering in the <MainContainer/>

## VideoTitle Component Building:-
- Destructure the Object mainMovie in the <MainContainer/> Component and pass them as props.
```js
const {original_title, overview} = mainMovie;
```

## Video Background Building :-
- Now we have to display the movie at the Background.
- The Movie Link or the URL is not present in the API.
- It is present in some other different API.
- In the following API's the movies_id are mapped to the associated movie link
  https://developer.themoviedb.org/reference/movie-videos
- Give the Movie Id -> Click on Try It.
- When we will fetch the API we get a big object, I have stored it in the data.json
- We will get all the associated videos of the movie with their id which can be given to youtube link to watch the video.

## Fetching the data for the Trailer:-
- Using the fetch function with async await type we will be fetching the data.
- This async await will be called inside a function and this function is called in the useEffect() Hook.
- This Hook will be invoked once with the empty dependency array like componentDidMount() in class based Component.

## Get the video trailer element from the results array 
- Filter the trailer element from the results array with the help of the filter function.

## Passing the Trailer Id From the Data Section to the code Section
- Using the State Variable. (Not used since we have the store)
- Using the Store to keep the Trailer.✅

## Store update
- The movieSlice is updated -> initialState, actions and reducers are added for movie trailer.
- The trailer element fetched is stored in the store.

## Displaying the video from the iFrame Tag
- Get the IFrame from the YouTube Video -> Share -> Embed -> Add the Tag in the <VideoBackground />
- This tag is different from the one in the course.
```html
<div className="w-screen h-screen overflow-hidden absolute top-0 left-0 -z-10">
    <iframe
        className="w-[120vw] h-[120vh] scale-125 -translate-y-[5vh]" // <-- NEW!
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&playsinline=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
    ></iframe>
</div>
```

## Mapping the video trailer with the movie id
- We will need movieid in the <VideoBackground movieid={id}/>
- This is Passed as a prop from the <MainContainer/> Component.
- It will be in the youtubelink as mentioned above to play the video.
- Use of constants is very important like in the API_OPTIONS etc.

## Creating custom hooks for fetching the data and keeping the Component only for displaying the data:-
- It is called modular coding or seperation of concerns.
- Every Hook or Component with perform its own tasks.
- It will be very helpful in testing.

## Tailwind CSS added to VideoBackground Component.

## Secondary Component :-
- Now we will build the <SecondaryContainer/>.
- It will have the following Components.
  - MovieList - Popular
    - MovieCards * n
  - MovieList - Now Playing
  - MovieList - Trending
  - MovieList - Horror

- Now we will create two Components to be kept inside the <SecondaryContainer/>.
- <MovieList/> and <MovieCard/> For the List of Movies on the display.
- Pass the {title, movieList} from the <SecondaryContainer/> to the <MovieList {title, movieList}/>

## Find Images to be embedded in the MovieList Component.
- TMDB -> Guides -> Images -> Basics
  https://developer.themoviedb.org/docs/image-basics

- https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg
- https://image.tmdb.org/t/p/w780/q5pXRYTycaeW6dEgsCrd4mYPmxM.jpg
- Place the constant URL in the constants.js file

## 1. Fetching the different categories of the movies on the Browse Page:-
- For the now Playing Movies we are fetching the data from the Custom Hook -> useNowPlayingMovies().
- For the Popular Movies we can fetch the data from the Custom Hook -> usePopularMovies().

## 2. Getting the Movie Data:-
- TMDB - The Movie DataBase.
- Login to the TMDB Database.
- Create the App on the TMDB Page.
- https://developer.themoviedb.org/docs/getting-started
- https://developer.themoviedb.org/reference/intro/getting-started
- MOVIE LISTS -> Popular (It is a GET API)

## 3. Create the Custom Hook:-
- Create a file called the usePopularMovies.js
- Change the fetch function and all the other function calls as well.

## 4. Store Changes:
- In the moviesSlice.js add the initialState of the Popular Movies.
- Add the action and the dispatch function.
- export the action function.

## 5. Subscribing to the Store:-
- To get the items from the store, in the <SecondaryContainer/> call the selector to subscribe to the store.
- Get the data from the store using the dispatch function.

## 6. Call the custom Hook in the Browse Component:-
usePopularMovies();

## Add the Hooks for all the types of the Movies -> 
- Popular
- Top Rated
- Upcoming Movies
- Now Playing








