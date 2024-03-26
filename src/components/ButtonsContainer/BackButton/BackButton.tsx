import {useNavigate} from "react-router-dom";

import {useAppSelector} from "../../../hooks";

const BackButton = () => {
    const {theme} = useAppSelector(state => state.switch);
    const navigate = useNavigate();

    
    return (
        <button className={`button-${theme} my-button`} onClick={()=>navigate(-1)}>Back</button>
    );
};

export {BackButton};