import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth/reducer";
import productReducer from "./product/productreducer";

const combine= combineReducers({
      authReducer: authReducer,
      productReducer: productReducer
})


const Store=legacy_createStore(combine,applyMiddleware(thunk));


export {Store};
