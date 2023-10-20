import { useAppSelector } from '@/shared/store/store';
import { convertStringToUrl } from '@/shared/utils/helpers';

import FirstTab from './Tabs/FirstTab';
import Tabs from './Tabs/Tabs';
import styles from './index.module.scss';

export default function Settings() {
  const backgroundColor = useAppSelector((state) => state.settings.backgroundColor);
  const backgroundImage = useAppSelector((state) => state.settings.backgroundImage);
  const backgroundPosition = useAppSelector((state) => state.settings.backgroundPosition);
  const backgroundRepeat = useAppSelector((state) => state.settings.backgroundRepeat);
  const backgroundSize = useAppSelector((state) => state.settings.backgroundSize);
  const backgroundType = useAppSelector((state) => state.settings.backgroundType);

  const tabs = [
    {
      element: <FirstTab />,
      id: 1,
      name: 'Настройки цвета',
    },
  ];

  return (
    <div className={styles.content}>
      <div className={styles.display}>
        <div
          className={styles.display__content}
          style={{
            backgroundColor,
            backgroundImage: backgroundType === 'image' ? convertStringToUrl(backgroundImage) : '',
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
