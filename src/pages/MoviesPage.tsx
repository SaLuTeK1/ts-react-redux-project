import {MoviesList, MyPagination} from "../components";
import {useAppDispatch, useAppSelector} from "../hooks";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {moviesActions} from "../store";


const MoviesPage = () => {
    const {movies, total_pages} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    const [query,] = useSearchParams({page: '1'});
    const page = query.get('page')

    useEffect(() => {
        dispatch(moviesActions.getAll({page}))
    }, [dispatch, page]);

    return (
        <div className={'wrap'}>
            <MoviesList/>
            {movies.length ? <MyPagination total_pages={total_pages}/> : <h1>Loading...</h1>}
        </div>
    );
};

export {MoviesPage};