import React , { Component } from 'react'
import { connect } from 'redux'
import { formatTweet, formatDate } from '../utils/helpers'
import TiArrowBackOutline from 'react-icons/lib/arrow-back-outline'
import TiHeartOutline from 'react-icons/lib/ti/heart-outline'
import TiHeartFullOutline from 'react-icons/lib/heart-full-outline'

class Tweet extends Component {

    render() {
        const {tweet} = this.props
        if(tweet === null) {
            return <p>This tweet doesn't exist</p>
        }
        const { name, avatar, timestamp, text, hasLiked, likes, replies, id, parent} = tweet

        return (
            <div className="tweet">
                 <img 
                    src={avatar}
                    className="avatar"
                />
                <div clasNAme="tweet-info">
                    <span>{name}</span>
                    <div>{formatDate(timestamp)}</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({authedUser, users, tweets}, {id}) => {
    const tweet = tweets[id]
    const parentTweet = tweet && tweets[tweet.replyingTo]
    return {
        authedUser,
        tweet: tweet && formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
    }
}
export default connect()(Tweet)