import React, { Component } from 'react'
import {handleClick, handleChange, generateClickHandlerFunc, genHeartClickFunc} from '../actions/MyComponent'
//ternary (something ? otherThing : someElse)
// anything that can be evaluated as a boolean
class Dummy extends Component {

  render() {
    const { component, image, heartClick } = this.props;
    // console.log(this.props);
    // console.log(image.id)
    // console.info(component.data.isFavorite)
    let showHeart = image.addHeart ? <div><i className="fa fa-heart-o"></i></div> : <div />;
    return(
    <div>
      <img src={image.url} alt='hey' onClick={heartClick} id={image.id}/>
      {showHeart}
    </div>
  )};
}

export default Dummy
