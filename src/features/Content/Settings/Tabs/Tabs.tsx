import clsx from 'clsx';
import { useState } from 'react';

import styles from './Tabs.module.scss';

export default function Tabs({
  tabs,
}: {
  tabs: { element: React.JSX.Element; id: number; name: string }[];
}) {
  const [active, setActive] = useState(1);

  return (
    <div className={styles.tabs}>
      <div className={styles.tabs__controls}>
        {tabs.map((tab) => (
          <button
            className={clsx(styles.tabs__control, active === tab.id ? styles.active : '')}
            key={tab.id}
            onClick={() => setActive(tab.id)}
            type="button"
          >
            {tab.name}
          </button>
        ))}
      </div>
      {tabs.map(
        (tab) =>
          tab.id === active && (
            <div className={styles.tabs__content} key={tab.id}>
              {tab.element}
            </div>
          )
      )}
    </div>
  );
}
