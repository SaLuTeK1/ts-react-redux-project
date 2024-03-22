import { createSlice} from "@reduxjs/toolkit";

interface IState {
    counter: number
    username: string
    trigger:boolean
}
const favorites = localStorage.getItem('favoriteMovies');
const favoriteMovies = JSON.parse(favorites);

const initialState: IState = {
    counter: favoriteMovies?.length || 0,
    username: 'SaLuT1K',
    trigger:null
};



const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setCounter:(state,action)=>{
            state.counter = action.payload
        },
        setTrigger:state=>{
            state.trigger = !state.trigger
        }
    },
});

const {reducer: userReducer, actions} = userSlice;

const userActions = {
    ...actions
}

export {userActions, userReducer}