import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import wishListSlice from './wishList-reducer'

export const store = configureStore({
    reducer:{
        wishList: wishListSlice.reducer
    }
})
