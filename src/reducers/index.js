import {combinedReducers} from 'redux'
import users from './users'
import tweets from './tweets'
import authedUser from './authedUser'

export default combinedReducers({
    authedUser,
    users,
    tweets
})