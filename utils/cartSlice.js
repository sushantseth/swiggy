import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState :{
        items : []
    } ,
    reducers :{
        addItem : (state, action) =>{
            state.items.push(action.payload)
        },
        clearItem : (state) =>{
            state.items = [];
    },
        removeItem : (state, action) =>{
        state.items.slice(action.payload,1)
    }
}
})

export const {addItem, removeItem, clearItem} = cartSlice.actions;

export default cartSlice.reducer;

