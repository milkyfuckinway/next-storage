import clsx from 'clsx';
import { motion, useDragControls } from 'framer-motion';
import { PointerEvent, SetStateAction, useEffect, useRef, useState } from 'react';

import styles from './Label.module.scss';

export default function Label({
  active,
  children,
  hidden,
  item,
  scalableZIndex,
  setActive,
  setHidden,
  setScalableZIndex,
}: {
  active: Item | undefined;
  children: string;
  hidden: Item[];
  item: Item;
  scalableZIndex: number;
  setActive: React.Dispatch<SetStateAction<Item | undefined>>;
  setHidden: React.Dispatch<SetStateAction<Item[]>>;
  setScalableZIndex: React.Dispatch<SetStateAction<number>>;
}) {
  const [open, setOpen] = useState(false);
  const [hiddenLocal, setHiddenLocal] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const controls = useDragControls();
  const windowRef = useRef<HTMLDivElement>(null);

  function startDrag(evt: PointerEvent) {
    evt.stopPropagation();
    controls.start(evt);
  }

  const setWindowActive = () => {
    setActive(item);
    if (windowRef.current) {
      windowRef.current.style.zIndex = `${scalableZIndex}`;
      setScalableZIndex(scalableZIndex + 1);
    }
  };

  const onLabelClick = () => {
    setOpen(true);
    setWindowActive();
  };

  useEffect(() => {
    setHiddenLocal(!!hidden.find((a) => a === item));
  }, [hidden, item]);

  const onExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <button className={styles.label} onClick={onLabelClick} type="button">
        {children}
      </button>
      {open && (
        <motion.div
          className={clsx(
            styles.window,
            hiddenLocal ? styles.hidden : '',
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
            <button onClick={() => setHidden([...hidden, item])} type="button">
              _
            </button>
            <button onClick={onExpand} type="button">
              п
            </button>
            <button onClick={() => setOpen(false)} type="button">
              x
            </button>
          </div>
          {children}
        </motion.div>
      )}
      {hiddenLocal}
    </>
  );
}
