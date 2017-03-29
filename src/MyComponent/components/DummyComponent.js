import React, { Component } from 'react'
import {handleClick, handleChange, generateClickHandlerFunc, genHeartClickFunc} from '../actions/MyComponent'

//ternary (something ? otherThing : someElse)
// anything that can be evaluated as a boolean
class Dummy extends Component {

  render() {
    const { isClicked, component } = this.props;
    // if (!component) return (<div/>);
    let clickHandler = generateClickHandlerFunc(component);
    let heartClick = genHeartClickFunc(component);
    let imgURLS = [0, 2, 3, 4];
    let map = imgURLS.map((number, index) => {
      // Dear Jenell from 30 minutes ago... you can put booleans in ternaries. K?
      // Love, Jenell
      let showHeart = component.addHeart == index ? <div><i className="fa fa-heart-o"></i></div> : <div />;
      return (
        <div key={index}>
          <img src={`https://unsplash.it/20${number}/300/?random`} alt={index} id={index}  onClick={heartClick} />{showHeart}
        </div>
    )
    })


    return(
    <div className='images'>
      {map}
    </div>
  )};
}

export default Dummy
