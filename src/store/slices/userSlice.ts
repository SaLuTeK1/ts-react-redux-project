import { createSlice} from "@reduxjs/toolkit";

interface IState {
    counter: number
    username: string
    trigger:boolean
    login:boolean
}
const favorites = localStorage.getItem('favoriteMovies');
const favoriteMovies = JSON.parse(favorites);
const usernameStorage = localStorage.getItem('username')

const initialState: IState = {
    counter: favoriteMovies?.length || 0,
    username: usernameStorage ||null,
    trigger:null,
    login:null
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
        },
        setUsername:(state,action)=>{
            state.username = action.payload
        }
    },
});

const {reducer: userReducer, actions} = userSlice;

const userActions = {
    ...actions
}

export {userActions, userReducer}