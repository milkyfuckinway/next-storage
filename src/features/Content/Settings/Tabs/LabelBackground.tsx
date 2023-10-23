import ButtonComponent from '@/components/ui/ButtonComponent';
import { setLabelBackgroundColor } from '@/shared/store/settings.slice';
import { useDispatch } from 'react-redux';

import styles from './LabelBackground.module.scss';

const backgroundColors = [
  {
    color: 'transparent',
    name: 'Прозрачный',
  },
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

export default function LabelBackground() {
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <h2>Фон имени файла</h2>
      <ul className={styles.colors}>
        {backgroundColors.map((e) => (
          <li key={e.name}>
            <ButtonComponent
              className={styles.button}
              onClick={() => dispatch(setLabelBackgroundColor(e.color))}
            >
              <span style={{ backgroundColor: e.color }} />
            </ButtonComponent>
          </li>
        ))}
      </ul>
    </div>
  );
}
