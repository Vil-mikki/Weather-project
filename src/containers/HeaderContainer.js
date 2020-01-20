import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../components/Header/Header';

class HeaderContainer extends Component {

    render() {
        return(
            <Header />
        )
    }
}

export default withRouter(HeaderContainer);