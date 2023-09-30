import clsx from 'clsx';

import Icon from '../Icons/Icon';
import styles from './Anchor.module.scss';

export default function Anchor({
  active,
  file,
  handleUnhide,
  hiddenList,
}: {
  active: string;
  file: Item;
  handleUnhide: (item: Item) => void;
  hiddenList: string[];
}) {
  return (
    <button
      className={clsx(
        styles.anchor,
        file.type,
        active === file.id ? styles.active : '',
        hiddenList.includes(file.id) ? styles.hidden : ''
      )}
      key={file.id}
      onClick={() => handleUnhide(file)}
      type="button"
    >
      <div className={styles.anchor__content}>
        <Icon size="small" />
        <div className={styles.anchor__text}>{file.name}</div>
      </div>
    </button>
  );
}
