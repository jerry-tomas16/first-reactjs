export const SET_DATA_MENUS = "menu/SET_DATA_MENUS";

export const setDataMenus = (data) => ({
  type: SET_DATA_MENUS,
  payload: data,
});

export const setDataMenusAsync = (data) => (dispatch) => {
  console.log("data", data);
  dispatch(setDataMenus(data));
  return Promise.resolve(data);
};
