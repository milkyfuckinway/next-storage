import Icon from '@/entities/Icon/Icon';
import clsx from 'clsx';

import styles from './Anchor.module.scss';

export default function Anchor({
  active,
  file,
  handleUnhide,
  hiddenList,
}: {
  active: string;
  file: DesktopFile;
  handleUnhide: (file: DesktopFile) => void;
  hiddenList: string[];
}) {
  return (
    <button
      className={clsx(
        styles.anchor,
        active === file.id ? styles.active : '',
        hiddenList.includes(file.id) ? styles.hidden : ''
      )}
      key={file.id}
      onClick={() => handleUnhide(file)}
      type="button"
    >
      <div className={styles.anchor__content}>
        <Icon item={file} size="small" />
        <div className={styles.anchor__text}>{file.name}</div>
      </div>
    </button>
  );
}
