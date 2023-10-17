import { useAppSelector } from '@/shared/store/store';
import { convertStringToUrl } from '@/shared/utils/helpers';
import { useState } from 'react';

import Tabs from './Tabs';
import styles from './index.module.scss';

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
          <div className={styles.input}>
            <label>
              <input
                checked={backgroundType === 'color'}
                name="background"
                onChange={(evt) => setBackgroundType(evt.target.value)}
                type="checkbox"
                value="color"
              />
              <div className={styles.pin} />
              <span>Цвет</span>
            </label>
          </div>
          <div className={styles.input}>
            <label>
              <input
                checked={backgroundType === 'image'}
                disabled={backgroundImage.length < 3}
                name="background"
                onChange={(evt) => setBackgroundType(evt.target.value)}
                type="checkbox"
                value="image"
              />
              <div className={styles.pin} />
              <span>Изображение</span>
            </label>
          </div>
        </form>
        <Tabs />
      </div>
    </div>
  );
}
