import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Row } from 'react-bootstrap';
import {handleClick, handleChange, generateClickHandlerFunc, genHeartClickFunc} from './actions/MyComponent'
import ComponentData  from "../shared/actions/ComponentData";
import Dummy from "./components/DummyComponent"
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

// HOMEWORK:
// have input tag (where user can put in comments)
// next to input should be a button that submits an onClick that 
// to the comments array in data


export class MyComponent extends Component {

    componentWillMount(){
      let component = new ComponentData("MyComponent", this.props.dispatch);
      component.setComponent({
        data: [{
          url: 'http://lorempixel.com/200/300',
          isFavorite: true,
          id: 0,
          comments: []
        },
        {
          url: 'http://lorempixel.com/202/300',
          isFavorite: false,
          id: 1,
          comments: []
        },
        {
          url: 'http://lorempixel.com/203/300',
          isFavorite: false,
          id: 2,
          comments: []
        },
        {
          url: 'http://lorempixel.com/201/301',
          isFavorite: false,
          id: 3,
          comments: []
        }
      ]
      });
    }

    render() {
        const { isClicked, component } = this.props;
        // if (!component) return (<div/>);
        let clickHandler = generateClickHandlerFunc(component);
        // pass down information to Dummy
        let map = component.data.map((image, index) => {
          // Dear Jenell from 30 minutes ago... you can put booleans in ternaries. K?
          // Love, Jenell

          let heartClick = genHeartClickFunc(component, image.id);
          return (
            <Dummy component={component} image={image} heartClick={heartClick} key={index} />
        )
        })
        return (
            <div>
               <button onClick={ (event) => this.props.dispatch(handleClick()) }>Click here.</button>
               {isClicked ? <span>Hi.</span> : <div>Toodles</div>}
               <input type='text' placeholder='hi there' onChange={ (e) => {
                 console.log(e.target.value); this.props.dispatch(handleChange(e.target.value))}} />
               {map}
            </div>
        );
    }
}

export const mapStateToProps = (store) => {
   let initialize = (variable) => {
       if (typeof variable !== "undefined") return variable;
       return null;
   };
    return {
      isClicked: store.Test.testReducer.isClicked,
      hasTyped: store.Test.testReducer.hasTyped,
      component: initialize(store.Components.MyComponent) || {data: []}
    };
};

export default connect(mapStateToProps) (MyComponent);
