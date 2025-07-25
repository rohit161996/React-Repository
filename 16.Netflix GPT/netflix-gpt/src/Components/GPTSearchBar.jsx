import { useRef } from 'react';
import lang from '../utils/languageConstants';
import { searchMovie } from '../hooks/searchMovie';
import { useSelector } from 'react-redux';

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang) || "en-US";
  const localizedText = lang[langKey] || lang["en-US"];
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    
    /* This was to be passed to the function searchMovie but we are 
     * not making the query to the GPT APIs.
     */
    const query = searchText.current.value;
    console.log(query);

    /* We are not passing the query to the searchMovie() function */
    searchMovie();
  }

  return (
    <div className="pt-[42%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black/90 grid grid-cols-12 rounded-2xl"
        onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 text-white bg-gray-800 rounded-lg outline-none"
          placeholder={localizedText.gptSearchPlaceHolder}
        />
        <button
          className="m-4 py-2 px-auto bg-red-700 text-white rounded-lg col-span-3 cursor-pointer"
          onClick={handleGptSearchClick}>
          {localizedText.search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;