import React, { Component } from "react";
import PropTypes from "prop-types";
import { CircularProgress } from '@material-ui/core'

export default class LoadingIndicator extends Component {
    static propTypes = {
        isVisible: PropTypes.bool,
        customClass: PropTypes.string,
        children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
    };

    render() {
        return this.props.isVisible ? this.renderLoader() : this.props.children;
    }

    renderLoader = () => (
        <CircularProgress />
    );
}