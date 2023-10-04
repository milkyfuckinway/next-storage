import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const files = [
  {
    files: [
      {
        content: { link: 'link-d', paragraph: 'paragraph-d' },
        id: '5',
        name: 'd',
        type: 'text',
      },
      {
        content: { link: 'link-e', paragraph: 'paragraph-e' },
        id: '6',
        name: 'e',
        type: 'text',
      },
    ],
    id: '1',
    name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    type: 'folder',
  },
  {
    content: { link: 'link-b', paragraph: 'paragraph-b' },
    id: '2',
    name: 'bbbbbbbbb bbbbbb bbbbbbbb',
    type: 'text',
  },
  {
    content: { link: 'link-c', paragraph: 'paragraph-c' },
    id: '3',
    name: 'c',
    type: 'text',
  },
  { action: 'toggle-theme', id: '7', name: 'Изменить тему', type: 'button' },
  {
    files: [
      {
        action: 'image',
        id: '8',
        name: 'Изображение',
        src: '/images/uv-texture.png',
        type: 'image',
      },
      {
        action: 'image',
        id: '9',
        name: 'Изображение',
        src: '/images/black-thatch.webp',
        type: 'image',
      },
      {
        action: 'image',
        id: '10',
        name: 'Изображение',
        src: '/images/land.webp',
        type: 'image',
      },
    ],
    id: '4',
    name: 'Обои',
    type: 'folder',
  },
];

type InitialState = {
  active: string;
  files: DesktopFile[];
  hiddenList: string[];
  openedList: DesktopFile[];
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

    addOpenedFile(state, action: PayloadAction<DesktopFile>) {
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

    removeOpenedFile(state, action: PayloadAction<DesktopFile>) {
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
