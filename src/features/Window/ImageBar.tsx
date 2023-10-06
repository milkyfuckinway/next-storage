import { Arrow, Center, IconCenter, IconExpand, IconTile } from '@/assets/svg/index.svg';
import { useAppSelector } from '@/store/store';
import { useEffect, useState } from 'react';

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

const onSetRepeat = (repeat: string) => {
  document.documentElement.style.setProperty('--wallpaper-repeat', repeat);
};

export default function ImageBar({ item }: { item: ImageFile }) {
  const [settings, setSettings] = useState(false);
  const active = useAppSelector((state) => state.files.active);

  useEffect(() => {
    if (item.id !== active) {
      setSettings(false);
    }
  }, [active, item.id]);

  return (
    <div className={styles.imagebar}>
      <ButtonComponent onClick={() => setSettings(!settings)}>Настройки</ButtonComponent>
      {settings && (
        <div className={styles.settings}>
          <ButtonComponent onClick={() => onSetWallpaper(item.src)}>
            Установить как обои
          </ButtonComponent>
          <ButtonComponent onClick={() => onResetWallpaper()}>Сбросить обои</ButtonComponent>
          <div className={styles.position}>
            <ButtonComponent onClick={() => onSetPosition('top left')}>
              <Arrow style={{ rotate: '-45deg' }} />
            </ButtonComponent>
            <ButtonComponent onClick={() => onSetPosition('top center')}>
              <Arrow />
            </ButtonComponent>
            <ButtonComponent onClick={() => onSetPosition('top right')}>
              <Arrow style={{ rotate: '45deg' }} />
            </ButtonComponent>
            <ButtonComponent onClick={() => onSetPosition('left')}>
              <Arrow style={{ rotate: '-90deg' }} />
            </ButtonComponent>
            <ButtonComponent onClick={() => onSetPosition('center')}>
              <Center />
            </ButtonComponent>
            <ButtonComponent onClick={() => onSetPosition('right')}>
              <Arrow style={{ rotate: '90deg' }} />
            </ButtonComponent>
            <ButtonComponent onClick={() => onSetPosition('bottom left')}>
              <Arrow style={{ rotate: '-135deg' }} />
            </ButtonComponent>
            <ButtonComponent onClick={() => onSetPosition('bottom center')}>
              <Arrow style={{ rotate: '-180deg' }} />
            </ButtonComponent>
            <ButtonComponent onClick={() => onSetPosition('bottom right')}>
              <Arrow style={{ rotate: '135deg' }} />
            </ButtonComponent>
          </div>
          <ButtonComponent
            className={styles['with-svg']}
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
            onClick={() => {
              onSetSize('auto');
              onSetRepeat('no-repeat');
            }}
          >
            <span>По размеру</span>
            <IconCenter />
          </ButtonComponent>
          <ButtonComponent className={styles['with-svg']} onClick={() => onSetSize('cover')}>
            <span>Заполнение</span>
            <IconExpand />
          </ButtonComponent>
        </div>
      )}
    </div>
  );
}
