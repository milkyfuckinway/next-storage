import { useState } from 'react';

import ButtonComponent from './ButtonComponent';
import styles from './ImageBar.module.scss';

const onSetWallpaper = (img: string) => {
  document.documentElement.style.setProperty('--wallpaper-image', `url(${img})`);
};

const onResetWallpaper = () => {
  document.documentElement.style.setProperty('--wallpaper-image', '');
};

const onSetPosition = (position: string) => {
  document.documentElement.style.setProperty('--wallpaper-position', position);
};

const onSetSize = (size: string) => {
  document.documentElement.style.setProperty('--wallpaper-size', size);
};

export default function ImageBar({ item }: { item: ImageFile }) {
  const [settings, setSettings] = useState(false);
  return (
    <div className={styles.imagebar}>
      <ButtonComponent onClick={() => setSettings(!settings)}>Настройки</ButtonComponent>
      {settings && (
        <div>
          <ButtonComponent onClick={() => onSetWallpaper(item.src)}>
            Установить как обои
          </ButtonComponent>
          <ButtonComponent onClick={() => onResetWallpaper()}>Сбросить обои</ButtonComponent>
          <div className={styles.position}>
            <ButtonComponent onClick={() => onSetPosition('top')}>↑</ButtonComponent>
            <ButtonComponent onClick={() => onSetPosition('left')}>←</ButtonComponent>
            <ButtonComponent onClick={() => onSetPosition('center')}>↔</ButtonComponent>
            <ButtonComponent onClick={() => onSetPosition('right')}>→</ButtonComponent>
            <ButtonComponent onClick={() => onSetPosition('bottom')}>↓</ButtonComponent>
          </div>
          <ButtonComponent onClick={() => onSetSize('auto')}>Замостить</ButtonComponent>
          <ButtonComponent onClick={() => onSetSize('contain')}>По размеру</ButtonComponent>
          <ButtonComponent onClick={() => onSetSize('cover')}>Заполнение</ButtonComponent>
        </div>
      )}
    </div>
  );
}
