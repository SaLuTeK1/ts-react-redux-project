import {Outlet} from "react-router-dom";

import {Header} from "../components";
import {useAppSelector} from "../hooks";
import css from "./MainLayout.module.css";
import {useEffect} from "react";
const MainLayout = () => {
    const {theme} = useAppSelector(state => state.switch);
    const myClass = `${css.MainLayout} ${theme}`

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <div className={`${myClass}`}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};