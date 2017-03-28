export function handleClick () {
  console.log("::heart")
  return {
    type: 'BUTTON_CLICKED'
  }
}
export function handleChange (text) {
  console.log('testing 1,2')
  return {
    type: 'INPUT_STORE',
    text: text
  }
}
