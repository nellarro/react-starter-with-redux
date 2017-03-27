import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Row } from 'react-bootstrap';
import {handleClick} from './actions/MyComponent'
// import { ... } from './components/';

export class MyComponent extends Component {

    componentWillMount(){
    }

    render() {
        const { isClicked } = this.props;
        return (
            <div>
               <button onClick={ (event) => this.props.dispatch(handleClick()) }>Click here.</button>
               {isClicked ? <span>Hi.</span> : <div>Toodles</div>}
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
      isClicked: store.Test.testReducer.isClicked
    };
};

export default connect(mapStateToProps) (MyComponent);
