import ButtonComponent from '@/components/ui/ButtonComponent';
import { Arrow, Center, IconCenter, IconExpand, IconTile } from '@/shared/assets/svg/index.svg';
import {
  resetBackground,
  setBackgroundImage,
  setBackgroundPosition,
  setBackgroundRepeat,
  setBackgroundSize,
  setBackgroundType,
} from '@/shared/store/settings.slice';
import { useAppSelector } from '@/shared/store/store';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useClickAway } from 'react-use';

import styles from './ImageBar.module.scss';

export default function ImageBar({ item }: { item: ImageFile }) {
  const dispatch = useDispatch();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const active = useAppSelector((state) => state.files.active);
  const settings = useRef(null);

  // const backgroundColor = useAppSelector((state) => state.settings.backgroundColor);
  const backgroundImage = useAppSelector((state) => state.settings.backgroundImage);
  const backgroundPosition = useAppSelector((state) => state.settings.backgroundPosition);
  const backgroundRepeat = useAppSelector((state) => state.settings.backgroundRepeat);
  const backgroundSize = useAppSelector((state) => state.settings.backgroundSize);

  useEffect(() => {
    if (item.id !== active) {
      setIsSettingsOpen(false);
    }
  }, [active, item.id]);

  useClickAway(settings, () => {
    setIsSettingsOpen(false);
  });

  const onsetBackground = () => {
    dispatch(setBackgroundImage(item.src));
    dispatch(setBackgroundType('image'));
    dispatch(setBackgroundSize('auto'));
    dispatch(setBackgroundRepeat('repeat'));
    dispatch(setBackgroundPosition('center center'));
  };

  const onSetPosition = (position: string) => {
    dispatch(setBackgroundPosition(position));
  };

  const onSetSize = (size: string) => {
    dispatch(setBackgroundSize(size));
  };

  const onSetRepeat = (repeat: string) => {
    dispatch(setBackgroundRepeat(repeat));
  };

  return (
    <div className={styles.imagebar}>
      <div ref={settings} style={{ width: 'min-content' }}>
        <ButtonComponent onClick={() => setIsSettingsOpen(!isSettingsOpen)}>
          <span>Настройки</span>
        </ButtonComponent>
        {isSettingsOpen && (
          <div className={styles.settings}>
            <ButtonComponent disabled={item.src === backgroundImage} onClick={onsetBackground}>
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
              onClick={() => dispatch(resetBackground())}
            >
              <span>Сбросить</span>
            </ButtonComponent>
          </div>
        )}
      </div>
    </div>
  );
}
