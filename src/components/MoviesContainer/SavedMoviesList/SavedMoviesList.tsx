import {FC, useEffect} from 'react';

import {MovieListCard} from '../MovieListCard';
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {moviesActions} from "../../../store";
import css from './SavedMoviesList.module.css'
interface IProps {
    id: number
}

const SavedMoviesList: FC<IProps> = ({id}) => {
    const dispatch = useAppDispatch();
    const movieDetails = useAppSelector((state) => state.movies.saved[id]);
    
    useEffect(() => {
        dispatch(moviesActions.getById({id}));
    }, [dispatch, id]);
    const Saved = `${css.SavedMovie} saved`
    return (
        <div className={Saved}>
            {movieDetails && <MovieListCard key={movieDetails.id} movie={movieDetails}/>}
        </div>
    );
};

export {SavedMoviesList};