import { CloseIcon, CollapseIcon, ExpandIcon } from '@/assets/svg/index.svg';
import clsx from 'clsx';

import styles from './WindowButton.module.scss';

export default function WindowButton({ onClick, type }: { onClick: () => void; type: string }) {
  return (
    <button className={styles.button} onClick={onClick} type="button">
      {type === 'collapse' && (
        <div className={clsx(styles.icon, styles.collapse)}>
          <CollapseIcon />
        </div>
      )}
      {type === 'expand' && (
        <div className={clsx(styles.icon, styles.expand)}>
          <ExpandIcon />
        </div>
      )}
      {type === 'close' && (
        <div className={clsx(styles.icon, styles.close)}>
          <CloseIcon />
        </div>
      )}
    </button>
  );
}
