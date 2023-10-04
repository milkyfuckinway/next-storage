import ButtonComponent from './ButtonComponent';
import styles from './ImageBar.module.scss';

export default function ImageBar({ item }: { item: ImageFile }) {
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

  return (
    <div className={styles.imagebar}>
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
      <ButtonComponent onClick={() => onSetSize('auto')}>auto</ButtonComponent>
      <ButtonComponent onClick={() => onSetSize('contain')}>contain</ButtonComponent>
      <ButtonComponent onClick={() => onSetSize('cover')}>cover</ButtonComponent>
    </div>
  );
}
