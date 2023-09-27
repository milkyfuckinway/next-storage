declare module '*.svg' {
  import React from 'react';

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

interface Content {
  link: string;
  paragraph: string;
}

type Item = {
  content: Content | undefined;
  files: Item[] | undefined;
  id: string;
  name: string;
  type: string;
};
