import { createSlice } from "@reduxjs/toolkit";

const initialState = {data:{loginData : {}}}
const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers:{
        login : (state,action) => {
            state.data={loginData:{ ...action.payload}}
        },
        // logout:(state,action)=>{
        //     state.data={loginData:{}}
        // }
        
    }
})

export default loginSlice

export const {login} = loginSlice.actions