import { CloseIcon, CollapseIcon, ExpandIcon } from '@/shared/assets/svg/index.svg';
import clsx from 'clsx';

import ButtonComponent from '../../components/ui/ButtonComponent';
import styles from './WindowControls.module.scss';

export default function WindowControls({ onClick, type }: { onClick: () => void; type: string }) {
  return (
    <ButtonComponent onClick={onClick}>
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
    </ButtonComponent>
  );
}