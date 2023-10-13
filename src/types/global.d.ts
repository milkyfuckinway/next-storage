declare module '*.svg' {
  import React from 'react';

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

interface BaseFile {
  icon: 'document' | 'folder' | 'image' | 'theme';
  id: string;
  name: string;
  path: string;
  type: 'button' | 'document' | 'folder' | 'image';
}

interface DocumentContent {
  link: string;
  paragraph: string;
}

interface DocumentFile extends BaseFile {
  content: DocumentContent;
  type: 'document';
}

interface FolderFile extends BaseFile {
  files: DocumentFile[];
  type: 'folder';
}

interface ImageFile extends BaseFile {
  src: string;
  type: 'image';
}
interface Application extends BaseFile {
  action: string;
  type: 'application';
}

type DesktopFile = Application | DocumentFile | FolderFile | ImageFile;
