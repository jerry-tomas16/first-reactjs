import Api from "../../common/helpers/Api";
import {GET_DATA_EMPLOYEE} from "./type";

export const getListBidan = () => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      Api.get("/users")
        .then((res) => {
          resolve(res.data.data);
        })
        .catch((err) => {
          reject(err.response.data.message);
        });
    });
  };
};
