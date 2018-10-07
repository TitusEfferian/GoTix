


import axios from 'axios'

export function featureMoviesApi(location) {
    let url = 'https://gotix-api.gojekapi.com/v2/web/movie/featured_movies?city=' + location
    return axios.get(url)
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            return error
        })
}