import { Arrow, Center, IconCenter, IconExpand, IconTile } from '@/assets/svg/index.svg';
import { useAppSelector } from '@/store/store';
import {
  resetWallpaper,
  setWallpaperImage,
  setWallpaperPosition,
  setWallpaperRepeat,
  setWallpaperSize,
} from '@/store/wallpaper.slice';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import ButtonComponent from './ButtonComponent';
import styles from './ImageBar.module.scss';

export default function ImageBar({ item }: { item: ImageFile }) {
  const dispatch = useDispatch();
  const [settings, setSettings] = useState(false);
  const active = useAppSelector((state) => state.files.active);

  // const backgroundColor = useAppSelector((state) => state.wallpaper.color);
  const backgroundImage = useAppSelector((state) => state.wallpaper.image);
  const backgroundPosition = useAppSelector((state) => state.wallpaper.position);
  const backgroundRepeat = useAppSelector((state) => state.wallpaper.repeat);
  const backgroundSize = useAppSelector((state) => state.wallpaper.size);

  useEffect(() => {
    if (item.id !== active) {
      setSettings(false);
    }
  }, [active, item.id]);

  const onSetWallpaper = () => {
    dispatch(setWallpaperImage(item.src));
    dispatch(setWallpaperSize('auto'));
    dispatch(setWallpaperRepeat('repeat'));
    dispatch(setWallpaperPosition('center center'));
  };

  const onSetPosition = (position: string) => {
    dispatch(setWallpaperPosition(position));
  };

  const onSetSize = (size: string) => {
    dispatch(setWallpaperSize(size));
  };

  const onSetRepeat = (repeat: string) => {
    dispatch(setWallpaperRepeat(repeat));
  };

  return (
    <div className={styles.imagebar}>
      <ButtonComponent onClick={() => setSettings(!settings)}>
        <span>Настройки</span>
      </ButtonComponent>
      {settings && (
        <div className={styles.settings}>
          <ButtonComponent disabled={item.src === backgroundImage} onClick={onSetWallpaper}>
            <span> Установить как обои</span>
          </ButtonComponent>
          <div className={styles.position}>
            <ButtonComponent
              disabled={item.src !== backgroundImage || backgroundPosition === 'left top'}
              onClick={() => onSetPosition('left top')}
            >
              <Arrow style={{ rotate: '-45deg' }} />
            </ButtonComponent>
            <ButtonComponent
              disabled={item.src !== backgroundImage || backgroundPosition === 'center top'}
              onClick={() => onSetPosition('center top')}
            >
              <Arrow />
            </ButtonComponent>
            <ButtonComponent
              disabled={item.src !== backgroundImage || backgroundPosition === 'right top'}
              onClick={() => onSetPosition('right top')}
            >
              <Arrow style={{ rotate: '45deg' }} />
            </ButtonComponent>
            <ButtonComponent
              disabled={item.src !== backgroundImage || backgroundPosition === 'left center'}
              onClick={() => onSetPosition('left center')}
            >
              <Arrow style={{ rotate: '-90deg' }} />
            </ButtonComponent>
            <ButtonComponent
              disabled={item.src !== backgroundImage || backgroundPosition === 'center center'}
              onClick={() => onSetPosition('center center')}
            >
              <Center />
            </ButtonComponent>
            <ButtonComponent
              disabled={item.src !== backgroundImage || backgroundPosition === 'right center'}
              onClick={() => onSetPosition('right center')}
            >
              <Arrow style={{ rotate: '90deg' }} />
            </ButtonComponent>
            <ButtonComponent
              disabled={item.src !== backgroundImage || backgroundPosition === 'left bottom'}
              onClick={() => onSetPosition('left bottom')}
            >
              <Arrow style={{ rotate: '-135deg' }} />
            </ButtonComponent>
            <ButtonComponent
              disabled={item.src !== backgroundImage || backgroundPosition === 'center bottom'}
              onClick={() => onSetPosition('center bottom')}
            >
              <Arrow style={{ rotate: '-180deg' }} />
            </ButtonComponent>
            <ButtonComponent
              disabled={item.src !== backgroundImage || backgroundPosition === 'right bottom'}
              onClick={() => onSetPosition('right bottom')}
            >
              <Arrow style={{ rotate: '135deg' }} />
            </ButtonComponent>
          </div>
          <ButtonComponent
            className={styles['with-svg']}
            disabled={
              item.src !== backgroundImage ||
              (backgroundSize === 'auto' && backgroundRepeat === 'no-repeat')
            }
            onClick={() => {
              onSetSize('auto');
              onSetRepeat('no-repeat');
            }}
          >
            <span>По размеру</span>
            <IconCenter />
          </ButtonComponent>
          <ButtonComponent
            className={styles['with-svg']}
            disabled={
              item.src !== backgroundImage ||
              (backgroundSize === 'auto' && backgroundRepeat === 'repeat')
            }
            onClick={() => {
              onSetSize('auto');
              onSetRepeat('repeat');
            }}
          >
            <span>Мозайка</span>
            <IconTile />
          </ButtonComponent>
          <ButtonComponent
            className={styles['with-svg']}
            disabled={item.src !== backgroundImage || backgroundSize === 'cover'}
            onClick={() => onSetSize('cover')}
          >
            <span>Заполнение</span>
            <IconExpand />
          </ButtonComponent>
          <ButtonComponent
            disabled={backgroundImage.length === 0}
            onClick={() => dispatch(resetWallpaper())}
          >
            <span>Сбросить</span>
          </ButtonComponent>
        </div>
      )}
    </div>
  );
}
