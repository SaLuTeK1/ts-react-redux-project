import {FC} from 'react';

import css from './PosterPreview.module.css'
import {imageUrl} from "../../constants";


interface IProps {
    title:string
    poster_path:string
}

const PosterPreview: FC<IProps> = ({poster_path,title}) => {

    return (
        <div className={css.Poster}>
            {poster_path?<img src={imageUrl + poster_path} alt={title}/>:<img src={require('../../images/noPoster.jpg')} alt={title}/>}
        </div>
    );
};

export {PosterPreview};