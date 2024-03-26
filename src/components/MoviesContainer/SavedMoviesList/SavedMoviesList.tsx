import {FC, useEffect} from 'react';

import css from './SavedMoviesList.module.css'
import {MovieListCard} from '../MovieListCard';
import {moviesActions} from "../../../store";
import {useAppDispatch, useAppSelector} from "../../../hooks";

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