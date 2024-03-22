import {useEffect} from "react";

import css from './GenresMenu.module.css'
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {genreActions} from "../../../store";

const GenresMenu = () => {

    const {theme} = useAppSelector(state => state.switch);
    const {genres} = useAppSelector(state => state.genres);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genreActions.getAll())
    }, [dispatch]);

    return (
        <div>
            <div className={css.dropdown}>
                <h1>Genres</h1>
                <div className={`${css.dropdownContent} ${css[theme]}`}>
                    {genres.map(genre=><a   href={`/genres/${genre.id}?genre=${genre.name.replaceAll(' ','_').toLowerCase()}`}
                                            key={genre.id}
                                            >{genre.name}</a>)}
                </div>
            </div>
        </div>
    );
};

export {GenresMenu};