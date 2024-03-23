import {FC} from 'react';
import {Link} from "react-router-dom";

import css from './MovieListCard.module.css'
import {IMovie} from "../../../interfaces";
import {StarsRating} from "../../StarsRating";
import {PosterPreview} from "../../PosterPreview";
import { useAppSelector} from "../../../hooks";

interface IProps {
    movie: IMovie
}

const MovieListCard: FC<IProps> = ({movie}) => {

    const {theme} = useAppSelector(state => state.switch);
    const {title, poster_path, id, vote_average} = movie;
    const MovieBox = `${css.MovieBox} ${css[theme]} for-saved`

    return (
        <div className={MovieBox}>
            <Link to={`/details/${id}`}>
                <PosterPreview title={title} poster_path={poster_path}/>
                <div className={css.TextStars}>
                    <h3>{title}</h3>
                    <StarsRating vote_average={vote_average}/>
                </div>
            </Link>
        </div>
    );
};

export {MovieListCard};