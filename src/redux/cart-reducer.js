import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: { cartItem: {} } }

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
        // addCart: (state, action) => {
        //     //  state.data = {cartItem: [...state.data.cartItem, action.payload] }
        //     state.data = { cartItem: { ...state.data.cartItem, [action.payload.img]: action.payload } }
        //     console.log('reducer==>', state.data)
        // },
        addCart: (state, action) => {
            if (Object.keys(state.data.cartItem).length === 0) {
                state.data = {
                    cartItem: { [action.payload.img]: { ...action.payload } },
                };
            } else if (state.data.cartItem.hasOwnProperty(action.payload.id&& action.payload.name)) {
                let count1 = state.data.cartItem[action.payload.img].count + 1;
                state.data = {
                    cartItem: {
                        ...state.data.cartItem,
                        [action.payload.img]: {
                            ...state.data.cartItem[action.payload.img],
                            count: count1,
                        },
                    },
                };
            } else {
                state.data = {
                    cartItem: {
                        ...state.data.cartItem,
                        [action.payload.img]: { ...action.payload },
                    },
                };
            }
            // console.log("cartItem: ",state.data.cartItem)
        },
        removeFromCart: (state, action) => {
            let Item = delete state.data.cartItem[action.payload]
            state.data={cartItem:{...state.data.cartItem, ...Item}}
            console.log('item:',state.data.cartItem);
        },
        // removeFromCart: (state, action) => {
        //     const newArray = Object.values(state.data.cartItem).filter((item, index) => index !== action.payload)
        //     state.data = { cartItem: newArray }
        //     console.log('item:',state.data.cartItem);
        // },
        removeAll: () => { },
        // inrement and decrement reducer
        increment: (state, action) => {
            if (state.data.cartItem.hasOwnProperty(action.payload)) {
                let count1 = state.data.cartItem[action.payload].count + 1;
                state.data = {
                    cartItem: {
                        ...state.data.cartItem,
                        [action.payload]: {
                            ...state.data.cartItem[action.payload],
                            count: count1,
                        },
                    },
                };
            }else{
                console.log('cannot increase',action.payload)
                console.log('item:',state.data.cartItem);
            }
        },
        decrement: (state, action) => {
            if (state.data.cartItem.hasOwnProperty(action.payload)&& state.data.cartItem[action.payload].count >1) {
                let count1 = state.data.cartItem[action.payload].count - 1;
                state.data = {
                    cartItem: {
                        ...state.data.cartItem,
                        [action.payload]: {
                            ...state.data.cartItem[action.payload],
                            count: count1,
                        },
                    },
                };
            }else{
                console.log('cannot dec',action.payload)
            }
        }
    }
})

export const { addCart, removeFromCart, increment, decrement } = cartSlice.actions

export default cartSlice