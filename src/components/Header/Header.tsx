import {useNavigate} from "react-router-dom";

import css from './Header.module.css'
import {moviesActions} from "../../store";
import {SearchForm} from "../SearchContainer";
import {Switcher} from "../Switcher";
import {GenresMenu} from "../GenresContainer";
import {SavedMovies, UserIcon} from "../UserInfo";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {LoginLogoutButtons} from "../ButtonsContainer";

const Header = () => {

    const {theme} = useAppSelector(state => state.switch);

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const goHome = ():void =>{
        navigate('')
        dispatch(moviesActions.setMovies([]))
    }

    const myClass = `${css.HeaderBox} ${css[theme]}`

    return (
        <header className={myClass}>
            <div className={'wrap'}>
                <div className={css.headerWrap}>
                    <main>
                        <h1 onClick={()=>goHome()} className={css.goHome}>MovieArea</h1>
                        <GenresMenu/>
                        <SearchForm/>
                    </main>
                    <aside className={css.rightSide}>
                        <UserIcon/>
                        <SavedMovies/>
                        <Switcher/>
                        <LoginLogoutButtons/>
                    </aside>
                </div>
            </div>
        </header>
    );
};

export {Header};