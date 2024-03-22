import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks";
import {MoviesList, MyPagination} from "../components";
import {useEffect} from "react";
import {moviesActions} from "../store";


const SearchPage = () => {
    const {movies, total_pages, total_results} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    const {searchText} = useParams<string>();
    const [query,] = useSearchParams({page: '1'});
    const page = query.get('page')
    const {theme} = useAppSelector(state => state.switch);
    const navigate = useNavigate();


    useEffect(() => {
        dispatch(moviesActions.getByWord({word: searchText, page}))
    }, [dispatch, searchText, page]);


    return (
        <div className={'wrap'}>
            <MoviesList/>
            {movies.length > 0 ? (
                <MyPagination total_pages={total_pages}/>
            ) : (
                total_results === 0 ?
                    <h1>Нічого не знайдено
                        <button className={`my-button button-${theme}`} onClick={() => navigate('/movies')}>Home</button>
                    </h1> :
                    <h1>Loading...</h1>
            )}
        </div>
    );
};

export {SearchPage};