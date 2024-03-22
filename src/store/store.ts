import {configureStore} from "@reduxjs/toolkit";

import {genreReducer, moviesReducer, switchReducer, userReducer} from "./slices";

let store = configureStore({
    reducer: {
        movies:moviesReducer,
        genres:genreReducer,
        switch:switchReducer,
        user:userReducer
    }
});
export {store}