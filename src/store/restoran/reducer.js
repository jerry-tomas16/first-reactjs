import { setDataRestorans } from "./actions";
import {GET_DATA_RESTORANS} from "./type";

const initialState = {
    dataRestorans: [],
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