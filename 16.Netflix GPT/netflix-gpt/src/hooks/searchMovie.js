import { API_OPTIONS } from "../utils/constants";
import { addGPTMovies } from "../utils/gptSlice";
import { appStore } from "../utils/appStore";
// import { client } from "../utils/openai";

/* Function to search the TMDB for movies through APIs */
const searchMovieTMDB = async (movie) => {
    const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
        API_OPTIONS);

    const json = await data.json();
    return (json.results);
}

export const searchMovie = async () => {

    /* Cannot use the dispatch function in the async function 
     * so we are using the apStore.dispatch 
     */
    const dispatch = appStore.dispatch;

    /* GPT APIs are dumb so give a good request to get a good response */
    /* GPT APIs not purchased so not using the query */
    // const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query: " + { query } + ". only give the names of 5 movies, comma seperated like the example result given ahead. Example Result: Saiyaara, Gadar, Sholey, Don, Golmaal, Koi mil gaya";

    /* Call the OpenAI API's to get the movie results */
    /* The API returns a promise so we keep await before it */
    /* GPT APIs not purchased so not making the API Call */
    // const gptResults = await client.chat.completions.create({
    //     model: 'gpt-4o',
    //     messages: [
    //         { role: 'system', content: 'Talk like a pirate.' },
    //         { role: 'user', content: gptQuery },
    //     ],
    // });
    // console.log(gptResults.choices[0].message.content);


    // if (!gptResults.choices) {
    //   //TODO: Write Error Handling
    // }

    // const gptResults = {
    //   id: "chatcmpl-abc123",
    //   object: "chat.completion",
    //   created: 1721450000,
    //   model: "gpt-4o",
    //   choices: [
    //     {
    //       index: 0,
    //       message: {
    //         role: "assistant",
    //         content: "Chupke Chupke, Angoor, Golmaal, Padosan, Jaane Bhi Do Yaaro"
    //       },
    //       finish_reason: "stop"
    //     }
    //   ],
    //   usage: {
    //     prompt_tokens: 45,
    //     completion_tokens: 12,
    //     total_tokens: 57
    //   }
    // };

    const gptResults = {
        id: "chatcmpl-fake123",
        object: "chat.completion",
        created: 1721459100,
        model: "gpt-4o",
        choices: [
            {
                index: 0,
                message: {
                    role: "assistant",
                    content: "Raaz, 1920, Haunted 3D, Krishna Cottage, Ek Thi Daayan"
                },
                finish_reason: "stop"
            }
        ],
        usage: {
            prompt_tokens: 47,
            completion_tokens: 12,
            total_tokens: 59
        }
    };

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
