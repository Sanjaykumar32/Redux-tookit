import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import TransactionReduser from '../features/TransactionReduser';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    Transaction:  TransactionReduser,
   
  },
});
