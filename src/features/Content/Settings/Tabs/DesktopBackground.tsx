import ButtonComponent from '@/components/ui/ButtonComponent';
import { setBackgroundColor } from '@/shared/store/settings.slice';
import { useDispatch } from 'react-redux';

import styles from './DesktopBackground.module.scss';

export default function DesktopBackground() {
  const dispatch = useDispatch();

  const backgroundColors = [
    {
      color: '#ffffff',
      name: 'Белый',
    },
    {
      color: '#000000',
      name: 'Черный',
    },
    {
      color: 'rgb(0 128 131)',
      name: 'Бирюзовый',
    },
  ];

  return (
    <div className={styles.container}>
      <h2>Цвет рабочего стола</h2>
      <ul className={styles.colors}>
        {backgroundColors.map((e) => (
          <li key={e.name}>
            <ButtonComponent
              className={styles.button}
              onClick={() => dispatch(setBackgroundColor(e.color))}
            >
              <span style={{ backgroundColor: e.color }} />
            </ButtonComponent>
          </li>
        ))}
      </ul>
    </div>
  );
}
