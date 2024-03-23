import {FC} from 'react';
import Switch from '@mui/material/Switch';
import {alpha} from "@mui/material";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {switchActions} from "../../store";

interface IProps {

}

const Switcher: FC<IProps> = () => {

    const {theme} = useAppSelector(state => state.switch);
    const dispatch = useAppDispatch();

    localStorage.setItem('theme', theme)

    const toggleTheme = (): void => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        dispatch(switchActions.setTheme(newTheme));
    };

    return (
        <div>
            <Switch onClick={toggleTheme} sx={{
                '& .MuiSwitch-switchBase.Mui-checked': {
                    color: theme === 'dark' ? '#9ccef1' : '#032541',
                    '&:hover': {
                        backgroundColor: alpha(theme === 'dark' ? '#9ccef1' : '#032541', 0.2),
                    },
                },
                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                    backgroundColor: theme === 'dark' ? '#9ccef1' : '#032541',
                },
                '& .MuiSwitch-track': {
                    backgroundColor: theme === 'dark' ? '#e0eaf1' : '#032541',
                },
                '& .MuiSwitch-switchBase': {
                    color: theme === 'dark' ? '#9ccef1' : '#032541',
                    '&:hover': {
                        backgroundColor: alpha(theme === 'dark' ? '#9ccef1' : '#032541', 0.2),
                    },
                },
            }}/>
        </div>
    );
};

export {Switcher};