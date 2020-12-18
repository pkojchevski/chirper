import {combinedReducers} from 'redux'
import users from './users'
import tweets from './tweets'
import authedUser from './authedUser'
import { loadingBarReducer } from 'react-redux-loader'
export default combinedReducers({
    authedUser,
    users,
    tweets,
    loadingBar:loadingBarReducer,
})