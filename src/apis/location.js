import axios from 'axios'

export function locationApi() {
    let url = 'https://gotix-api.gojekapi.com/v1/web/events/cities'
    return axios.get(url)
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            return error
        })
}