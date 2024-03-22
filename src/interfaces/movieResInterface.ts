import {IMovie} from "./movieInterface";

export interface IMovieRes{
    page:number,
    results:IMovie[]
    total_pages:number
    total_results:number
}