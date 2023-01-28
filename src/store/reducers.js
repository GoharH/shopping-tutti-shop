import { combineReducers } from "redux";
import CategoryReducer from './category-reducer';
import ProductReducer from './product-reducer';
import UserReducer from './user-reducer';

const rootReducer = combineReducers({
    CategoryReducer,
    ProductReducer,
    UserReducer,

})
export default rootReducer