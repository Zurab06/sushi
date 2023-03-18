import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './features/cartSlice';
import personalData from './features/personalData';
export const store = configureStore({
  reducer: {
    cartSlice,
    personalData
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
