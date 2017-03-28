import React, { Component } from 'react'
import {handleClick, handleChange, generateClickHandlerFunc, genHeartClickFunc} from '../actions/MyComponent'


class Dummy extends Component {

  render() {
    const { isClicked, component } = this.props;
    // if (!component) return (<div/>);
    let clickHandler = generateClickHandlerFunc(component);
    let heartClick = genHeartClickFunc(component);
    let showHeart = component.isFavorite ? <div><i className="fa fa-heart-o"></i></div> : <div />;

    return(
    <div className='images'>
      <img src='https://unsplash.it/200/300/?random' alt='random' onClick={heartClick}/>
      {showHeart}
      <img src='https://unsplash.it/205/300/?random' alt='random2' onClick={heartClick}/>
      {showHeart}
      <img src='https://unsplash.it/202/300/?random' alt='random3' onClick={heartClick}/>
      {showHeart}
      <img src='https://unsplash.it/201/300/?random' alt='random4' onClick={heartClick}/>
      {showHeart}
    </div>
  )};
}

export default Dummy
