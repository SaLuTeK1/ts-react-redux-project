import {useNavigate} from "react-router-dom";
import Favorite from "@mui/icons-material/Favorite";
import {Badge} from "@mui/material";
import css from './SavedMovies.module.css'
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {useEffect} from "react";
import {userActions} from "../../../store";
const SavedMovies = () => {
    const navigate = useNavigate();
    const {counter} = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();
    const favorites = localStorage.getItem('favoriteMovies');
    const favoriteMovies = JSON.parse(favorites);

    useEffect(() => {
        if(favoriteMovies?.length){
            dispatch(userActions.setCounter(favoriteMovies.length))
        }
    }, [dispatch,favoriteMovies]);


    const toFavorites = () => {
        navigate('/favorites')
    }
    return (
        <div>
            <Badge badgeContent={counter} color="primary" onClick={toFavorites} className={css.heart}>
                <Favorite color={'error'} sx={{
                    width:35,
                    height:35
                }}/>
            </Badge>
        </div>
    );
};

export {SavedMovies};