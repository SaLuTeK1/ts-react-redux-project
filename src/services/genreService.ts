import {IRes} from "../types";
import {GenreResInterface, IMovieRes} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const genreService = {
    getAll:():IRes<GenreResInterface> => apiService.get(urls.genre.base),
    getByGenreId:(genreId:number,page:string|null):IRes<IMovieRes>=>apiService.get(urls.genre.byGenre(genreId),{params:{page}})
}

export {genreService}