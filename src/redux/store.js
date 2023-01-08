import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import wishListSlice from './wishList-reducer'
import cartSlice from './cart-reducer'
import categorySlice from './categoryReducer'

export const store = configureStore({
    reducer:{
        wishList: wishListSlice.reducer,
        cart: cartSlice.reducer,
        category: categorySlice.reducer
    }
})
