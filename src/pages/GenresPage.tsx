import {useParams, useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {moviesActions} from "../store";
import {useAppDispatch, useAppSelector} from "../hooks";
import {MoviesList, MyPagination} from "../components";

const GenresPage = () => {
    const dispatch = useAppDispatch();
    const {movies, total_pages} = useAppSelector(state => state.movies);

    const {genreId} = useParams<string>();
    const [query,] = useSearchParams({page: '1'});
    const page = query.get('page')

    useEffect(() => {
        if (genreId) {
            dispatch(moviesActions.getByGenreId({id: +genreId, page}))
        }
    }, [genreId, page, dispatch]);
    
    return (
        <div className={'wrap'}>
            <MoviesList/>
            {movies.length ? <MyPagination total_pages={total_pages}/> : <h1>Loading...</h1>}
        </div>
    );
};

export {GenresPage};