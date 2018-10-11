import axios from 'axios'

export function categoryApi(){
    return axios.get('https://gotix-api.gojekapi.com/v1/web/events/categories')
    .then(function(response){
        return response.data
    })
    .catch(function(error){
        return error
    })
}