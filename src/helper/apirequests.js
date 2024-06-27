const API_KEY = `b1afec16ca29a99de834626942f6d05d`;
export const IMG_URL = 'https://image.tmdb.org/t/p/original';


//movie/now_playing

export const apiRequests = {
    getNetflixOriginals: `/discover/tv?api_key=${API_KEY}&language=en-US&page=1&with_networks=213`,
    getCollection: (platform, endpoint) => (`/${platform}/${endpoint}?api_key=${API_KEY}&language=en-US&page=1`),
    getVideoById: (platform, id) => (`/${platform}/${id}?api_key=${API_KEY}&append_to_response=videos,similar,recommendations,credits`),
    getGenres: (platform) => (`genre/${platform}/list?api_key=${API_KEY}`),
    getByGenre: (platform, genreid) => (`/discover/${platform}?api_key=${API_KEY}&language=en-US&page=1&with_genres=${genreid}`),
    getBySearch: (platform, query) => (`/search/${platform}?api_key=${API_KEY}&language=en-US&page=1&query=${query}`),
    getSeasonList: (platform, seriesid, seasonnumber) => (`/${platform}/${seriesid}/season/${seasonnumber}?api_key=${API_KEY}`)
}


export const platformTypes = {
    tv: "tv",
    movie: "movie"
}

export const endpoints = {
    popular: 'popular',
    topRated: 'top_rated',
    upcoming: 'upcoming',
    nowPlaying: 'now_playing',
    airingToday: 'airing_today',
    onTheAir: 'on_the_air'
}