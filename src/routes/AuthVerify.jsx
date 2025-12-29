import React, {useEffect} from "react";
import {withRouter} from "./WithRouter";
import {jwtDecode} from "jwt-decode";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logOut} from "../../store/auth/actions";

const AuthVerify = (props) => {
  let location = props.router.location;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(
      logOut(
        () => {
          setTimeout(() => {
            navigate("/login");
          }, 100);
        },
        (error) => {
          console.log(error);
        },
      ),
    );
  };

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      let decodedJwt = jwtDecode(token);
      if (decodedJwt.exp * 1000 < Date.now()) {
        handleLogout();
      }
    }
  }, [location]);

  return <div></div>;
};

export default withRouter(AuthVerify);
