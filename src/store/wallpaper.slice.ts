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
    setWallpaperColor(state, action: PayloadAction<string>) {
      state.color = action.payload;
    },
    setWallpaperImage(state, action: PayloadAction<string>) {
      state.image = action.payload;
    },

    setWallpaperPosition(state, action: PayloadAction<string>) {
      state.position = action.payload;
    },

    setWallpaperRepeat(state, action: PayloadAction<string>) {
      state.repeat = action.payload;
    },

    setWallpaperSize(state, action: PayloadAction<string>) {
      state.size = action.payload;
    },
  },
});

export const {
  setWallpaperColor,
  setWallpaperImage,
  setWallpaperPosition,
  setWallpaperRepeat,
  setWallpaperSize,
} = themeSlice.actions;

export default themeSlice.reducer;
