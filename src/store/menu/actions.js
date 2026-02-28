import Api from "../..//helpers/Api";
import {GET_RESTORAN_BY_AREA} from "./type";

export const getRestoranByArea = (param) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      Api.get(`/restoran-by-area?area=${param}`)
        .then((res) => {
          let dataRestoran = res.data;
          dispatch({
            type: GET_RESTORAN_BY_AREA,
            payload: dataRestoran,
          });
          resolve(dataRestoran);
        })
        .catch((err) => {
          reject(err.response.data.message);
        });
    });
  };
};
