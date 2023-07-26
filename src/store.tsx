// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import diaryReducer from './features/diarySlice';

const store = configureStore({
  reducer: {
    diary: diaryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
