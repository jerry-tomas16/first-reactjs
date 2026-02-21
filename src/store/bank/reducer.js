import { GET_DATA_BANKS } from "./type";
const initialState = {
  dataBank: [],
};

const BankReducer = (state = initialState, action) => {
  switch (action.type) {
    case "value":
      return state;

    case GET_DATA_BANKS:
      return {
        ...state,
        dataBank: action.payload,
      };   
    default:
      return state;
  } 
};
export default BankReducer;