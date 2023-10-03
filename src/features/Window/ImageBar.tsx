import { setBackgroundImage } from '@/store/background.slice';
import { useDispatch } from 'react-redux';

import styles from './ImageBar.module.scss';

export default function ImageBar({ item }: { item: ImageFile }) {
  const dispatch = useDispatch();
  const onSetWallpaper = (img: string) => {
    dispatch(setBackgroundImage(img));
  };

  return (
    <div className={styles.imagebar}>
      <button onClick={() => onSetWallpaper(item.src)} type="button">
        Установить как обои
      </button>
    </div>
  );
}
