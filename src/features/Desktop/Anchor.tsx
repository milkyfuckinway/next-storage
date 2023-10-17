import IconComponent from '@/components/ui/IconComponent';
import { addHiddenFile, removeHiddenFile, setFileActive } from '@/shared/store/files.slice';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';

import styles from './Anchor.module.scss';

export default function Anchor({
  active,
  hiddenList,
  item,
}: {
  active: string;
  hiddenList: string[];
  item: DesktopFile;
}) {
  const dispatch = useDispatch();

  const handleUnhide = () => {
    dispatch(setFileActive(item.id));
    if (hiddenList.includes(item.id)) {
      dispatch(removeHiddenFile(item.id));
    } else if (item.id === active) {
      dispatch(addHiddenFile(item.id));
    }
  };
  return (
    <button
      className={clsx(
        styles.anchor,
        active === item.id ? styles.active : '',
        hiddenList.includes(item.id) ? styles.hidden : ''
      )}
      key={item.id}
      onClick={handleUnhide}
      type="button"
    >
      <div className={styles.anchor__content}>
        <IconComponent item={item} size="small" />
        <div className={styles.anchor__text}>{item.name}</div>
      </div>
    </button>
  );
}
