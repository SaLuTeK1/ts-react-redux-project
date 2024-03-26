import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {ErrorPage, GenresPage, LoginPage, MovieInfoPage, MoviesPage, SavedMoviesPage, SearchPage} from "./pages";

let router = createBrowserRouter([
    {
        path:'',element:<MainLayout/>,errorElement:<ErrorPage/>,children:[
            {
                index:true,element:<Navigate to={'movies'}/>
            },
            {
                path:'movies',element:<MoviesPage/>
            },
            {
                path:'details/:id',element:<MovieInfoPage/>
            },
            {
                path:'genres/:genreId',element:<GenresPage/>
            },
            {
                path:'search/:searchText', element:<SearchPage/>
            },
            {
                path:'favorites',element:<SavedMoviesPage/>
            },
            {
                path:'login',element:<LoginPage/>
            }
        ]
    }
]);

export {router}