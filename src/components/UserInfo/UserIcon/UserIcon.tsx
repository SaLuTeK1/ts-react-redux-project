import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";

import {useAppSelector} from "../../../hooks";
import css from './UserIcon.module.css'
const UserIcon = () => {
    const {username} = useAppSelector(state => state.user);
    return (
        <div className={css.ProfileBox}>
            <AccountBoxRoundedIcon sx={{
                width:35,
                height:35
            }}/>
            <p>{username}</p>
        </div>
    );
};

export {UserIcon};