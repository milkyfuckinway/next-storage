import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const files = [
  {
    files: [
      {
        content: { link: 'link-d', paragraph: 'paragraph-d' },
        id: uuidv4(),
        name: 'd',
        type: 'file',
      },
      {
        content: { link: 'link-e', paragraph: 'paragraph-e' },
        id: uuidv4(),
        name: 'e',
        type: 'file',
      },
    ],
    id: uuidv4(),
    name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    type: 'folder',
  },
  {
    content: { link: 'link-b', paragraph: 'paragraph-b' },
    id: uuidv4(),
    name: 'bbbbbbbbb bbbbbb bbbbbbbb',
    type: 'file',
  },
  {
    content: { link: 'link-c', paragraph: 'paragraph-c' },
    id: uuidv4(),
    name: 'c',
    type: 'file',
  },
  { action: 'toggle-theme', id: uuidv4(), name: 'Изменить тему', type: 'button' },
  {
    files: [
      {
        action: 'image',
        id: uuidv4(),
        name: 'Изображение',
        src: '/images/uv-texture.png',
        type: 'image',
      },
      {
        action: 'image',
        id: uuidv4(),
        name: 'Изображение',
        src: '/images/blackThatch.webp',
        type: 'image',
      },
      {
        action: 'image',
        id: uuidv4(),
        name: 'Изображение',
        src: '/images/land.webp',
        type: 'image',
      },
    ],
    id: uuidv4(),
    name: 'Обои',
    type: 'folder',
  },
];

type InitialState = {
  active: string;
  files: Item[];
  hiddenList: string[];
  openedList: Item[];
  zIndex: number;
};

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

    addOpenedFile(state, action: PayloadAction<Item>) {
      if (!state.openedList.some((item) => item.id === action.payload.id)) {
        state.openedList.push(action.payload);
      }
    },

    increaceZIndex(state) {
      state.zIndex++;
    },

    removeHiddenFile(state, action: PayloadAction<string>) {
      state.hiddenList = state.hiddenList.filter((a) => a !== action.payload);
    },

    removeOpenedFile(state, action: PayloadAction<Item>) {
      state.openedList = state.openedList.filter((a) => a.id !== action.payload.id);
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
