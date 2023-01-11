import { createSlice } from "@reduxjs/toolkit";

const initialState = {data:{loginData : {}}}
const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers:{
        login : (state,action) => {
            state.data={loginData:{ ...action.payload}}
        },
        logout : (state,action) =>{
           
            state.data={loginData:[initialState, action.payload]}
        }
        
    }
})

export default loginSlice

export const {login,logout} = loginSlice.actions