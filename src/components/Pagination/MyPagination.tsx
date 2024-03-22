import {ChangeEvent, FC} from 'react';
import {useSearchParams} from "react-router-dom";
import Pagination from '@mui/material/Pagination';

import css from './MyPagination.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {moviesActions} from "../../store";

interface IProps {
    total_pages: number
}

const MyPagination: FC<IProps> = ({total_pages}) => {
    const {theme} = useAppSelector(state => state.switch);

    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page') || 1;

    const dispatch = useAppDispatch();

    const handleChange = (event: ChangeEvent<unknown>, value: number) => {
        setQuery(prev => {
            prev.set('page', `${value}`)
            return prev
        });
        dispatch(moviesActions.setMovies([]))
    };

    const numbers = Math.min(500, total_pages);

    return (
        <div className={css.paginationBox}>
            <Pagination count={numbers} page={+page} onChange={handleChange} className={css[theme]}/>
        </div>
    );
};

export {MyPagination};