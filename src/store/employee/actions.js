import Api from "../..//helpers/Api";
import {GET_DATA_EMPLOYEE} from "./type";

export const getListEmployee = () => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      Api.get("/users")
        .then((res) => {
          let dataEmployee = res.data.data;
          dispatch({
            type: GET_DATA_EMPLOYEE,
            payload: dataEmployee,
          });
          resolve(dataEmployee);
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

export const deleteEmployee = (id) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      Api.delete(`/users/${id}`)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.response.data.message);
        });
    });
  };
};
