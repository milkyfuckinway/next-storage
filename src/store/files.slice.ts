import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type InitialState = {
  active: Item | undefined;
  files: Item[];
  hiddenIds: string[];
  openedIds: string[];
  zIndex: number;
};

const initialState = {
  active: undefined,
  files: [
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
  ],
  hiddenIds: [],
  openedIds: [],
  zIndex: 1,
} as InitialState;

const filesSlice = createSlice({
  initialState,
  name: 'files',
  reducers: {
    addHiddenFile(state, action: PayloadAction<string>) {
      state.hiddenIds = [...state.hiddenIds, action.payload];
    },
    addOpenedFile(state, action: PayloadAction<string>) {
      state.openedIds = [...state.openedIds, action.payload];
    },
    increaceZIndex(state) {
      state.zIndex++;
    },
    removeHiddenFile(state, action: PayloadAction<string>) {
      state.hiddenIds = state.hiddenIds.filter((a) => a !== action.payload);
    },
    removeOpenedFile(state, action: PayloadAction<string>) {
      state.openedIds = state.openedIds.filter((a) => a !== action.payload);
    },
    setFileActive(state, action: PayloadAction<Item>) {
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
