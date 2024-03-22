import css from './Header.module.css'
import {useNavigate} from "react-router-dom";
import {SearchForm} from "../SearchContainer";
import {GenresMenu} from "../GenresContainer";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {moviesActions} from "../../store";
import {Switcher} from "../Switcher";
import {SavedMovies, UserIcon} from "../UserInfo";

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
                    </aside>
                </div>
            </div>
        </header>
    );
};

export {Header};