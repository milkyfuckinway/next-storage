declare module '*.svg' {
  import React from 'react';

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

interface BaseFile {
  icon: string;
  id: string;
  name: string;
  path: string;
  type: 'button' | 'folder' | 'image' | 'text';
}

interface TextContent {
  link: string;
  paragraph: string;
}

interface TextFile extends BaseFile {
  content: TextContent;
  type: 'text';
}

interface FolderFile extends BaseFile {
  files: TextFile[];
  type: 'folder';
}

interface ButtonFile extends BaseFile {
  action: 'toggle-theme';
  type: 'button';
}

interface ImageFile extends BaseFile {
  src: string;
  type: 'image';
}
interface Application extends BaseFile {
  action: string;
  type: 'application';
}

type DesktopFile = Application | ButtonFile | FolderFile | ImageFile | TextFile;
