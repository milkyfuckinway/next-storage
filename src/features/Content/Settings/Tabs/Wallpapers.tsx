import InputComponent from '@/components/ui/InputComponent';
import { setBackgroundType } from '@/shared/store/settings.slice';
import { useAppSelector } from '@/shared/store/store';
import { useDispatch } from 'react-redux';

import styles from './Wallpapers.module.scss';

export default function Wallpapers() {
  const dispatch = useDispatch();
  const backgroundImage = useAppSelector((state) => state.settings.backgroundImage);
  const backgroundType = useAppSelector((state) => state.settings.backgroundType);

  return (
    <div className={styles.container}>
      <InputComponent
        checked={backgroundType === 'color'}
        label="Цвет"
        name="background"
        onChange={(evt) => dispatch(setBackgroundType(evt.target.value))}
        value="color"
      />
      <InputComponent
        checked={backgroundType === 'image'}
        disabled={backgroundImage.length < 3}
        label="Изображение"
        name="background"
        onChange={(evt) => dispatch(setBackgroundType(evt.target.value))}
        value="image"
      />
    </div>
  );
}
