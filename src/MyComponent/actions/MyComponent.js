// actions in here (functions)

// export function handleClick () {
//   console.log("heart")
//   return {
//     type: 'BUTTON_CLICKED'
//   }
// }
// export function handleChange (text) {
//   console.log('testing 1,2')
//   return {
//     type: 'INPUT_STORE',
//     text: text
//   }
// }
// naming convention = gen (for generate) and the name of the function
// generated followed by Func
// want to return a function
export function generateClickHandlerFunc (component) {
  return (e) => {
    component.setComponent({clicked: !component.clicked});
  }
};

export function genHeartClickFunc (component, imageID) {
  return (e) => {
    console.log('imageID', imageID)
    let newData = component.data.map((entry) => {
      if( entry.id === imageID ) {
        entry.addHeart = !entry.addHeart
      }
      return entry
    })
    // component.setComponent({
    //   isFavorite: !component.isFavorite,
    //   addHeart: !component.data.isFavorite
    // })
    component.setComponent({
      data: newData
    })
  }
};
