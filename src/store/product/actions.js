import Api from "../../helpers/Api";
import {GET_DATA_PRODUCT} from "./type";

export const getListProduct = () => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
        Api.get("/products")
        .then((res) => {
          let dataProduct = res.data.data;
          dispatch({
            type: GET_DATA_PRODUCT,
            payload: dataProduct
          });
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
};

export const postDataProduct = (data) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            Api.post("/product", data)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err.response.data.message);
            });
        });
    };
    };

    export const deleteProduct = (id) => {
        return (dispatch) => {
            return new Promise((resolve, reject) => {
                Api.delete(`/product/${id}`)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    reject(err.response.data.message);
                });
            });
        };
    };