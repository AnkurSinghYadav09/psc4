const initialValue = {
  token: "",
  isAuth: false,
  isError: "",
};

const authReducer = (state = initialValue, action) => {
//   console.log("reducer me payload", action.payload);
  switch (action.type) {
    case "loginSuccess":
      return { ...state, token: action.payload, isAuth: true };
    case "loginFailure":
      return { ...state, isAuth: false, isError: action.paylaod };
    default:
      return state;
  }
};

export default authReducer;
