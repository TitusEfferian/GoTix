import axios from 'axios'

export function searchApi(searchParameter){
    return axios.get('https://gotix-api.gojekapi.com/v1/web/events?search='+searchParameter)
    .then(function(response){
        return response.data
    })
    .catch(function(error){
        return error
    })
}