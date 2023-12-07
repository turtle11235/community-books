import { configureStore } from '@reduxjs/toolkit';
import { commonSlice } from '../features/common.slice';

export const store = configureStore({
  reducer: {
    common: commonSlice.reducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;