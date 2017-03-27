// probably don't touch it.

import {combineReducers} from "redux";
import testReducer from './MyComponent/reducers/';
import queries from "./shared/reducers/Query";
import component from "./shared/reducers/ComponentData";
export default combineReducers({
    Queries: queries,
    Components: component,
    Test: testReducer
});
