
import { createSlice } from "@reduxjs/toolkit";

const initialState = {data:{categoryItem : '', genderItem:''}}
const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers:{
      getCategory : (state,action) => {
            state.data={categoryItem: action.payload}
        },
      getGender : (state,action) => {
            state.data={genderItem: action.payload}
        },

    }
})

export default categorySlice

export const { getCategory,getGender } = categorySlice.actions