import {IRes} from "../types";
import {IMovie, IMovieRes, IVideoRes} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const movieService ={
    getAll:(page:string|null):IRes<IMovieRes>=>apiService.get(urls.movie.base,{params:{page}}),
    getById:(id:number):IRes<IMovie>=>apiService.get(urls.movie.byId(id)),
    getVideoById:(id:number):IRes<IVideoRes>=>apiService.get(urls.movie.videoById(id))
}

export {movieService}