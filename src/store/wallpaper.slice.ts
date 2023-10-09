import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type InitialState = {
  color: string;
  image: string;
  position: string;
  repeat: string;
  size: string;
};

const initialState = {
  color: '#008083',
  image: '',
  position: '',
  repeat: '',
  size: '',
} as InitialState;

const themeSlice = createSlice({
  initialState,
  name: 'wallpaper',
  reducers: {
    resetWallpaper() {
      localStorage.setItem('backgroundColor', initialState.color);
      localStorage.setItem('backgroundImage', initialState.image);
      localStorage.setItem('backgroundPosition', initialState.position);
      localStorage.setItem('backgroundRepeat', initialState.repeat);
      localStorage.setItem('backgroundSize', initialState.size);
      return initialState;
    },

    setWallpaperColor(state, action: PayloadAction<string>) {
      state.color = action.payload;
      localStorage.setItem('backgroundColor', state.color);
    },

    setWallpaperImage(state, action: PayloadAction<string>) {
      state.image = action.payload;
      localStorage.setItem('backgroundImage', state.image);
    },

    setWallpaperPosition(state, action: PayloadAction<string>) {
      state.position = action.payload;
      localStorage.setItem('backgroundPosition', state.position);
    },

    setWallpaperRepeat(state, action: PayloadAction<string>) {
      state.repeat = action.payload;
      localStorage.setItem('backgroundRepeat', state.repeat);
    },

    setWallpaperSize(state, action: PayloadAction<string>) {
      state.size = action.payload;
      localStorage.setItem('backgroundSize', state.size);
    },
  },
});

export const {
  resetWallpaper,
  setWallpaperColor,
  setWallpaperImage,
  setWallpaperPosition,
  setWallpaperRepeat,
  setWallpaperSize,
} = themeSlice.actions;

export default themeSlice.reducer;
