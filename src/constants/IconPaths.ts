type IconSize = 'big' | 'medium' | 'small';

type IconState = {
  [size in IconSize]: string;
};

type IconType = {
  closed: IconState;
  opened: IconState;
};

type IconPaths = {
  [key: string]: IconType;
};

const iconPaths: IconPaths = {
  briefcase: {
    closed: {
      big: '/icons/briefcase48.png',
      medium: '/icons/briefcase32.png',
      small: '/icons/briefcase16.png',
    },
    opened: {
      big: '/icons/briefcase48.png',
      medium: '/icons/briefcase32.png',
      small: '/icons/briefcase16.png',
    },
  },
  document: {
    closed: {
      big: '/icons/notepad48.png',
      medium: '/icons/notepad32.png',
      small: '/icons/notepad16.png',
    },
    opened: {
      big: '/icons/file48.png',
      medium: '/icons/file32.png',
      small: '/icons/file16.png',
    },
  },

  folder: {
    closed: {
      big: '/icons/folder_closed48.png',
      medium: '/icons/folder_closed32.png',
      small: '/icons/folder_closed16.png',
    },
    opened: {
      big: '/icons/folder_opened48.png',
      medium: '/icons/folder_opened32.png',
      small: '/icons/folder_opened16.png',
    },
  },

  html: {
    closed: {
      big: '/icons/html48.png',
      medium: '/icons/html32.png',
      small: '/icons/html16.png',
    },
    opened: {
      big: '/icons/html48.png',
      medium: '/icons/html32.png',
      small: '/icons/html16.png',
    },
  },
  internet_explorer: {
    closed: {
      big: '/icons/internet_explorer48.png',
      medium: '/icons/internet_explorer32.png',
      small: '/icons/internet_explorer16.png',
    },
    opened: {
      big: '/icons/internet_explorer48.png',
      medium: '/icons/internet_explorer32.png',
      small: '/icons/internet_explorer16.png',
    },
  },
  theme: {
    closed: {
      big: '/icons/theme48.png',
      medium: '/icons/theme32.png',
      small: '/icons/theme16.png',
    },
    opened: {
      big: '/icons/theme48.png',
      medium: '/icons/theme32.png',
      small: '/icons/theme16.png',
    },
  },
};

export default iconPaths;
