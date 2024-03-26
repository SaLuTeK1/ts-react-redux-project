import {useEffect} from "react";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";

import css from './UserIcon.module.css'
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {userActions} from "../../../store";


const UserIcon = () => {
    const {username} = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();
    const usernameStorage = localStorage.getItem('username')

    useEffect(() => {
        if(usernameStorage){
            dispatch(userActions.setUsername(usernameStorage))
        }
    }, [usernameStorage,dispatch]);

    return (
        <div className={css.ProfileBox}>
            {username &&
                <div className={css.logined}>
                    <AccountBoxRoundedIcon sx={{
                        width: 35,
                        height: 35
                    }}/>
                    <p>{username}</p>
                </div>
                }
        </div>
    );
};

export {UserIcon};