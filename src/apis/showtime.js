import axios from 'axios'

export function showtimeApi(location) {
    let url = 'https://gotix-api.gojekapi.com/v1/web/movie/showtimes?city='+location+'&date=2018-10-05'
    return axios.get(url)
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            return error
        })
}