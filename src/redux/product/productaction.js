import axios from "axios";

const productAction = () => {
  let url =
    "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products?";

  return (dispatch) => {
    axios.get(url).then((res) => {
      dispatch({ type: "productSuccess", payload: res.data.data });
    });
  };
};

export { productAction };
