import {IRes} from "../types";
import {IMovieRes} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const searchService = {
    getByWord:(word:string,page:string):IRes<IMovieRes>=>apiService.get(urls.search.byWord(word),{params:{page}})
}

export {searchService}