import Api from "../..//helpers/Api";
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

export const postDataEmployee = (data) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      Api.post("/users", data)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.response.data.message);
        });
    });
  };
};
