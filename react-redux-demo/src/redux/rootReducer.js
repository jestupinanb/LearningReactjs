import { combineReducers } from "redux";
import cakeReducer from "./cake/CakeReducer";
import IceCreamReducer from "./iceCream/IceCreamReducer";
import usersReducer from "./users/usersReducer";

const rootReducer = combineReducers({cake:cakeReducer,iceCream:IceCreamReducer,users:usersReducer})

export default rootReducer;