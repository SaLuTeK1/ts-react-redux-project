import {useEffect} from "react";
import {useParams} from "react-router-dom";

import {MovieInfo} from "../components";
import {useAppDispatch, useAppSelector} from "../hooks";
import {moviesActions} from "../store";

const MovieInfoPage = () => {
    const dispatch = useAppDispatch();
    const {movieDetails} = useAppSelector(state => state.movies);


    const {id} = useParams<string>();

    useEffect(() => {
        if (id) {
            dispatch(moviesActions.setMovieDetails(null))
            dispatch(moviesActions.setVideoKey([]))
            dispatch(moviesActions.getById({id: +id}))
            dispatch(moviesActions.getVideo({id: +id}))
        }
    }, [dispatch, id]);

    return (
        <div className={'wrap'}>
            {movieDetails ? <MovieInfo/> : <h1>Loading...</h1>}
        </div>
    );
};

export {MovieInfoPage};