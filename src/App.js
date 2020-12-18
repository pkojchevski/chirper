import React, { Component } from "react";
import {connect} from 'react-redux'
import { LoadingBar } from "react-redux-loading";
import { handleInitialData } from '../actions/shared'
import Dashboard from './components/Dashboard'

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <div>
                <LoadingBar />
              { this.props.loading 
                ? null 
                :
                <Dashboard />
              }
            </div>
        )
    }
}

const mapStateToProps= ({authedUser}) => {
    return {
        loading: authedUser === null
    }
}
export default connect()(App)