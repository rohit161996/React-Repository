import MovieCard from "./MovieCard"

const MovieList = ({ title, movies }) => {
    console.log(movies);

    if (!movies) return;

    return (
        <div className="p-4">
            <h2 className="text-4xl py-6">{title}</h2>
            <div className="flex overflow-x-scroll">
                <div className="flex">
                    {movies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            posterPath={movie.poster_path} />
                    ))}
                </div>
                {/* <MovieCard posterPath={movies[0].poster_path} /> */}
            </div>

        </div>
    );
}

export default MovieList;