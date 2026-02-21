import Api from "../../helpers/Api";
import {GET_DATA_BANKS} from "./type";

export const getListBank = () => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
        Api.get("/banks")
        .then((res) => {
          let dataBank = res.data.data;
          dispatch({
            type: GET_DATA_BANKS,
            payload: dataBank
          });
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
};

export const postDataBank = (data) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {  
            Api.post("/bank", data)
            .then((res) => {
                resolve(res);  
            })
            .catch((err) => {
                reject(err.response.data.message);
            });
        });
    };
    };

    export const deleteBank = (id) => {
        return (dispatch) => {
            return new Promise((resolve, reject) => {
                Api.delete(`/bank/${id}`)
                .then((res) => {                  
                      resolve(res.data);
                })
                .catch((err) => {
                    reject(err.response.data.message);
                });
            });
        };
    };