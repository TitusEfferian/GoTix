import { combineReducers } from 'redux'

export default combineReducers({
    banner:require('./banner').reducer,
    location:require('./location').reducer,
    showtime:require('./showtime').reducer,
    featureMovies:require('./featureMovies').reducer,
    eventList:require('./eventList').reducer,
    search:require('./search').reducer
})