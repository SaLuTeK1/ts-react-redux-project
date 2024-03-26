import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from '@mui/icons-material/Logout';
import {useNavigate} from "react-router-dom";

import css from './LoginLogoutButtons.module.css'
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {userActions} from "../../../store";

const LoginLogoutButtons = () => {
    const navigate = useNavigate();
    const {username} = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();
    const logoutFunction = () =>{
        dispatch(userActions.setUsername(null))
        localStorage.removeItem('username')
    }

    return (
        <div>
            {username?
                <div className={css.logButton}>
                    <LogoutIcon onClick={logoutFunction} sx={{
                        width: 35,
                        height: 35
                    }}/></div>
            :
                <div className={css.logButton}>
                    <LoginIcon onClick={() => navigate('/login')} sx={{
                        width: 35,
                        height: 35
                    }}/>
                </div>
            }
        </div>
    );
};

export {LoginLogoutButtons};