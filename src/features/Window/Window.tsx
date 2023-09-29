import { increaceZIndex, setFileActive } from '@/store/files.slice';
import { useAppSelector } from '@/store/store';
import clsx from 'clsx';
import { motion, useDragControls, useMotionValue, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import Label from './Label';
import TitleBar from './TitleBar';
import styles from './Window.module.scss';

export default function Window({ item }: { item: Item }) {
  const dispatch = useDispatch();

  const active = useAppSelector((state) => state.files.active);
  const hiddenList = useAppSelector((state) => state.files.hiddenList);
  const openedList = useAppSelector((state) => state.files.openedList);
  const globalZIndex = useAppSelector((state) => state.files.zIndex);

  const [expanded, setExpanded] = useState(false);

  const displayWidth = window.innerWidth;
  const displayHeight = window.innerHeight;

  const handleX = useMotionValue(300);
  const handleY = useMotionValue(200);

  const windowWidth = useTransform(handleX, [0, displayWidth], [0, displayWidth]);
  const windowHeight = useTransform(handleY, [0, displayHeight], [0, displayHeight]);

  const dragControls = useDragControls();
  const resizeControls = useDragControls();

  const windowRef = useRef<HTMLDivElement>(null);
  const setCurrentFileActive = () => {
    dispatch(setFileActive(item.id));
    if (windowRef.current) {
      windowRef.current.style.zIndex = `${globalZIndex}`;
      dispatch(increaceZIndex());
    }
  };

  return (
    openedList.includes(item) && (
      <motion.div
        className={clsx(
          styles.window,
          item.type,
          active === item.id ? 'active' : '',
          hiddenList.includes(item.id) ? 'hidden' : '',
          expanded ? 'expanded' : ''
        )}
        drag
        dragControls={dragControls}
        dragListener={false}
        dragTransition={{ power: 0 }}
        onTapStart={() => setCurrentFileActive()}
        ref={windowRef}
        style={{
          height: expanded ? '100%' : windowHeight,
          width: expanded ? '100%' : windowWidth,
        }}
      >
        {!expanded && (
          <motion.div
            className={styles.pin}
            drag
            dragConstraints={{ bottom: displayHeight, left: 200, right: displayWidth, top: 200 }}
            dragControls={resizeControls}
            dragMomentum={false}
            style={{ touchAction: 'none', x: handleX, y: handleY }}
          />
        )}
        <TitleBar
          controls={dragControls}
          expanded={expanded}
          item={item}
          setExpanded={setExpanded}
        />
        <div className={styles.content}>
          {item.type === 'folder' && item.files
            ? item.files.map((a) => <Label item={a} key={a.id} />)
            : item.content && (
                <>
                  <a href={item.content?.link}>{item.content.link}</a>
                  <p>{item.content?.paragraph}</p>
                </>
              )}
        </div>
      </motion.div>
    )
  );
}
