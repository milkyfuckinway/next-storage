import clsx from 'clsx';
import { useState } from 'react';

import styles from './Tabs.module.scss';

export default function Tabs() {
  const [active, setActive] = useState(1);
  return (
    <div className={styles.body}>
      <div className={styles.buttons}>
        <button
          className={clsx(styles.button, active === 1 ? styles.active : '')}
          onClick={() => setActive(1)}
          type="button"
        >
          tab
        </button>
        <button
          className={clsx(styles.button, active === 2 ? styles.active : '')}
          onClick={() => setActive(2)}
          type="button"
        >
          tab
        </button>
        <button
          className={clsx(styles.button, active === 3 ? styles.active : '')}
          onClick={() => setActive(3)}
          type="button"
        >
          tab
        </button>
        <button
          className={clsx(styles.button, active === 4 ? styles.active : '')}
          onClick={() => setActive(4)}
          type="button"
        >
          tab
        </button>
        <button
          className={clsx(styles.button, active === 5 ? styles.active : '')}
          onClick={() => setActive(5)}
          type="button"
        >
          tab
        </button>
      </div>
      {active === 1 && <div className={styles.content}>content1</div>}
      {active === 2 && <div className={styles.content}>content2</div>}
      {active === 3 && <div className={styles.content}>content3</div>}
      {active === 4 && <div className={styles.content}>content4</div>}
      {active === 5 && <div className={styles.content}>content5</div>}
    </div>
  );
}
