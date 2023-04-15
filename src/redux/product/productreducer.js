const intialValue = {
  products: [],
};

const productReducer = (state = intialValue, action) => {
//   console.log(state);
  switch (action.type) {
    case "productSuccess":
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export default productReducer;
