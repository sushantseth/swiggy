import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState :{
        items : [],
        itemObj : {}
    } ,
    reducers :{
        addItem : (state, action) =>{
            state.items.push(action.payload)
            if(state.itemObj[action.payload.id]){
                state.itemObj[action.payload.id]= state.itemObj[action.payload.id] + 1
            }else{
                state.itemObj[action.payload.id] = 1
            }
            
        },
        clearItem : (state) =>{
            state.items = [];
    },
        removeItem : (state, action) =>{
            if(state.itemObj[action.payload.id]){
                if(state.itemObj[action.payload.id] > 1){
                    state.itemObj[action.payload.id]= state.itemObj[action.payload.id] - 1
                }else{
                    state.itemObj[action.payload.id]= 0
                   const upd =  state?.items?.filter((item)=>{
                        return item.id != action.payload.id
                    })
                    state.items = [...upd]
                }
            }
    }
}
})

export const {addItem, removeItem, clearItem} = cartSlice.actions;

export default cartSlice.reducer;


