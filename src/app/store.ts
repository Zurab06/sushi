import authSlice from './features/authSlice';
import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './features/cartSlice';
import personalData from './features/personalData';
import { useDispatch } from 'react-redux';
export const store = configureStore({
  reducer: {
    cart: cartSlice,
    personalData: personalData,
    auth: authSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
