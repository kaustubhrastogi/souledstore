import { createSlice } from "@reduxjs/toolkit";

const initialState = {data:{wishListItem : []}}
const wishListSlice = createSlice({
    name: 'wishList',
    initialState,
    reducers:{
        addWish : (state,action) => {
            // console.log(action.payload,'hjdvh')
            if(state.data.wishListItem.length===0){
            state.data={wishListItem:[{...action.payload}]}
            } else{
                let newData = state.data.wishListItem.filter((i)=>i.id==action.payload.id)
                if(newData.length===0){
                    state.data={wishListItem:[...state.data.wishListItem, action.payload]}
                }
            }
        },
        removeWishListItem : (state,action) =>{
            const newArray = state.data.wishListItem.filter((item,index)=>item.id != action.payload)
            state.data={ wishListItem: newArray}
        }
    }
})

export default wishListSlice

export const { addWish , removeWishListItem} = wishListSlice.actions