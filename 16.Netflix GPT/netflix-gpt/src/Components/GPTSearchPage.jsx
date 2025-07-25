import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { BACKGROUND_IMG } from "../utils/constants";

const GPTSearch = () => {
    return (
        <div>
            {/* Background Image */}
            <div className="absolute -z-10">
                <img
                    className="-z-10 object-cover w-full h-full fixed top-0 left-0"
                    src={BACKGROUND_IMG}
                    alt="background"
                />
            </div>
            <div>
                <GPTSearchBar />
                <GPTMovieSuggestions />
            </div>
        </div>
    );
}

export default GPTSearch;