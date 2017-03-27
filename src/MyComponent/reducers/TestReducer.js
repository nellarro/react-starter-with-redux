export function testReducer(state = {isClicked: true}, action){
    switch (action.type) {
      case 'BUTTON_CLICKED':
      return {...state, isClicked: !state.isClicked}
        default:
            return state
    }
}
