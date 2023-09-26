'use client';

import { removeHiddenFile, setFileActive } from '@/store/files.slice';
import { useAppSelector } from '@/store/store';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';

import styles from './Desktop.module.scss';
import Label from './Label';

export default function Desktop() {
  const dispatch = useDispatch();
  const files = useAppSelector((state) => state.files.files);
  const hiddenIds = useAppSelector((state) => state.files.hiddenIds);
  const openedIds = useAppSelector((state) => state.files.openedIds);

  const handleUnhide = (item: Item) => {
    dispatch(removeHiddenFile(item.id));
    dispatch(setFileActive(item));
  };

  return (
    <div className={styles.screen}>
      <div className={styles.desktop}>
        {files.map((item) => (
          <Label item={item} key={item.id}>
            {item.name}
          </Label>
        ))}
      </div>
      <div className={styles.footer}>
        {files
          .filter((file) => openedIds.includes(file.id))
          .map((file) => (
            <button
              className={clsx(hiddenIds.includes(file.id) ? styles.hidden : '')}
              key={file.id}
              onClick={() => handleUnhide(file)}
              type="button"
            >
              {file.name}
            </button>
          ))}
      </div>
    </div>
  );
}
