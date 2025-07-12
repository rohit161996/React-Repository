import { createSlice, current } from "@reduxjs/toolkit";

// Return cartSlice Object
// {
//    actions:{
//               addItems
//            },
//            reducer
// }
const cartSlice = createSlice({
    // Configurations 
    name : 'cart',
    // This is the initial state which will be modified...
    initialState : {
        // These are cart items...
        items : []
    },
    // Write the actions in the reducers...
    reducers: {
        // Actions -> addItem
        // Mapped to a reducer function.
        addItem: (state, action)=>{
            // Mutating the state 
            // items is an array so we will push()
            state.items.push(action.payload);
        },
        // Actions -> removeItem
        // Mapped to a reducer function.
        removeItem: (state)=>{
            // items is an array so we will pop()
            state.items.pop();
        },
        // Actions -> clearCart
        // Mapped to a reducer function.
        clearCart : (state) => {
            state.items.length = 0; // []
            // state = [] This will not work
            console.log(current(state));

            // OR
            // return {items : []};
        }
    }
})

// Export the actions in the reducers in the json
export const {addItem, removeItem, clearCart} = cartSlice.actions;

// Export the reducer
export default cartSlice.reducer;