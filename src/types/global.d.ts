declare module '*.svg' {
  import React from 'react';

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

interface Content {
  link: string;
  paragraph: string;
}

interface File {
  content: Content;
  id: string;
  name: string;
  type: 'file';
}

interface Folder {
  files: File[];
  id: string;
  name: string;
  type: 'folder';
}

interface Button {
  action: 'toggle-theme';
  id: string;
  name: string;
  type: 'button';
}

type Item = Button | File | Folder;
