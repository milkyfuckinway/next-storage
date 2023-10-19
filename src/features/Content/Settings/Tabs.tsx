import clsx from 'clsx';
import { useState } from 'react';

import styles from './Tabs.module.scss';

export default function Tabs({
  elements,
}: {
  elements: { element: React.JSX.Element; id: number; name: string }[];
}) {
  const [active, setActive] = useState(1);

  return (
    <div className={styles.body}>
      <div className={styles.buttons}>
        {elements.map((element) => (
          <button
            className={clsx(styles.button, active === element.id ? styles.active : '')}
            key={element.id}
            onClick={() => setActive(element.id)}
            type="button"
          >
            {element.name}
          </button>
        ))}
      </div>
      {elements.map(
        (element) =>
          element.id === active && (
            <div className={styles.content} key={element.id}>
              {element.element}
            </div>
          )
      )}
    </div>
  );
}
