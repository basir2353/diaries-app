// features/diarySlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DiaryEntry {
  id: number;
  date: string;
  content: string;
}

interface DiaryState {
  entries: DiaryEntry[];
}

const initialState: DiaryState = {
  entries: [],
};

const diarySlice = createSlice({
  name: 'diary',
  initialState,
  reducers: {
    addEntry: (state, action: PayloadAction<DiaryEntry>) => {
      state.entries.push(action.payload);
    },
  },
});

export const { addEntry } = diarySlice.actions;

export default diarySlice.reducer;
