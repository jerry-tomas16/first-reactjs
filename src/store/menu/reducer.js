import {GET_DATA_MENUS} from "./type";

const initialState = {
  dataMenus: [
    {
      kodeMakanan: "NG01",
      restoran: "Restoran A",
      menu: "Nasi Goreng",
      type: "Makanan",
      area_restoran: "Jakarta",
      harga: 20000,
      status: "Tersedia",
    },
    {
      kodeMakanan: "NG02",
      restoran: "Surya",
      menu: "Nasi Padang",
      type: "Makanan",
      area_restoran: "Jakarta",
      harga: 30000,
      status: "Tersedia",
    },
    {
      kodeMakanan: "NG02",
      restoran: "Surya",
      menu: "Nasi Padang",
      type: "Makanan",
      area_restoran: "Jakarta",
      harga: 30000,
      status: "Tidak Tersedia",
    },
  ],
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
