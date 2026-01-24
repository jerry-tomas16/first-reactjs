import {combineReducers} from "redux";
import {EmployeeReducer} from "./employee";
import {MenuReducer} from "./menu";
import {RestoranReducer} from "./restoran";

const reducers = combineReducers({
  employee: EmployeeReducer,
  menu: MenuReducer,
  restoran: RestoranReducer,
});

export default reducers;
