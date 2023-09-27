import { addOpenedFile, increaceZIndex, setFileActive } from '@/store/files.slice';
import { useAppSelector } from '@/store/store';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';

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
    <button className={styles.label} onClick={handleOpen} type="button">
      {item.name}
    </button>
  );
}
