import {SET_AUTH} from "./type";
import Api from "../..//helpers/Api";

export const setAuth = (data) => {
  return {
    type: SET_AUTH,
    payload: data,
  };
};

export const attemptLogin = (credentials) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      Api.post("/login", credentials)
        .then((response) => {
          localStorage.setItem("user", JSON.stringify(response.data.data.user));
          localStorage.setItem("token", response.data.data.token);
          dispatch(
            setAuth({
              isLoggedIn: true,
              currentUser: response.data.data.user,
              token: response.data.data.token,
            }),
          );
          resolve(response.data.data);
        })
        .catch((error) => {
          reject(error.response?.data.message);
        });
    });
  };
};

export const logOut = (onSuccess, onError) => async (dispatch, getState) => {
  const currentUser = getState().auth.currentUser;
  try {
    const userId = !currentUser.id ? JSON.parse(currentUser).id : currentUser.id;
    const response = await Api.put(`/logout/${userId}`, {is_login: false});
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    dispatch(
      setAuth({
        isLoggedIn: false,
        currentUser: null,
        token: null,
      }),
    );
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
};
