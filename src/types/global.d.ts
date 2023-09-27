declare module '*.svg' {
  import React from 'react';

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

type Item = {
  files: Item[] | undefined;
  id: string;
  name: string;
  type: string;
};
