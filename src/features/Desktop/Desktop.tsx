'use client';

import { removeHiddenFile, setFileActive } from '@/store/files.slice';
import { useAppSelector } from '@/store/store';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';

import styles from './Desktop.module.scss';
import Label from './Label';
import Window from './Window';

export default function Desktop() {
  const dispatch = useDispatch();
  const files = useAppSelector((state) => state.files.files);
  const hiddenList = useAppSelector((state) => state.files.hiddenList);
  const openedList = useAppSelector((state) => state.files.openedList);

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
        {files
          .filter((file) => openedList.includes(file.id))
          .map((file) => (
            <button
              className={clsx(hiddenList.includes(file.id) ? styles.hidden : '')}
              key={file.id}
              onClick={() => handleUnhide(file)}
              type="button"
            >
              {file.name}
            </button>
          ))}
      </div>
      {openedList.map((a) => files.map((b) => (b.id === a ? <Window item={b} key={a} /> : null)))}
    </div>
  );
}
