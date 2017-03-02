import React, {Component} from 'react';
import loadingSpinner from '../assets/loading.svg';

export class LoadingSpinner extends Component {

    render() {
        return (
            <div className="loading-animation">
                <img src={loadingSpinner} className="center-block" alt="loading"/>
            </div>
        );
    }
}

export default LoadingSpinner;

