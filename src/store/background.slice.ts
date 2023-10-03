import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type InitialState = {
  backgroundImage: string;
};

const initialState = {
  backgroundImage: '',
} as InitialState;

const backgroundSlice = createSlice({
  initialState,
  name: 'files',
  reducers: {
    resetBackgroundImage(state) {
      state.backgroundImage = '';
    },
    setBackgroundImage(state, action: PayloadAction<string>) {
      state.backgroundImage = action.payload;
    },
  },
});

export const { resetBackgroundImage, setBackgroundImage } = backgroundSlice.actions;

export default backgroundSlice.reducer;
