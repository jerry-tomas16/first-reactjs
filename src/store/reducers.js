import {combineReducers} from "redux";
import {EmployeeReducer} from "./employee";
import {RestoranReducer} from "./restoran";
import {ProductReducer} from "./product";
import {BankReducer} from "./bank";
import {MenuReducer} from "./menu";
const reducers = combineReducers({
  employee: EmployeeReducer,
  restoran: RestoranReducer,
  menu: MenuReducer,
  product: ProductReducer,
  bank: BankReducer,
});

export default reducers;
