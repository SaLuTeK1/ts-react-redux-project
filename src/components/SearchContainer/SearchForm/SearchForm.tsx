import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {moviesActions} from "../../../store";
import SearchIcon from '@mui/icons-material/Search';
import css from './SearchForm.module.css'

interface FormValues {
    searchText: string;
}

const SearchForm = () => {
    const {theme} = useAppSelector(state => state.switch);
    const {register, reset, handleSubmit} = useForm<FormValues>();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {searchText} = useParams<string>();

    const search: SubmitHandler<FormValues> = async (data): Promise<void> => {
        navigate(`/search/${data.searchText}`)
        if (searchText !== data.searchText) {
            dispatch(moviesActions.setMovies([]))
        }
        reset();
    }

    return (
        <div className={css[theme]}>
            <form onSubmit={handleSubmit(search)} className={css.searchForm}>
                <input className={css.searchInput} placeholder={'Search'} type={'text'} {...register('searchText')}/>
                <button className={css.searchButton}>
                    <SearchIcon/>
                </button>
            </form>
        </div>
    );
};

export {SearchForm};