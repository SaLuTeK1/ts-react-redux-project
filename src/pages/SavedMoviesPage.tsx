import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../hooks";
import {moviesActions} from "../store";
import {SavedMoviesList} from "../components/MoviesContainer/SavedMoviesList/SavedMoviesList";
import {useNavigate} from "react-router-dom";

const SavedMoviesPage = () => {
    const {ids} = useAppSelector(state => state.movies);
    const {theme} = useAppSelector(state => state.switch);
    const dispatch = useAppDispatch();
    const favId = localStorage.getItem('favoriteMovies');
    const navigate = useNavigate();


    useEffect(() => {
        if (favId) {
            const modifiedString = favId.slice(1, favId.length - 1);
            const stringId = modifiedString.split(',');
            dispatch(moviesActions.setIds(stringId))
        }
    }, [favId,dispatch]);
    
    return (
            <div className={'wrap'}>
                <button className={`my-button button-${theme}`} onClick={()=>navigate(-1)}>Back</button>
                <div className={'movies-box'}>
                    {ids.length===0?<h3>Your list is empty</h3>:ids.map(id=><SavedMoviesList key={id} id={+id}/>)}
                </div>
            </div>
    );
};

export {SavedMoviesPage};