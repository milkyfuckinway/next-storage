import { useAppSelector } from '@/shared/store/store';
import { SetStateAction } from 'react';

import styles from './FirstTab.module.scss';

export default function FirstTab({
  backgroundType,
  setBackgroundType,
}: {
  backgroundType: string;
  setBackgroundType: React.Dispatch<SetStateAction<string>>;
}) {
  const backgroundImage = useAppSelector((state) => state.wallpaper.image);
  return (
    <div className={styles.body}>
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
    </div>
  );
}
