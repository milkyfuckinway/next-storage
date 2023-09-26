import {
  addHiddenFile,
  addOpenedFile,
  increaceZIndex,
  removeOpenedFile,
  setFileActive,
} from '@/store/files.slice';
import { useAppSelector } from '@/store/store';
import clsx from 'clsx';
import { motion, useDragControls } from 'framer-motion';
import { PointerEvent, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './Label.module.scss';

export default function Label({ children, item }: { children: string; item: Item }) {
  const [expanded, setExpanded] = useState(false);

  const dispatch = useDispatch();
  const active = useAppSelector((state) => state.files.active);
  const hiddenIds = useAppSelector((state) => state.files.hiddenIds);
  const openedIds = useAppSelector((state) => state.files.openedIds);
  const globalZIndex = useAppSelector((state) => state.files.zIndex);

  const controls = useDragControls();
  const windowRef = useRef<HTMLDivElement>(null);

  function startDrag(evt: PointerEvent) {
    evt.stopPropagation();
    controls.start(evt);
  }

  const setWindowActive = () => {
    dispatch(setFileActive(item));
    if (windowRef.current) {
      windowRef.current.style.zIndex = `${globalZIndex}`;
      dispatch(increaceZIndex());
    }
  };

  const onLabelClick = () => {
    dispatch(addOpenedFile(item.id));
    setWindowActive();
  };

  const onExpand = () => {
    setExpanded(!expanded);
  };

  const onHidden = () => {
    dispatch(addHiddenFile(item.id));
  };

  const onClose = () => {
    dispatch(removeOpenedFile(item.id));
  };

  return (
    <>
      <button className={styles.label} onClick={onLabelClick} type="button">
        {children}
      </button>
      {openedIds.includes(item.id) && (
        <motion.div
          className={clsx(
            styles.window,
            hiddenIds.includes(item.id) ? styles.hidden : '',
            active === item ? styles.active : '',
            expanded ? styles.expanded : ''
          )}
          drag
          dragControls={controls}
          dragListener={false}
          dragTransition={{ power: 0 }}
          onTapStart={() => setWindowActive()}
          ref={windowRef}
        >
          <div className={styles.dragbar}>
            <div className={styles.dragarea} onPointerDown={startDrag} />
            <button onClick={onHidden} type="button">
              _
            </button>
            <button onClick={onExpand} type="button">
              п
            </button>
            <button onClick={onClose} type="button">
              x
            </button>
          </div>
          {children}
        </motion.div>
      )}
    </>
  );
}
