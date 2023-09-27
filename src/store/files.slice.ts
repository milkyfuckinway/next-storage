import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type InitialState = {
  active: string;
  files: Item[];
  hiddenList: string[];
  openedList: string[];
  zIndex: number;
};

const files = [
  {
    id: '1',
    name: 'a',
  },
  {
    id: '2',
    name: 'b',
  },
  {
    id: '3',
    name: 'c',
  },
];

const initialState = {
  active: '',
  files,
  hiddenList: [],
  openedList: [],
  zIndex: 1,
} as InitialState;

const filesSlice = createSlice({
  initialState,
  name: 'files',
  reducers: {
    addHiddenFile(state, action: PayloadAction<string>) {
      state.hiddenList = [...state.hiddenList, action.payload];
    },
    addOpenedFile(state, action: PayloadAction<string>) {
      if (!state.openedList.includes(action.payload)) {
        state.openedList = [...state.openedList, action.payload];
      }
    },
    increaceZIndex(state) {
      state.zIndex++;
    },
    removeHiddenFile(state, action: PayloadAction<string>) {
      state.hiddenList = state.hiddenList.filter((a) => a !== action.payload);
    },
    removeOpenedFile(state, action: PayloadAction<string>) {
      state.openedList = state.openedList.filter((a) => a !== action.payload);
    },
    setFileActive(state, action: PayloadAction<string>) {
      state.active = action.payload;
    },
  },
});

export const {
  addHiddenFile,
  addOpenedFile,
  increaceZIndex,
  removeHiddenFile,
  removeOpenedFile,
  setFileActive,
} = filesSlice.actions;

export default filesSlice.reducer;
