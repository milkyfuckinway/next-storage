import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type InitialState = {
  backgroundColor: string;
  backgroundImage: string;
  backgroundPosition: string;
  backgroundRepeat: string;
  backgroundSize: string;
  backgroundType: string;
  labelBackgroundColor: string;
};

const initialState = {
  backgroundColor: '#008083',
  backgroundImage: '',
  backgroundPosition: '',
  backgroundRepeat: '',
  backgroundSize: '',
  backgroundType: 'color',
  labelBackgroundColor: 'transparent',
} as InitialState;

const settingsSlice = createSlice({
  initialState,
  name: 'settings',
  reducers: {
    resetBackground() {
      return initialState;
    },

    setBackgroundColor(state, action: PayloadAction<string>) {
      state.backgroundColor = action.payload;
    },

    setBackgroundImage(state, action: PayloadAction<string>) {
      state.backgroundImage = action.payload;
    },

    setBackgroundPosition(state, action: PayloadAction<string>) {
      state.backgroundPosition = action.payload;
    },

    setBackgroundRepeat(state, action: PayloadAction<string>) {
      state.backgroundRepeat = action.payload;
    },

    setBackgroundSize(state, action: PayloadAction<string>) {
      state.backgroundSize = action.payload;
    },

    setBackgroundType(state, action: PayloadAction<string>) {
      state.backgroundType = action.payload;
    },

    setLabelBackgroundColor(state, action: PayloadAction<string>) {
      state.labelBackgroundColor = action.payload;
    },
  },
});

export const {
  resetBackground,
  setBackgroundColor,
  setBackgroundImage,
  setBackgroundPosition,
  setBackgroundRepeat,
  setBackgroundSize,
  setBackgroundType,
  setLabelBackgroundColor,
} = settingsSlice.actions;

export default settingsSlice.reducer;
