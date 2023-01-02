import { createSlice } from "@reduxjs/toolkit";

const initialState = {data:{wishListItem : []}}
const wishListSlice = createSlice({
    name: 'wishList',
    initialState,
    reducers:{
        addWish : (state,action) => {
            state.data={wishListItem:[...state.data.wishListItem, action.payload]}
        },
        removeWish : (state,action) =>{

        }
    }
})

export default wishListSlice

export const { addWish , removeWish} = wishListSlice.actions