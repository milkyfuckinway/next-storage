import Icon from '@/entities/Icon/Icon';
import {
  addOpenedFile,
  increaceZIndex,
  removeHiddenFile,
  setFileActive,
} from '@/store/files.slice';
import { useAppSelector } from '@/store/store';
import clsx from 'clsx';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';

import styles from './Label.module.scss';

export default function Label({ className, item }: { className?: string; item: DesktopFile }) {
  const dispatch = useDispatch();
  const globalZIndex = useAppSelector((state) => state.files.zIndex);
  const windowRef = useRef<HTMLDivElement>(null);
  const openedList = useAppSelector((state) => state.files.openedList);
  const hiddenList = useAppSelector((state) => state.files.hiddenList);

  const setCurrentFileActive = () => {
    dispatch(setFileActive(item.id));
    if (windowRef.current) {
      windowRef.current.style.zIndex = `${globalZIndex}`;
      dispatch(increaceZIndex());
    }
  };

  const handleClick = () => {
    dispatch(addOpenedFile(item));
    setCurrentFileActive();

    if (hiddenList.includes(item.id)) {
      dispatch(removeHiddenFile(item.id));
    }
  };

  return (
    <button
      className={clsx(styles.label, openedList.includes(item) ? styles.active : '')}
      onClick={handleClick}
      type="button"
    >
      <Icon item={item} size="big" />
      <div className={clsx(className, styles.label__name)}>{item.name}</div>
    </button>
  );
}
