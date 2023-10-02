import { Corner } from '@/assets/svg/index.svg';
import { increaceZIndex, setFileActive } from '@/store/files.slice';
import { useAppSelector } from '@/store/store';
import clsx from 'clsx';
import { motion, useDragControls, useMotionValue, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import Label from './Label';
import TitleBar from './TitleBar';
import styles from './Window.module.scss';

const calculatePosition = (cycle: number) => {
  // const displayWidth = window.innerWidth;
  // const displayHeight = window.innerHeight;
  const left = `${50 + cycle * 10}px`;
  const top = `${200 + cycle * 10}px`;
  return { left, top };
};

export default function Window({ item }: { item: Item }) {
  const dispatch = useDispatch();

  const active = useAppSelector((state) => state.files.active);
  const hiddenList = useAppSelector((state) => state.files.hiddenList);
  const openedList = useAppSelector((state) => state.files.openedList);
  const globalZIndex = useAppSelector((state) => state.files.zIndex);

  const [expanded, setExpanded] = useState(false);

  const handleX = useMotionValue(300);
  const handleY = useMotionValue(200);

  const windowWidth = useTransform(handleX, [0, 10000], [0, 10000]);
  const windowHeight = useTransform(handleY, [0, 10000], [0, 10000]);

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

  const { left, top } = calculatePosition(openedList.length - hiddenList.length);

  return (
    openedList.includes(item) &&
    item.type !== 'button' && (
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
        initial={{ left, top }}
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
            dragConstraints={{ left: 200, top: 140 }}
            dragControls={resizeControls}
            dragElastic={0}
            dragMomentum={false}
            style={{ touchAction: 'none', x: handleX, y: handleY }}
          >
            <Corner className={styles.corner} />
          </motion.div>
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
            : item.type === 'file' &&
              item.content && (
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
