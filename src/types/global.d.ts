declare module '*.svg' {
  import React from 'react';

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

interface BaseItem {
  id: string;
  name: string;
  type: string;
}

interface Content {
  link: string;
  paragraph: string;
}

interface File extends BaseItem {
  content: Content;
  type: 'file';
}

interface Folder extends BaseItem {
  files: File[];
  type: 'folder';
}

interface Button extends BaseItem {
  action: 'toggle-theme';
  type: 'button';
}

interface Image extends BaseItem {
  src: string;
  type: 'image';
}

type Item = Button | File | Folder | Image;
