## Building the GPT Search Page
- Add the Button in the <Header/> Component
- Create a GPT Search Component -> <GPTSearchPage/>

## Maintaining the state of the Data Coming from the API's in the Redux Store
- Create a GPT Slice in the utils/gptSlice.js
- We have created a user slice for the User Login and SignUp.
- We have created a movies slice for keeping the movies data.
- We will create a GPT slice for the GPT data.
```js
const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    /* State for Toggling the Button */
    showGPTSearch: false,

    /* State for keeping the gptMovies -> movieNames and movieResults */
    gptMovies: null,

    movieResults: null,
    movieNames: null,
  },
  reducers: {
    toggleGptButton : (state)=>{
      state.showGPTSearch = !state.showGPTSearch;
    },
  }
})

export const {toggleGptButton, addGPTMovies } = gptSlice.actions;

export default gptSlice.reducer;
```


## Update the Store:-
- In the appStore.js import the gptReducer and add it to the Store.
```js
const appStore = configureStore({
  reducer: {
    gpt: gptReducer,
  }
})
```


## Dispatching the Toggle Action :-
- Dispatch the action in the <Header/> Component on the button click.
```js
const dispatch = useDispatch();
const handleGPTSearchClick = () => {
  dispatch(toggleGPTSearchView());
}
```

## Use the Button to Render the Component
- Subscribe to the store.
```js
const showGPTSearch = useSelector(store => store.gpt.showGPTSearch);
```

- In the <Browse/> Component use the showGPTSearch variable to change the Component from 
  - <GPTSearchPage/> to 
  - <MainContainer/>
    <SecondaryContainer/>
- In the <Header/> Component use the showGPTSearch to Change the Button's Text.

## Create two components on the GPTSearchPage Component:-
1. GPTSearchBar
2. GPTMovieSuggestions

## Building the GPTSearchPage in multiple languages:-
- Define the SUPPORTED_LANGUAGES object in the `utils/constant.js`
```js
export const SUPPORTED_LANGUAGES = [
    { identifier: "en-US", name: "English" },
    { identifier: "hi-IN", name: "Hindi" },
    { identifier: "fr-FR", name: "French" }
]
```
- Create an options dropdown in the Header component, having the `name` as given in the SUPPORTED_LANGUAGE.

- Use the map to render the name in the <Header/> Component.
```js
SUPPORTED_LANGUAGES.map((language)=>{
  <option
    key = {language.identifier}
    value = {language.name}
  >
  {language.name}
  </option>
})
```

- Make this DropDown visible only when the showGPTSearch is enabled i.e. when the GPTSearchPage is Rendered.
```js
{
  showGPTSearch &&
  <select className="p-2 m-2 rounded-lg bg-gray-900 text-white" onChange={handleLanguageChange}>
    {SUPPORTED_LANGUAGES.map((language) => (
      <option
        key={language.identifier}
        value={language.identifier}>
        {language.name}
      </option>
    ))
    }
  </select>
}
```

- Now to maintain the state of the language create a slice `utils/configSlice.js`
- Store the configuration of the language in it and add the action to change the language.

- Change the features of the <GPTSearchPage/> Component.
- In the <GPTSearchPage/> Component subscribe to the store to change the 
- `onChange = {handleLanguageChange}` of the option in the <Header/> Component should trigger the disptac Language Selection.
```js
const handleLanguageChange = (e) => {
  dispatch(changeLanguage(e.target.value));
}

```
- Change the Text of the element we want to change.

## Building the Search Feature on the Basis of the Open AI:-
- Go to the Page -> https://platform.openai.com/settings/organization/api-keys
- Register for the API Key.
- Place the Key in the constants.
- API's are not free.
- TMDB, Firebase API's are free.
- Keep the API Key as secret.

## Install the Library:-
- There is a library which allows us to make the API Call directly.
- https://www.npmjs.com/package/openai
- It gives the Boiler Plate Code which we can use.
- npm install openai
- The Boiler Plate Code gives us the access to use the OpenAI Key.

## Making the API Call:-
- Create a file utils/openai.js
- It will help us to do the Authentication with the OpenAI.
- Use gpt-3.5-turbo other models are very expensive to use.

## Get the text from the Search Box and Pass it to the APIs
- Using the useRef Hook we get the searchText variable in the <GPTSearchBar/> Component.
- We should not call the API's or the API's with the secret key from the front end.
- We should always call them from the backend, but we can call using the following code.
- Or we can add a tag
  - dangerouslyAllowBrowser: true

