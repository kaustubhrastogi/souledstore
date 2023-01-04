import { createSlice } from "@reduxjs/toolkit";

const initialState = {data:{wishListItem : []}}
const wishListSlice = createSlice({
    name: 'wishList',
    initialState,
    reducers:{
        addWish : (state,action) => {
            state.data={wishListItem:[...state.data.wishListItem, action.payload]}
        },
        removeWishListItem : (state,action) =>{
            const newArray = state.data.wishListItem.filter((item,index)=>index != action.payload)
            state.data={ wishListItem: newArray}
        }
    }
})

export default wishListSlice

export const { addWish , removeWishListItem} = wishListSlice.actions