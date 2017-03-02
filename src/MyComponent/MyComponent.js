import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Row } from 'react-bootstrap';

// import { ... } from './components/';

export class MyComponent extends Component {

    componentWillMount(){
    }

    render() {
        // const { ... } = this.props;
        return (
            <div>
                Hello from MyComponent
            </div>
        );
    }
}

export const mapStateToProps = (store) => {
//    let initialize = (variable) => {
//        if (typeof variable !== "undefined") return variable;
//        return null;
//    };
    return {
    };
};

export default connect(mapStateToProps) (MyComponent);
