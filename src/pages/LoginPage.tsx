import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

import {LoginForm} from "../components";
import {useAppSelector} from "../hooks";

const LoginPage = () => {
    const navigate = useNavigate();
    const {username} = useAppSelector(state => state.user);
    useEffect(() => {
        if(username){
            navigate('/movies')
        }
    }, [username,navigate]);

    return (
        <div>
            <LoginForm/>
        </div>
    );
};

export {LoginPage};