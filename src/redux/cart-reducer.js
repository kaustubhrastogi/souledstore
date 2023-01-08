import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: { cartItem: {}, count:1 } }

// cartItem: {
//    1:{item: {id: 1, name:'Smart Tv', price:'200$'}, count:5}
//    2:{item: {id: 2, name:'Smart Tv', price:'200$'}, count:2}
//    3:{item: {id: 3, name:'Smart Tv', price:'200$'}, count:1}
//}

// {id: 1, name:'Smart Tv', price:'200$'}

// action.payload = {id: 1, name:'Smart Tv', price:'200$'}
// action.payload.id = 1
// if 1 is present in cartItem as a key them increase count
// else create a key 1 and assign action.payload as a value to id

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action) => {
            //  state.data = {cartItem: [...state.data.cartItem, action.payload] }
            state.data={cartItem:{...state.data.cartItem, [action.payload.id]:action.payload}}
            console.log('reducer==>',state.data)
        },
        // addCart: (state, action) => {
        //     if (Object.keys(state.data.cartItem).length === 0) {
        //         state.data = {
        //             cartItem: { [action.payload.id]: { ...action.payload } },
        //         };
        //     } else if (state.data.cartItem.hasOwnProperty(action.payload.id)) {
        //         let count1 = state.data.cartItem[action.payload.id].count + 1;
        //         state.data = {
        //             cartItem: {
        //                 ...state.data.cartItem,
        //                 [action.payload.id]: {
        //                     ...state.data.cartItem[action.payload.id],
        //                     count: count1,
        //                 },
        //             },
        //         };
        //     } else {
        //         state.data = {
        //             cartItem: {
        //                 ...state.data.cartItem,
        //                 [action.payload.id]: { ...action.payload },
        //             },
        //         };
        //     }
        // },
        removeFromCart: (state, action) => {
            const newArray = Object.values(state.data.cartItem).filter((item, index) => index !== action.payload)
            state.data = { cartItem: newArray }
        },
        removeAll: () => { },
        // inrement and decrement reducer
        increment: (state,action) => {
            state.data.count=action.payload + 1
        }
    }
})

export const { addCart, removeFromCart,increment } = cartSlice.actions

export default cartSlice