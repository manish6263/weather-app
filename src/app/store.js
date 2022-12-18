import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
// import recommendationReducer from '../features/recommendations/recommendationSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // recommendations: recommendationReducer
  },
});