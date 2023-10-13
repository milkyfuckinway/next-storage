'use client';

import { addHiddenFile, removeHiddenFile, setFileActive } from '@/store/files.slice';
import { useAppSelector } from '@/store/store';
import calculateDocumentHeight from '@/utils/CalculateDocumentHeight';
import convertStringToUrl from '@/utils/helpers';
import { useDispatch } from 'react-redux';

import ThemeSwitcher from '../Buttons/ThemeSwitcher';
import Window from '../Window/Window';
import Anchor from './Anchor';
import styles from './Desktop.module.scss';
import Label from './Label';

export default function Desktop() {
  const dispatch = useDispatch();
  const files = useAppSelector((state) => state.files.files);
  const hiddenList = useAppSelector((state) => state.files.hiddenList);
  const openedList = useAppSelector((state) => state.files.openedList);
  const active = useAppSelector((state) => state.files.active);

  const backgroundColor = useAppSelector((state) => state.wallpaper.color);
  const backgroundImage = useAppSelector((state) => state.wallpaper.image);
  const backgroundPosition = useAppSelector((state) => state.wallpaper.position);
  const backgroundRepeat = useAppSelector((state) => state.wallpaper.repeat);
  const backgroundSize = useAppSelector((state) => state.wallpaper.size);

  calculateDocumentHeight();

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
      <div
        className={styles.desktop}
        style={{
          backgroundColor,
          backgroundImage: convertStringToUrl(backgroundImage),
          backgroundPosition,
          backgroundRepeat,
          backgroundSize,
        }}
      >
        {files.map((item) => (
          <Label className={styles.themed} item={item} key={item.id} />
        ))}
        {openedList.map((a) => (
          <Window item={a} key={a.id} />
        ))}
        <ThemeSwitcher />
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
