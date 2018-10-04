import axios from 'axios'

export function bannerApi(){
    return axios.get('https://gotix-api.gojekapi.com/v1/web/events/hot_deals_banners')
    .then(function(response){
        return response.data
    })
    .catch(function(error){
        return error
    })
}