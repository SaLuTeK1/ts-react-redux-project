import {useNavigate} from "react-router-dom";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";

import css from './LoginForm.module.css'
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {userActions} from "../../../store";

const LoginForm = () => {
    const {theme} = useAppSelector(state => state.switch);
    const {reset, handleSubmit, register} = useForm<FieldValues>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const save: SubmitHandler<FieldValues> = async (data): Promise<void> => {
        console.log(data.username)
        reset();
        navigate('/movies')
        localStorage.setItem('username', data.username)
        dispatch(userActions.setTrigger())
    }
    return (
        <div className={'wrap background'}>
            <h2>Are you new one? Let`s login!</h2>
            <form onSubmit={handleSubmit(save)}>
                <input className={`button-${theme} ${css.myInput}`} type='text' placeholder='username' {...register('username')}/>
                <button className={`button-${theme} my-button`}>Go!</button>
            </form>

        </div>
    );
};

export {LoginForm};