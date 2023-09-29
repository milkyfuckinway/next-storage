import { CloseIcon, CollapseIcon, ExpandIcon } from '@/assets/svg/index.svg';

import styles from './WindowButton.module.scss';

export default function WindowButton({ onClick, type }: { onClick: () => void; type: string }) {
  return (
    <button className={styles.button} onClick={onClick} type="button">
      <div className={styles.button__icon}>
        {type === 'collapse' && <CollapseIcon />}
        {type === 'expand' && <ExpandIcon />}
        {type === 'close' && <CloseIcon />}
      </div>
    </button>
  );
}
