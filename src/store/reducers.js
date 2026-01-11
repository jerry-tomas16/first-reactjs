import {combineReducers} from "redux";
import {EmployeeReducer} from "./employee";
import {MenuReducer} from "./menu";

const reducers = combineReducers({
  employee: EmployeeReducer,
  menu: MenuReducer,
});

export default reducers;
