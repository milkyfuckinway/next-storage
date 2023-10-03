'use client';

import { addHiddenFile, removeHiddenFile, setFileActive } from '@/store/files.slice';
import { useAppSelector } from '@/store/store';
import { useDispatch } from 'react-redux';

import Label from '../Window/Label';
import Window from '../Window/Window';
import Anchor from './Anchor';
import styles from './Desktop.module.scss';

export default function Desktop() {
  const dispatch = useDispatch();
  const files = useAppSelector((state) => state.files.files);
  const hiddenList = useAppSelector((state) => state.files.hiddenList);
  const openedList = useAppSelector((state) => state.files.openedList);
  const active = useAppSelector((state) => state.files.active);
  const backgroundImage = useAppSelector((state) => state.background.backgroundImage);

  const handleUnhide = (item: DesktopFile) => {
    dispatch(setFileActive(item.id));
    if (hiddenList.includes(item.id)) {
      dispatch(removeHiddenFile(item.id));
    } else {
      dispatch(addHiddenFile(item.id));
    }
  };

  return (
    <div className={styles.screen}>
      <div className={styles.desktop} style={{ backgroundImage: `url(${backgroundImage})` }}>
        {files.map((item) => (
          <Label item={item} key={item.id} />
        ))}
        {openedList.map((a) => (
          <Window item={a} key={a.id} />
        ))}
      </div>
      <div className={styles.footer}>
        <button className={styles.start} type="button">
          ПУСК
        </button>
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
    </div>
  );
}
