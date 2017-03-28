export function testReducer(state = {isClicked: true}, action){
    switch (action.type) {
      case 'BUTTON_CLICKED':
        return {...state, isClicked: !state.isClicked}
      case 'INPUT_STORE':
        return {...state, text: action.text}
      default:
        return state
    }
}
