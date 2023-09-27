'use client';

import { removeHiddenFile, setFileActive } from '@/store/files.slice';
import { useAppSelector } from '@/store/store';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';

import styles from './Desktop.module.scss';
import Display from './Display';
import Label from './Label';

export default function Desktop() {
  const dispatch = useDispatch();
  const files = useAppSelector((state) => state.files.files);
  const hiddenList = useAppSelector((state) => state.files.hiddenList);
  const openedList = useAppSelector((state) => state.files.openedList);
  const active = useAppSelector((state) => state.files.active);

  const handleUnhide = (item: Item) => {
    dispatch(removeHiddenFile(item.id));
    dispatch(setFileActive(item.id));
  };

  return (
    <div className={styles.screen}>
      <div className={styles.desktop}>
        {files.map((item) => (
          <Label item={item} key={item.id} />
        ))}
      </div>
      <div className={styles.footer}>
        {openedList.map((file) => (
          <button
            className={clsx(
              styles.anchor,
              hiddenList.includes(file.id) ? styles.hidden : '',
              active === file.id ? styles.active : '',
              styles[file.type]
            )}
            key={file.id}
            onClick={() => handleUnhide(file)}
            type="button"
          >
            <div className={styles.anchor__icon} />
            <div className={styles.anchor__text}> {file.name}</div>
          </button>
        ))}
      </div>
      <Display />
    </div>
  );
}
