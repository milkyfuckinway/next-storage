import { useAppSelector } from '@/shared/store/store';
import { convertStringToUrl } from '@/shared/utils/helpers';
import { useState } from 'react';

import FirstTab from './Tabs/FirstTab';
import Tabs from './Tabs/Tabs';
import styles from './index.module.scss';

function ElementTwo() {
  return <p>TWO</p>;
}
function ElementThree() {
  return <p>THREE</p>;
}

export default function Settings() {
  const backgroundColor = useAppSelector((state) => state.wallpaper.color);
  const backgroundImage = useAppSelector((state) => state.wallpaper.image);
  const backgroundPosition = useAppSelector((state) => state.wallpaper.position);
  const backgroundRepeat = useAppSelector((state) => state.wallpaper.repeat);
  const backgroundSize = useAppSelector((state) => state.wallpaper.size);

  const [backgroundType, setBackgroundType] = useState('color');

  const tabs = [
    {
      element: <FirstTab backgroundType={backgroundType} setBackgroundType={setBackgroundType} />,
      id: 1,
      name: 'Один',
    },
    {
      element: <ElementTwo />,
      id: 2,
      name: 'Два',
    },
    {
      element: <ElementThree />,
      id: 3,
      name: 'Три',
    },
    {
      element: <ElementThree />,
      id: 4,
      name: 'Четыре',
    },
    {
      element: <ElementThree />,
      id: 5,
      name: 'Пять',
    },
    {
      element: <ElementThree />,
      id: 6,
      name: 'Шесть',
    },
    {
      element: <ElementThree />,
      id: 7,
      name: 'Семь',
    },
    {
      element: <ElementThree />,
      id: 8,
      name: 'Восемь',
    },
    {
      element: <ElementThree />,
      id: 9,
      name: 'Девять',
    },
    {
      element: <ElementThree />,
      id: 10,
      name: 'Десять',
    },
  ];

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
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}
