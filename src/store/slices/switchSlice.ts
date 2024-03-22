import {createSlice} from "@reduxjs/toolkit";

interface IState {
    theme:string
}


const storedTheme = localStorage.getItem('theme');

const initialState:IState = {
    theme: storedTheme||'light'
};


const switchSlice = createSlice({
    name:'switchSlice',
    initialState,
    reducers:{
        setTheme:(state,action)=>{
            state.theme = action.payload
        }
    }
});

const {reducer: switchReducer, actions} = switchSlice;

const switchActions = {
    ...actions
}

export {switchActions,switchReducer}