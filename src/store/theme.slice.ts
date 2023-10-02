import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type InitialState = {
  theme: string;
};

const initialState = {
  theme: 'light',
} as InitialState;

const themeSlice = createSlice({
  initialState,
  name: 'theme',
  reducers: {
    setTheme(state, action: PayloadAction<string>) {
      state.theme = action.payload;
    },
    toggleTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', state.theme);
    },
  },
});

export const { setTheme, toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
