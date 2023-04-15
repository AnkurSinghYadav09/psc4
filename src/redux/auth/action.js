import axios from "axios";

const LoginAction = (logindata) => {
  return (dispatch) => {
    try {
      //api
      axios
        .post("https://reqres.in/api/login", {
          email: logindata.email,
          password: logindata.password,
        })
        .then((res) => {
          //   console.log("succes login data from action");
          dispatch({ type: "loginSuccess", payload: res.data.token });
        });
    } catch (error) {
      console.log(error);
      dispatch({ type: "loginFailure", payload: error });
    }
  };
};

export { LoginAction };
