import { setDataRestorans } from "./action";
import {GET_DATA_RESTORANS} from "./type";

const initialState = {
    dataRestorans: [
        {
              kode_restoran: "NG01",
              area_restoran: "Riau",
              nama_restoran: "Surya",
              keterangan: "aktif",
              image: "https://disporabudpar.banjarbarukota.go.id/wp-content/uploads/2017/01/IMG_2542-copy.jpeg",
            },
    ],
};
const RestoranReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case "value":
            return state;
            case GET_DATA_RESTORANS:
                return {
                    ...state,
                    dataRestorans: actions.payload,
                };
                default:
                     return state;
    }
};
export default RestoranReducer;