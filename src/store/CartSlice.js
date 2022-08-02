import React from 'react';
import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: {}
    },
    reducers: {
        increment: (state, data) => {
            let articul = data.payload
            if (state.value[articul] === undefined) state.value[articul] = 0
            state.value[articul]++
        },

        decrement: (state, data) => {
            let articul = data.payload
            if (state.value[articul] === undefined) state.value[articul] = 0
            if (state.value[articul] !== 0) state.value[articul]--
            else state.value[articul] = 0
        },

        forceDelete: (state, data) => {
            let articul = data.payload
            if (state.value[articul] <= 0) delete state.value[articul]
        },
    }
})

export const {increment, decrement, forceDelete} = CartSlice.actions
export const selectCart = state => state.cart.value
export default CartSlice.reducer