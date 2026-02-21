import {combineReducers} from "redux";
import {EmployeeReducer} from "./employee";
import {RestoranReducer} from "./restoran";
import {ProductReducer} from "./product";
import {BankReducer} from "./bank";

const reducers = combineReducers({
  employee: EmployeeReducer,
  restoran: RestoranReducer,
  product: ProductReducer,
  bank: BankReducer,
});

export default reducers;
