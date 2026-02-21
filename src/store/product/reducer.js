import {GET_DATA_PRODUCT} from "./type";

const initialState = {
  dataProduct: [],
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "value":
      return state;

    case GET_DATA_PRODUCT:
      return {
        ...state,
        dataProduct: action.payload,
      };
    default:
      return state;
  }
};

export default ProductReducer;