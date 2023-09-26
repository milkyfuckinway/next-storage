'use client';

import { useState } from 'react';

import styles from './Desktop.module.scss';
import Label from './Label';

const array = [
  {
    id: 1,
    name: 'a',
  },
  {
    id: 2,
    name: 'b',
  },
  {
    id: 3,
    name: 'c',
  },
];

export default function Desktop() {
  const [hidden, setHidden] = useState<Item[]>([]);
  const [active, setActive] = useState<Item | undefined>();
  const [scalableZIndex, setScalableZIndex] = useState<number>(1);

  const handleUnhide = (item: Item) => {
    setHidden(hidden.filter((a) => a !== item));
    setActive(item);
  };

  return (
    <div className={styles.screen}>
      <div className={styles.desktop}>
        {array.map((item) => (
          <Label
            active={active}
            hidden={hidden}
            item={item}
            key={item.id}
            scalableZIndex={scalableZIndex}
            setActive={setActive}
            setHidden={setHidden}
            setScalableZIndex={setScalableZIndex}
          >
            {item.name}
          </Label>
        ))}
      </div>
      <div className={styles.footer}>
        {hidden.map((item) => (
          <button key={item.id} onClick={() => handleUnhide(item)} type="button">
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}
