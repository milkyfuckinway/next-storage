import { setBackgroundImage } from '@/store/background.slice';
import { useDispatch } from 'react-redux';

import ButtonComponent from './ButtonComponent';
import styles from './ImageBar.module.scss';

export default function ImageBar({ item }: { item: ImageFile }) {
  const dispatch = useDispatch();

  const onSetWallpaper = (img: string) => {
    dispatch(setBackgroundImage(img));
  };

  return (
    <div className={styles.imagebar}>
      <ButtonComponent onClick={() => onSetWallpaper(item.src)}>
        Установить как обои
      </ButtonComponent>
    </div>
  );
}
