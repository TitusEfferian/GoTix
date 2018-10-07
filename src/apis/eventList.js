import axios from 'axios'

export function eventListApi(){
    return axios.get('https://gotix-api.gojekapi.com/v1/web/events/list')
    .then(function(response){
        return response.data
    })
    .catch(function(error){
        return error
    })
}