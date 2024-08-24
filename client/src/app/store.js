import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/Auth/AuthSlice';
import productReducer from '../features/Product/ProductSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    Auth : authReducer,
    Product: productReducer,
  },
});
