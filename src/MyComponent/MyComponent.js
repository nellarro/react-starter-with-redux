import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Row } from 'react-bootstrap';
import {handleClick, handleChange} from './actions/MyComponent'

// import { ... } from './components/';

// make an onChange on an input
// handle the change on input using Redux
// set up an action in the MyComponent that gets fired when the onChange method happens.
// capture and store the value of the input (e) needs to be passed along

// handleClick is called an "action creator" which means
// its return value describes the action that just took
// place. The action that they create is an object that
// has to have a 'type' as a property and can have other
// properties

// EPIC MODE:
// save the input into reducers (create a new key called formData)
// name and email updated independently

export class MyComponent extends Component {

    componentWillMount(){
    }

    render() {
        const { isClicked } = this.props;
        return (
            <div>
               <button onClick={ (event) => this.props.dispatch(handleClick()) }>Click here.</button>
               {isClicked ? <span>Hi.</span> : <div>Toodles</div>}
               <input type='text' placeholder='hi there' onChange={ (e) => {
                 console.log(e.target.value); this.props.dispatch(handleChange(e.target.value))}} />
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
      isClicked: store.Test.testReducer.isClicked,
      hasTyped: store.Test.testReducer.hasTyped
    };
};

export default connect(mapStateToProps) (MyComponent);
