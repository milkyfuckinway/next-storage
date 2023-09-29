import { addOpenedFile, increaceZIndex, setFileActive } from '@/store/files.slice';
import { useAppSelector } from '@/store/store';
import clsx from 'clsx';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';

import Icon from '../Icons/Icon';
import styles from './Label.module.scss';

export default function Label({ item }: { item: Item }) {
  const dispatch = useDispatch();
  const globalZIndex = useAppSelector((state) => state.files.zIndex);
  const windowRef = useRef<HTMLDivElement>(null);

  const setCurrentFileActive = () => {
    dispatch(setFileActive(item.id));
    if (windowRef.current) {
      windowRef.current.style.zIndex = `${globalZIndex}`;
      dispatch(increaceZIndex());
    }
  };

  const handleOpen = () => {
    dispatch(addOpenedFile(item));
    setCurrentFileActive();
  };

  return (
    <button className={clsx(styles.label, item.type)} onClick={handleOpen} type="button">
      <Icon size="big" />
      <div className={styles.label__name}>{item.name}</div>
    </button>
  );
}
