import { createSlice } from "@reduxjs/toolkit";

const TransactionReduser = createSlice({
    name : "Transaction",
    initialState: [],
    reducers : {
        addTransaction : (state , action)=> {
           state.push(action.payload)
        },
        deleteTransaction : (state , action)=> {
          let {id} = action.payload
        //   console.log("reduser id ---" ,id);
           state = state.filter( el => el.id != action.payload )
        //    console.log("state - id --", state);
         }
    }
})

export default TransactionReduser.reducer
export const {addTransaction ,deleteTransaction} = TransactionReduser.actions