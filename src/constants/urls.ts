const baseURL = 'https://api.themoviedb.org/3'

const imageUrl = 'https://image.tmdb.org/t/p/w500'

const movie = '/movie'
const discover = '/discover'
const genre = '/genre'
const search = '/search'
const videos = '/videos'


const urls = {
    movie: {
        base: `${discover}${movie}`,
        byId: (id: number): string => `${movie}/${id}`,
        videoById:(id:number):string => `${movie}/${id}/${videos}`
    },
    genre: {
        base: `${genre}${movie}/list`,
        byGenre: (genreId: number): string => `${discover}${movie}?with_genres=${genreId}`
    },
    search: {
        byWord: (word: string): string => `${search}${movie}?query=${word}`
    }
}

export {baseURL, imageUrl, urls}