import {combineReducers} from "redux";
import {EmployeeReducer} from "./employee";

const reducers = combineReducers({
  employee: EmployeeReducer,
});

export default reducers;
