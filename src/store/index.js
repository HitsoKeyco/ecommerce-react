import { configureStore } from '@reduxjs/toolkit'
import products from './slices/products.slice'
import cart from './slices/cart.slice'
import modal from './slices/stateModal.slice'
import user from './slices/userSlice'

export default configureStore({
    reducer: {
        products,
        cart,
        modal,
        user
    }
})
