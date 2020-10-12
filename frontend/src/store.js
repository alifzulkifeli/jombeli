import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
	productListReducer,
	productDetailsReducer,
} from "./reducers/productRedducers";
import { cartReducer } from "./reducers/cartReducers";
import { userLoginReducer ,userRegisterReducer ,  userDetailsReducer,
<<<<<<< HEAD
	userUpdateProfileReducer,
	userListReducer,
	userDeleteReducer,
	userUpdateReducer} from "./reducers/userReducers";
import { orderCreateReducer, orderDetailsReducer, orderListMyReducer, orderPayReducer } from './reducers/orderReducers'
=======
	userUpdateProfileReducer} from "./reducers/userReducers";
import { orderCreateReducer,  orderDetailsReducer, } from './reducers/orderReducers'
>>>>>>> main


const reducer = combineReducers({
	productList: productListReducer,
	productDetails: productDetailsReducer,
	cart: cartReducer,
	userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
	userDetails: userDetailsReducer,
	userUpdateProfile: userUpdateProfileReducer,
	orderCreate: orderCreateReducer,
	orderDetails: orderDetailsReducer,
<<<<<<< HEAD
	orderPay: orderPayReducer,
	orderListMy: orderListMyReducer,
	userList: userListReducer,
	userDelete: userDeleteReducer,
	userUpdate: userUpdateReducer,
=======
>>>>>>> main
});

const cartItemFromStorage = localStorage.getItem("cartItems")
	? JSON.parse(localStorage.getItem("cartItems"))
	: [];

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
	cart: {
    cartItems: cartItemFromStorage,
    shippingAddress: shippingAddressFromStorage,
  }, userLogin: { userInfo: userInfoFromStorage },
};
const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
