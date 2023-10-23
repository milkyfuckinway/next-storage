import ButtonComponent from '@/components/ui/ButtonComponent';
import { setLabelBackgroundColor } from '@/shared/store/settings.slice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './SecondTab.module.scss';

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

// const textColors = [
//   {
//     color: '#ffffff',
//     name: 'Белый',
//   },
//   {
//     color: '#000000',
//     name: 'Черный',
//   },
// ];

export default function SecondTab() {
  const dispatch = useDispatch();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div>
        <ButtonComponent onClick={() => setIsSettingsOpen(!isSettingsOpen)}>
          Выбрать цвет
        </ButtonComponent>
        {isSettingsOpen && (
          <ul>
            {backgroundColors.map((e) => (
              <li key={e.name}>
                <ButtonComponent onClick={() => dispatch(setLabelBackgroundColor(e.color))}>
                  <span>{e.name}</span>
                </ButtonComponent>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
