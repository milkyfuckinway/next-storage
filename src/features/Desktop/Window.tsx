import {
  addHiddenFile,
  increaceZIndex,
  removeOpenedFile,
  setFileActive,
} from '@/store/files.slice';
import { useAppSelector } from '@/store/store';
import clsx from 'clsx';
import { motion, useDragControls } from 'framer-motion';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './Window.module.scss';

export default function Window({ item }: { item: Item }) {
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();
  const active = useAppSelector((state) => state.files.active);
  const hiddenList = useAppSelector((state) => state.files.hiddenList);
  const openedList = useAppSelector((state) => state.files.openedList);
  const globalZIndex = useAppSelector((state) => state.files.zIndex);
  const controls = useDragControls();
  const windowRef = useRef<HTMLDivElement>(null);

  function startDrag(evt: PointerEvent | React.PointerEvent<Element>) {
    controls.start(evt);
  }
  const setCurrentFileActive = () => {
    dispatch(setFileActive(item.id));
    if (windowRef.current) {
      windowRef.current.style.zIndex = `${globalZIndex}`;
      dispatch(increaceZIndex());
    }
  };

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const handleCollapse = () => {
    dispatch(addHiddenFile(item.id));
  };

  const handleClose = () => {
    dispatch(removeOpenedFile(item.id));
  };

  return (
    openedList.includes(item.id) && (
      <motion.div
        className={clsx(
          styles.window,
          hiddenList.includes(item.id) ? styles.hidden : '',
          active === item.id ? styles.active : '',
          expanded ? styles.expanded : ''
        )}
        drag
        dragControls={controls}
        dragListener={false}
        dragTransition={{ power: 0 }}
        onTapStart={() => setCurrentFileActive()}
        ref={windowRef}
      >
        <div className={styles.dragbar}>
          <div
            className={styles.dragarea}
            onPointerDown={startDrag}
            style={{ touchAction: 'none' }}
          />
          <button onClick={handleCollapse} type="button">
            _
          </button>
          <button onClick={handleExpand} type="button">
            п
          </button>
          <button onClick={handleClose} type="button">
            x
          </button>
        </div>
        {item.name}
      </motion.div>
    )
  );
}
