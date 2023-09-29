'use client';

import { addHiddenFile, removeHiddenFile, setFileActive } from '@/store/files.slice';
import { useAppSelector } from '@/store/store';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';

import Icon from '../Icons/Icon';
import Label from '../Window/Label';
import styles from './Desktop.module.scss';
import Display from './Display';

export default function Desktop() {
  const dispatch = useDispatch();
  const files = useAppSelector((state) => state.files.files);
  const hiddenList = useAppSelector((state) => state.files.hiddenList);
  const openedList = useAppSelector((state) => state.files.openedList);
  const active = useAppSelector((state) => state.files.active);

  const handleUnhide = (item: Item) => {
    dispatch(setFileActive(item.id));
    if (hiddenList.includes(item.id)) {
      dispatch(removeHiddenFile(item.id));
    } else {
      dispatch(addHiddenFile(item.id));
    }
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
              file.type,
              active === file.id ? styles.active : '',
              hiddenList.includes(file.id) ? styles.hidden : ''
            )}
            key={file.id}
            onClick={() => handleUnhide(file)}
            type="button"
          >
            <Icon size="small" />
            <div className={styles.anchor__text}>{file.name}</div>
          </button>
        ))}
      </div>
      <Display />
    </div>
  );
}
