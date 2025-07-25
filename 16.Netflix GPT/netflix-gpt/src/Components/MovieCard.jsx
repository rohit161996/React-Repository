import { IMAGE_URL } from "../utils/constants";

const MovieCard = ({posterPath}) => {

    if(!posterPath) return null;

    return (
        <div className="w-48 pr-4">
            <img
                src={IMAGE_URL + posterPath}
                alt="MovieCard" />
        </div>
    )
}

export default MovieCard;
