import InputComponent from '@/components/ui/InputComponent';
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
    <div className={styles.container}>
      <InputComponent
        checked={backgroundType === 'color'}
        label="Цвет"
        name="background"
        onChange={(evt) => setBackgroundType(evt.target.value)}
        value="color"
      />
      <InputComponent
        checked={backgroundType === 'image'}
        disabled={backgroundImage.length < 3}
        label="Изображение"
        name="background"
        onChange={(evt) => setBackgroundType(evt.target.value)}
        value="image"
      />
    </div>
  );
}
