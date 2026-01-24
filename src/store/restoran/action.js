export const SET_DATA_RESTORANS = "restoran/SET_DATA_RESTORANS";

export const setDataRestorans = (data) => ({
    type: SET_DATA_RESTORANS,
    payload: data,
});

export const setDataRestoransAsync = (data) => (dispatch) => {
    console.log("data", data);
    dispatch(setDataRestorans(data));
    return Promise.resolve(data);
};