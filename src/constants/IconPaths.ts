interface IconSize {
  big: string;
  medium: string;
  small: string;
}

interface IconPaths {
  briefcase: IconSize;
  document_closed: IconSize;
  document_opened: IconSize;
  folder_closed: IconSize;
  folder_opened: IconSize;
  html: IconSize;
  internet_explorer: IconSize;
  themes: IconSize;
}

const iconPaths: IconPaths = {
  briefcase: {
    big: '/icons/briefcase48.png',
    medium: '/icons/briefcase32.png',
    small: '/icons/briefcase16.png',
  },
  document_closed: {
    big: '/icons/notepad48.png',
    medium: '/icons/notepad32.png',
    small: '/icons/notepad16.png',
  },
  document_opened: {
    big: '/icons/file48.png',
    medium: '/icons/file32.png',
    small: '/icons/file16.png',
  },
  folder_closed: {
    big: '/icons/folder_closed48.png',
    medium: '/icons/folder_closed32.png',
    small: '/icons/folder_closed16.png',
  },
  folder_opened: {
    big: '/icons/folder_opened48.png',
    medium: '/icons/folder_opened32.png',
    small: '/icons/folder_opened16.png',
  },
  html: {
    big: '/icons/html48.png',
    medium: '/icons/html32.png',
    small: '/icons/html16.png',
  },
  internet_explorer: {
    big: '/icons/internetexplorer48.png',
    medium: '/icons/internetexplorer32.png',
    small: '/icons/internetexplorer16.png',
  },
  themes: {
    big: '/icons/themes48.png',
    medium: '/icons/themes32.png',
    small: '/icons/themes16.png',
  },
};

export default iconPaths;
