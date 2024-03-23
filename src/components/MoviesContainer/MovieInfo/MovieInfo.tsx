import {Link} from "react-router-dom";
import {useEffect} from "react";

import css from './MovieInfo.module.css'
import {BackButton, SaveDeleteButtons} from "../../ButtonsContainer";
import {PosterPreview} from "../../PosterPreview";
import {StarsRating} from "../../StarsRating";
import {Trailers} from "../../TrailersContainer";
import {moviesActions} from "../../../store";
import {useAppDispatch, useAppSelector} from "../../../hooks";

const MovieInfo = () => {
    const {movieDetails, videoKey, ids} = useAppSelector(state => state.movies);
    const {theme} = useAppSelector(state => state.switch);
    const {trigger} = useAppSelector(state => state.user);

    const {title, id, overview, poster_path, release_date, genres, runtime, tagline, vote_average} = movieDetails;

    const key = videoKey.length - 1;
    const date = release_date.split('-')
    const dispatch = useAppDispatch();

    const text = document.getElementById(`text${id}`)
    const text2 = document.getElementById(`text2${id}`)
    const fav = document.getElementById(`f${id}`)
    const cross = document.getElementById(`cancl${id}`)

    const favorites = localStorage.getItem('favoriteMovies');
    useEffect(() => {
        if (favorites) {
            const modifiedString = favorites.slice(1, favorites.length - 1);
            const stringId = modifiedString.split(',');
            dispatch(moviesActions.setIds(stringId))
        }
    }, [favorites, dispatch]);

    useEffect(() => {

    }, [trigger]);

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
        <div>
            <BackButton/>
            <main className={css.bigBox}>
                <div className={css.mainInfo}>
                    <div className={css.movieImg}>
                        <PosterPreview title={title} poster_path={poster_path}/>
                    </div>
                    <div className={css.infoText}>
                        <h1>{title} ({date[0]})</h1>
                        <h5><i>{tagline}</i></h5>
                        <div className={css.flexBox}>
                            <h3>Rating:</h3> <StarsRating vote_average={vote_average}/>
                        </div>
                        <div>
                            <h3>Genres:</h3>
                            <ul>
                                {genres.map(genre => (
                                    <li key={genre.id} className={css.links}>
                                        <Link
                                            to={`/genres/${genre.id}?genre=${genre.name.replaceAll(' ', '_').toLowerCase()}`}
                                            className={css[theme]}> {genre.name} </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={css.runtimeBox}>
                            <h4>Runtime:</h4><p> {runtime} min.</p>
                        </div>
                        <div>
                            <h4>Release date: {release_date}</h4>
                        </div>
                        <div>
                            <h3>Overview:</h3><i><p>{overview}</p></i>
                        </div>
                        <div className={css.flexBox} id={`box${id}`}>
                            <div id={`text${id}`} className={`show`}>
                                <h4>Wanna save this?</h4>
                            </div>

                            <div id={`text2${id}`} className={`hide`}>
                                <h4>Wanna delete this?</h4>
                            </div>
                            <SaveDeleteButtons id={id}/>
                        </div>
                    </div>
                </div>
                <div className={css.trailerBox}>
                    <h1>Trailer:</h1>
                    <Trailers videoKey={videoKey[key]?.key}/>
                </div>
            </main>
        </div>
    );
};

export {MovieInfo};