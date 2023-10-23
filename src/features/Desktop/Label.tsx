import IconComponent from '@/components/ui/IconComponent';
import {
  addOpenedFile,
  increaceZIndex,
  removeHiddenFile,
  setFileActive,
} from '@/shared/store/files.slice';
import { useAppSelector } from '@/shared/store/store';
import clsx from 'clsx';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';

import styles from './Label.module.scss';

export default function Label({ item, type = '' }: { item: DesktopFile; type?: string }) {
  const dispatch = useDispatch();
  const globalZIndex = useAppSelector((state) => state.files.zIndex);
  const windowRef = useRef<HTMLDivElement>(null);
  const openedList = useAppSelector((state) => state.files.openedList);
  const hiddenList = useAppSelector((state) => state.files.hiddenList);
  const labelBackgroundColor = useAppSelector((state) => state.settings.labelBackgroundColor);

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
      <IconComponent item={item} size="big" />
      <div
        className={styles.label__name}
        style={{ backgroundColor: type === 'desktop' ? labelBackgroundColor : '' }}
      >
        {item.name}
      </div>
    </button>
  );
}
