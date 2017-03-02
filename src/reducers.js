import {combineReducers} from "redux";
import queries from "./shared/reducers/Query";
import component from "./shared/reducers/ComponentData";
export default combineReducers({
    Queries: queries,
    Components: component
});