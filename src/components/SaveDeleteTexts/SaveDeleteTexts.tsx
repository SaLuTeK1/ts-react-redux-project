import {FC, useEffect} from 'react';
import css from "../MoviesContainer/MovieInfo/MovieInfo.module.css";
import {SaveDeleteButtons} from "../ButtonsContainer";

interface IProps {
    id:number
    ids:string[]
}

const SaveDeleteTexts: FC<IProps> = ({id,ids}) => {

    const text = document.getElementById(`text${id}`)
    const text2 = document.getElementById(`text2${id}`)
    const fav = document.getElementById(`f${id}`)
    const cross = document.getElementById(`cancl${id}`)

    useEffect(() => {
        if (ids?.includes(`${id}`)) {
            fav?.classList.add(`hide`)
            fav?.classList.remove('show')

            cross?.classList.add('show')
            cross?.classList.remove('hide')

            text?.classList.add('hide')
            text?.classList.remove('show')

            text2?.classList.add('show')
            text2?.classList.remove('hide')
        }
        if (!ids.includes(`${id}`)) {
            fav?.classList.remove('hide')
            fav?.classList.add(`show`)

            cross?.classList.remove('show')
            cross?.classList.add('hide')

            text2?.classList.add('hide')
            text2?.classList.remove('show')

            text?.classList.add('show')
            text?.classList.remove('hide')
        }
    }, [ids, fav, cross, id, text, text2])


    return (
        <div className={css.flexBox} id={`box${id}`}>
            <div id={`text${id}`} className={`show`}>
                <h4>Wanna save this?</h4>
            </div>

            <div id={`text2${id}`} className={`hide`}>
                <h4>Wanna delete this?</h4>
            </div>
            <SaveDeleteButtons id={id}/>
        </div>
    );
};

export {SaveDeleteTexts};