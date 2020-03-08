//this will combine all of our states together
// all the ruducers we will write wiill go into ths file

import { combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import shopReducer from './shop/shop.reducer'
import storage from 'redux-persist/lib/storage'
import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'
import directoryReducer from './directory/directory.reducer'
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer)