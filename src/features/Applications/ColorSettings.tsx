import { useAppSelector } from '@/store/store';
import convertStringToUrl from '@/utils/helpers';
import { useState } from 'react';

import styles from './ColorSettings.module.scss';

export default function ColorSettings() {
  const backgroundColor = useAppSelector((state) => state.wallpaper.color);
  const backgroundImage = useAppSelector((state) => state.wallpaper.image);
  const backgroundPosition = useAppSelector((state) => state.wallpaper.position);
  const backgroundRepeat = useAppSelector((state) => state.wallpaper.repeat);
  const backgroundSize = useAppSelector((state) => state.wallpaper.size);

  const [backgroundType, setBackgroundType] = useState('color');

  return (
    <div className={styles.content}>
      <div className={styles.display}>
        <div
          className={styles.display__content}
          style={{
            backgroundColor,
            backgroundImage:
              backgroundType === 'image' ? convertStringToUrl(backgroundImage) : 'none',
            backgroundPosition,
            backgroundRepeat,
            backgroundSize,
          }}
        >
          <button className={styles.label} type="button">
            <div className={styles.label__icon} />
            <div className={styles.label__name}>Имя файла</div>
          </button>
        </div>
      </div>
      <div className={styles.settings}>
        <form>
          <label>
            <input
              checked={backgroundType === 'color'}
              name="background"
              onChange={(evt) => setBackgroundType(evt.target.value)}
              type="checkbox"
              value="color"
            />
            <span>Цвет</span>
          </label>
          <label>
            <input
              checked={backgroundType === 'image'}
              name="background"
              onChange={(evt) => setBackgroundType(evt.target.value)}
              type="checkbox"
              value="image"
            />
            <span>Изображение</span>
          </label>
        </form>
      </div>
    </div>
  );
}
