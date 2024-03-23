import {BackButton, Header} from "../../components";
import css from './ErrorPage.module.css'
import {useAppSelector} from "../../hooks";

const ErrorPage = () => {
    const {theme} = useAppSelector(state => state.switch);
    const myClass = `${css.ErrorBackground} ${theme}`
    return (
        <div className={myClass}>
            <Header/>
            <div className={'wrap'}>
                <BackButton/>
                <h1>Nothing found</h1>
            </div>
        </div>
    );
};

export {ErrorPage};