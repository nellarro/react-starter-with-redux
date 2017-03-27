// export { default as SubComponent } from './SubComponent';

export function testReducer(state = {}, action){
    switch (action.type) {
        default:
            return state
    }
}

import {combineReducers} from "redux";
import {testReducer} from './TestReducer';
export default combineReducers({
    testReducer
});
