import {GET_DATA_MENUS, GET_RESTORAN_BY_AREA} from "./type";

const initialState = {
  dataMenus: [],
  dataRestoranByArea: [],
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
    case GET_RESTORAN_BY_AREA:
      return {
        ...state,
        dataRestoranByArea: actions.payload,
      };
    default:
      return state;
  }
};
export default MenuReducer;
