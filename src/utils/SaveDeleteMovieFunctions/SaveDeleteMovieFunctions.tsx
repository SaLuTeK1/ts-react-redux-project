
import {moviesActions, userActions} from "../../store";
import {AppDispatch} from "../../types";


export const toFavourite = async (id: number,dispatch: AppDispatch): Promise<void> => {
    const favorites = localStorage.getItem('favoriteMovies');
    const favoriteMovies = favorites ? JSON.parse(favorites) : [];
    if (!favoriteMovies.includes(id)) {
        favoriteMovies.push(id);
        localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
    }
    dispatch(userActions.setTrigger())
}
export const removeFavorite = async (id: number,dispatch: AppDispatch): Promise<void> => {
    const favorites = localStorage.getItem('favoriteMovies');
    const favList: number[] = JSON.parse(favorites);
    const updatedFavList = favList.filter(favId => favId !== id);
    if (updatedFavList.length === 0) {
        localStorage.removeItem('favoriteMovies');
        dispatch(moviesActions.setIds([]))
        dispatch(userActions.setCounter(0))
    } else {
        localStorage.setItem('favoriteMovies', JSON.stringify(updatedFavList));
    }
    dispatch(userActions.setTrigger())
}