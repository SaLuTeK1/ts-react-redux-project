import {FC} from 'react';
import {IconButton} from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Favorite from "@mui/icons-material/Favorite";

import {useAppDispatch} from "../../../hooks";
import {removeFavorite, toFavourite} from "../../../utils";

interface IProps {
    id:number,
}

const SaveDeleteButtons: FC<IProps> = ({id}) => {
    const dispatch = useAppDispatch();

    return (
        <div>
            <IconButton id={`f${id}`} className={`show`} onClick={()=>toFavourite(id,dispatch)}>
                <Favorite color={'error'}
                          sx={{
                              width:40,
                              height:40
                          }} />

            </IconButton>
            <IconButton id={`cancl${id}`} className={`hide`} onClick={()=>removeFavorite(id, dispatch)}>
                <CancelOutlinedIcon  sx={{
                    width:40,
                    height:40
                }}/>
            </IconButton>
        </div>
    );
};

export {SaveDeleteButtons};