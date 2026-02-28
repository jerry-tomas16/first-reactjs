import Api from "../../helpers/Api";
import {GET_DATA_RESTORANS} from "./type";

export const getListRestoran = () => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            Api.get("/restorans")
            .then((res) => {
                let dataRestoran = res.data.data;
                dispatch({
                    type: GET_DATA_RESTORANS,
                    payload: dataRestoran
                });
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
        });
    };
}

export const postDataRestoran = (data) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            Api.post("/restoran", data)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err.response.data.message);
            });
        });
    };
};

export const deleteRestoran = (id) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            Api.delete(`/restoran/${id}`)
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err.response.data.message);
            }); 
        });
    };
};

