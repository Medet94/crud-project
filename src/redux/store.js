import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import counterSlice from './slices/counterSlice';

const store = configureStore({
  reducer: {
    users: userSlice,
    counter: counterSlice,
  },
});

export default store;
