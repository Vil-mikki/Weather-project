import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../components/Header';

class HeaderContainer extends Component {

    render() {
        console.log(this.props)
        return(
            <Header />
        )
    }
}

export default withRouter(HeaderContainer);