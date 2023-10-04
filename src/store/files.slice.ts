import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const files = [
  {
    files: [
      {
        content: { link: 'link-d', paragraph: 'paragraph-d' },
        id: 'J9DtIJTfi-eekN2fpUlBv',
        name: 'd',
        type: 'text',
      },
      {
        content: { link: 'link-e', paragraph: 'paragraph-e' },
        id: 'nvZ14bVsTEc5Fwhw98yJa',
        name: 'e',
        type: 'text',
      },
    ],
    id: 'oH1fgNepG-5GLoELbnbkD',
    name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    type: 'folder',
  },
  {
    content: { link: 'link-b', paragraph: 'paragraph-b' },
    id: 'NLtJjyLfS5znqdZ0UEOy1',
    name: 'bbbbbbbbb bbbbbb bbbbbbbb',
    type: 'text',
  },
  {
    content: { link: 'link-c', paragraph: 'paragraph-c' },
    id: '_P2WH6uvhqFtaOdjuCvDw',
    name: 'c',
    type: 'text',
  },
  { action: 'toggle-theme', id: 'HDSTMs-GiIWOYIUH7B5jD', name: 'Изменить тему', type: 'button' },
  {
    files: [
      {
        action: 'image',
        id: 'mVHhgYdYihZCT7XOR_v8Q',
        name: 'Изображение',
        src: '/images/uv-texture.png',
        type: 'image',
      },
      {
        action: 'image',
        id: 'gkLu58ba1VoGRWQXsu8oi',
        name: 'Изображение',
        src: '/images/black-thatch.webp',
        type: 'image',
      },
      {
        action: 'image',
        id: 'M5d7gikhGycQvjXnQZGn_',
        name: 'Изображение',
        src: '/images/land.webp',
        type: 'image',
      },
    ],
    id: '8fMd6-ag08Yg6zBNOKhRU',
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
