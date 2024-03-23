import { useAppSelector} from "../../../hooks";
import {MovieListCard} from "../MovieListCard";



const MoviesList = () => {

    const {movies} = useAppSelector(state => state.movies);

    return (
        <div className={'movies-box'}>
            {movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesList};