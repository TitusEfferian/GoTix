import { combineReducers } from 'redux'

export default combineReducers({
    banner:require('./banner').reducer,
    location:require('./location').reducer,
    showtime:require('./showtime').reducer
})