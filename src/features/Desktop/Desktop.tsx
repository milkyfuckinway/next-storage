'use client';

import { addHiddenFile, removeHiddenFile, setFileActive } from '@/store/files.slice';
import { useAppSelector } from '@/store/store';
import { useDispatch } from 'react-redux';

import Label from '../Window/Label';
import Anchor from './Anchor';
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
          <Anchor
            active={active}
            file={file}
            handleUnhide={handleUnhide}
            hiddenList={hiddenList}
            key={file.id}
          />
        ))}
      </div>
      <Display />
    </div>
  );
}
