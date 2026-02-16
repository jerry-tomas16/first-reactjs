import {GET_DATA_MENUS} from "./type";

const initialState = {
  dataMenus: [],
};

const MenuReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "value":
      return state;
    case GET_DATA_MENUS:
      return {
        ...state,
        dataMenus: actions.payload,
      };
    default:
      return state;
  }
};
export default MenuReducer;
