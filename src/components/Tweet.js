import React , { Component } from 'react'
import { connect } from 'redux'
import { formatTweet, formatDate } from '../utils/helpers'
import TiArrowBackOutline from 'react-icons/lib/arrow-back-outline'
import TiHeartOutline from 'react-icons/lib/ti/heart-outline'
import TiHeartFullOutline from 'react-icons/lib/heart-full-outline'

class Tweet extends Component {

    handleLike = (e) => {
      e.preventDefault()
      // todo: Handle Like tweet
    }
    toParent = (e, id) => {
      e.preventDefault()
      // todo: Redirect to Parent tweet
    }
    render() {
        const {tweet} = this.props
        if(tweet === null) {
            return <p>This tweet doesn't exist</p>
        }
        const { name, avatar, timestamp, text, hasLiked, likes, replies, parent} = tweet

        return (
            <div className="tweet">
                 <img 
                    src={avatar}
                    className="avatar"
                />
                <div clasNAme="tweet-info">
                    <div>
                        <span>{name}</span>
                        <div>{formatDate(timestamp)}</div>
                        {parent && (
                            <button classNAme="replying-to">
                                Replying to @{parent.author}
                            </button>
                        )}
                        <p>{text}</p>
                    </div>
                <div className="tweet-icons">
                    <TiArrowBackOutline className="tweet-icon">
                        <span>{replies !== 0 && replies}</span>
                        <button className="heart-button" onClick={this.handleLike}>
                            {hasLiked  ?
                            <TiHeartFullOutline color="#e0245e" classNAme="tweet-icon"/> :
                            <TiHeartOutline  className="tweet-icon"/> 
                            }
                        </button>
                        <span>{likes !== 0 && likes}</span>
                    </TiArrowBackOutline>
                </div>
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