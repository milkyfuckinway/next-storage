import { useAppSelector } from '@/store/store';
import clsx from 'clsx';

import styles from './Icon.module.scss';

export default function Icon({
  item,
  size,
}: {
  item: DesktopFile;
  size: 'big' | 'medium' | 'small';
}) {
  const openedList = useAppSelector((state) => state.files.openedList);

  return (
    <div
      className={clsx(
        styles[size],
        styles.icon,
        styles[item.icon],
        openedList.includes(item) ? styles.opened : ''
      )}
      style={
        item.type === 'image' ? { backgroundImage: `url("${item.src}")` } : { backgroundImage: '' }
      }
    />
  );
}
