import {GET_DATA_EMPLOYEE} from "./type";

const initialState = {
  dataEmployee: [],
};

const EmployeeReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "value":
      return state;

    case GET_DATA_EMPLOYEE:
      return {
        ...state,
        dataEmployee: actions.payload,
      };
    default:
      return state;
  }
};

export default EmployeeReducer;
