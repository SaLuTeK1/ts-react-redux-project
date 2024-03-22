import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie, IMovieRes, IVideo, IVideoRes} from "../../interfaces";
import {AxiosError} from "axios";
import {genreService, movieService, searchService} from "../../services";

interface IState {
    movies: IMovie[]
    total_pages: number
    movieDetails:IMovie | null
    videoKey: IVideo[]
    total_results:number
    ids:string[]
    saved:Record<number, IMovie>
}

const initialState: IState = {
    movies: [],
    total_pages: 0,
    movieDetails:null,
    videoKey:[],
    total_results:null,
    ids:[],
    saved:{}
};

const getAll = createAsyncThunk<IMovieRes, { page: string|null }>(
    'moviesSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page);
            return data
        } catch (e) {
            const err = e as AxiosError
            if (err.response && err.response.data) {
                return rejectWithValue(err.response.data);
            } else {
                return rejectWithValue('An unknown error occurred');
            }
        }
    }
);

const getById = createAsyncThunk<IMovie, {id:number}>(
    'moviesSlice/getById',
    async ({id},{rejectWithValue})=>{
        try {
            const {data} = await movieService.getById(id);
            return data
        } catch (e) {
            const err = e as AxiosError
            if (err.response && err.response.data) {
                return rejectWithValue(err.response.data);
            } else {
                return rejectWithValue('An unknown error occurred');
            }
        }
    }
);

const getVideo = createAsyncThunk<IVideoRes,{id:number}>(
    'moviesSlice/getVideo',
    async ({id},{rejectWithValue})=>{
        try {
            const {data} = await movieService.getVideoById(id);
            return data
        }catch (e) {
            const err = e as AxiosError
            if (err.response && err.response.data) {
                return rejectWithValue(err.response.data);
            } else {
                return rejectWithValue('An unknown error occurred');
            }
        }
    }
);

const getByWord = createAsyncThunk<IMovieRes , {word:string,page:string}>(
    'moviesSlice/getByWord',
    async ({word,page},{rejectWithValue})=>{
        try {
            const {data} = await searchService.getByWord(word,page)
            return data
        }catch (e) {
            const err = e as AxiosError
            if (err.response && err.response.data) {
                return rejectWithValue(err.response.data);
            } else {
                return rejectWithValue('An unknown error occurred');
            }
        }
    }
);

const getByGenreId = createAsyncThunk<IMovieRes, { id: number, page: string }>(
    'moviesSlice/getByGenreId',
    async ({id, page}, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getByGenreId(id, page);
            return data
        } catch (e) {
            const err = e as AxiosError
            if (err.response && err.response.data) {
                return rejectWithValue(err.response.data);
            } else {
                return rejectWithValue('An unknown error occurred');
            }
        }
    }
);

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        setMovieDetails:(state,action)=>{
            state.movieDetails = action.payload
        },
        setVideoKey:(state,action)=>{
            state.videoKey = action.payload
        },
        setMovies:(state,action)=>{
            state.movies = action.payload
        },
        setIds:(state,action)=>{
            state.ids = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload.results
                state.total_pages = action.payload.total_pages
            })
            .addCase(getById.fulfilled,(state, action)=>{
                state.movieDetails = action.payload
                const movie = action.payload;
                state.saved[movie.id] = movie;

            })
            .addCase(getVideo.fulfilled,(state, action)=>{
                state.videoKey = action.payload.results
            })
            .addCase(getByWord.fulfilled,(state, action) => {
                state.movies = action.payload.results
                state.total_pages = action.payload.total_pages
                state.total_results = action.payload.total_results
            })
            .addCase(getByGenreId.fulfilled, (state, action)=>{
                state.movies = action.payload.results
                state.total_pages = action.payload.total_pages
            })
});

const {reducer: moviesReducer, actions} = moviesSlice;

const moviesActions = {
    ...actions,
    getAll,
    getById,
    getVideo,
    getByWord,
    getByGenreId
}

export {moviesActions, moviesReducer}