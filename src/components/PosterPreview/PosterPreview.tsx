import {FC} from 'react';

import {imageUrl} from "../../constants";
import css from './PosterPreview.module.css'


interface IProps {
    title:string
    poster_path:string
}

const PosterPreview: FC<IProps> = ({poster_path,title}) => {
    return (
        <div className={css.Poster}>
            <img src={imageUrl + poster_path} alt={title}/>
        </div>
    );
};

export {PosterPreview};