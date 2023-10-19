import { useAppSelector } from '@/shared/store/store';
import { convertStringToUrl } from '@/shared/utils/helpers';
import { useState } from 'react';

import Tabs from './Tabs';
import FirstTab from './Tabs/FirstTab';
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
        <Tabs elements={tabs} />
      </div>
    </div>
  );
}
