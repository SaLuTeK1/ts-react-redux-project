import {FC} from 'react';
import Rating from "@mui/material/Rating";

import css from './StarsRating.module.css'
interface IProps {
    vote_average:number
}

const StarsRating: FC<IProps> = ({vote_average}) => {
    return (
        <div className={css.StarBox}>
            <Rating name="half-rating-read" value={vote_average / 2} precision={0.2} readOnly />
        </div>
    );
};

export {StarsRating};