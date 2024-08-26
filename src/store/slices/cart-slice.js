import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        //reducer to add products to the cart
        addToCart(state, action) {
            state.push(action.payload);
        },

        //reducer to remove products from the cart
        removeFromCart(state, action) {
            const index = state.findIndex(item => item.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;