import {GET_DATA_EMPLOYEE} from "./type";

const initialState = {
  dataEmployee: [
    {
      name: "Jerry Smith",
      email: "jerry.smith@example.com",
      usia: 28,
      jenis_kelamin: "Laki-laki",
      pendidikan: "S1",
      status_pernikahan: "Menikah",
      alamat: "Jl. Merdeka No. 123, Jakarta",
      jabatan: "Software Engineer",
      status_kerja: "Karyawan Tetap",
    },
  ],
};

const EmployeeReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "value":
      return state;

    case GET_DATA_EMPLOYEE:
      return {
        ...state,
        dataEmployee: actions.payload,
      };
    default:
      return state;
  }
};

export default EmployeeReducer;
