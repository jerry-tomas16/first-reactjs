import {combineReducers} from "redux";
import {EmployeeReducer} from "./employee";
import {RestoranReducer} from "./restoran";
import {ProductReducer} from "./product";

const reducers = combineReducers({
  employee: EmployeeReducer,
  restoran: RestoranReducer,
  product: ProductReducer,
});

export default reducers;
