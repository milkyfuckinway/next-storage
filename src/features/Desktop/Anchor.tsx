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
  file: DesktopFile;
  handleUnhide: (item: DesktopFile) => void;
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
        <Icon
          active={active === file.id}
          icon={file.type}
          size="small"
          src={file.type === 'image' ? file.src : ''}
        />
        <div className={styles.anchor__text}>{file.name}</div>
      </div>
    </button>
  );
}
