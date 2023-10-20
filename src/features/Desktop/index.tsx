'use client';

import Window from '@/features/Window';
import { useAppSelector } from '@/shared/store/store';
import { calculateDocumentHeight, convertStringToUrl } from '@/shared/utils/helpers';
import { useEffect } from 'react';

import Anchor from './Anchor';
import Label from './Label';
import styles from './index.module.scss';

export default function Desktop() {
  const files = useAppSelector((state) => state.files.files);
  const hiddenList = useAppSelector((state) => state.files.hiddenList);
  const openedList = useAppSelector((state) => state.files.openedList);
  const active = useAppSelector((state) => state.files.active);

  const backgroundColor = useAppSelector((state) => state.settings.backgroundColor);
  const backgroundImage = useAppSelector((state) => state.settings.backgroundImage);
  const backgroundPosition = useAppSelector((state) => state.settings.backgroundPosition);
  const backgroundRepeat = useAppSelector((state) => state.settings.backgroundRepeat);
  const backgroundSize = useAppSelector((state) => state.settings.backgroundSize);
  const backgroundType = useAppSelector((state) => state.settings.backgroundType);

  useEffect(() => {
    calculateDocumentHeight();
  }, []);

  return (
    <div className={styles.screen}>
      <div
        className={styles.desktop}
        style={{
          backgroundColor,
          backgroundImage: backgroundType === 'image' ? convertStringToUrl(backgroundImage) : '',
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
      </div>
      <div className={styles.footer}>
        <button className={styles.start} type="button">
          ПУСК
        </button>
        {openedList.map((item) => (
          <Anchor active={active} hiddenList={hiddenList} item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