## Prevent the Page from refreshing on Clicking the button by writing the following onSubmit in the form tag:-
```html
  <form
    className="w-1/2 bg-black/90 grid grid-cols-12 rounded-2xl"
    onSubmit={(e) => e.preventDefault()}>
```

## Used Tailwind to create a Search Bar

## Get the movies list on the basis of the search query from the GPT using the following Code:-
- Initially write this code in the <GPTSearchBar/> then transfer it to the custom JavaScript Function because 
  we cannot call a customHook inside a function.
```js
  const dispatch = useDispatch();
  const handleGptSearchClick = async () => {
    const query = searchText.current.value;
    console.log(query);

    /* GPT APIs are dumb so give a good request to get a good response */
    const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query: " + { query } + ". only give " +
    "the names of 5 movies, comma seperated like the example result given ahead. Example Result: Saiyaara, Gadar, Sholey, Don, Golmaal, Koi mil gaya";

    /* Call the OpenAI API's to get the movie results */
    /* The API returns a promise so we keep await before it */
    const gptResults = await client.chat.completions.create({
        model: 'gpt-4o',
        messages: [
            { role: 'system', content: 'Talk like a pirate.' },
            { role: 'user', content: gptQuery },
        ],
    });
    console.log(gptResults.choices[0].message.content);

    if (!gptResults.choices) {
      //TODO: Write Error Handling
    }

    /* GPT Movies as an array */
    const gptMovies = gptResults.choices[0].message.content.split(",");

    /* For Each Movie search for TMDB API */
    /* It will return array of Promises */
    const data_promise_array = gptMovies.map(movie => searchMovieTMDB(movie));

    /* Promise.all takes the array of Promise and waits for all the Promises to get resolved */
    const tmdb_Results = await Promise.all(data_promise_array);
    dispatch(addGPTMovies({
        movieNames: gptMovies,
        movieResults: tmdb_Results,
    }));
  }
```

- Then later Move the fetching code to the `hook/searchMovie.js` file
- This code has fetched the data from the GPT Api's and the data has been stored in the store.

## Building the GPTMovie Suggestions UI:-
- Now subscribe to the store in the <GPTMovieSuggestions/> Component.
- Get the data of the state(subscribe) which is stored in the store.
- Get the movieNames, movieResults from the store by subscribing.
- Now **REUSE** the <MovieList/> Component to display the movies from the Result with the help of the map().
- Pass the title prop as the movieNames and the movie prop as the moviesResults.
```js
  movieNames.map((movieName, index) => {
    return (
      < MovieList
        key={movieName}
        title={movieName}
        movies={movieResults[index]}
      />
    );
  })
```

- We have applied a check in the <MovieCard/> Component to show only the movie with the posters i.e.
```js
if(!posterPath) return null;
```

- We are seeing the movies because the movies are persistent in the redux store.
- The data layer is holding the data with it, UI layer is not having the GPT Page.
- But as soon as the GPT Page Loads the Data Layer Displays the data.

## Building the functionality to Hide the Files and the Secret Tokens:-
- Hiding the Key of the OpenAI.
- We are using the openAI key in the utils/openai.js file
- Create a file named .env in the Project Structure.
- In this File paste the key and add the REACT_APP_ in front of the OPENAI_KEY
```js
REACT_APP_API_KEY = "KEY";
REACT_APP_TMDB_KEY = "KEY";

VITE_API_KEY = "KEY";
VITE_TMDB_KEY = "KEY";
```

- Use the key as follows:-
```js
export const API_KEY = process.env.REACT_APP_OPENAI_KEY;
export const API_KEY = import.meta.env.VITE_OPENAI_KEY;
```

- This is not related to React this is related to the basic deployment of the Keys.
- By doing this also our app will not be 100% secure.
- This is really basic.
- Add the file .env to the .gitignore
- Security should be taken care of from the Backend.

## Memoization of the API Call:-
- Reduce the number of API calls when going back and forth in a session.
- We need to stop if the store already has the data loaded in the state variable.
- We need to make changes in the customHooks where the API calls are made.
- Changes will be made in the customHooks like:-
```js
/* 
  * MEMOIZATION :-
  * Subscribe to the store to fetch the nowPlayingMovies
  * make the API call in the useEffect() whenever nowPlayingMovies is null 
  */
const searchNowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);

/* Calling the fetch function once using the useEffect Hook */
useEffect(() => {
    if (!searchNowPlayingMovies) {
        getNowPlayingMovies();
    }
}, []);
```

## OpenAI's Key Suggestions:-
- Give an option below the search page to the users to give their OpenAI Key.
- Giving our OpenAI key will result in generating a hugh bill in production.

## Building the App for the Mobile or Responsive:-
### GPTSearchPage Component
- 