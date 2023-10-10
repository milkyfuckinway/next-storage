import { increaceZIndex, setFileActive } from '@/store/files.slice';
import { useAppSelector } from '@/store/store';
import clsx from 'clsx';
import {
  AnimatePresence,
  motion,
  useDragControls,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import WindowFolder from '../Folder/WindowFolder';
import ImageBar from '../Image/ImageBar';
import WindowImage from '../Image/WindowImage';
import WindowText from '../Text/WindowText';
import TitleBar from './TitleBar';
import styles from './Window.module.scss';

const WINDOW_WIDTH = 0.75;
const WINDOW_HEIGHT = 0.65;
const HEADER_HEIGHT = 32;
const CYCLE_BIAS = 10;
const DISPLAY_WIDTH = window.innerWidth;
const DISPLAY_HEIGHT = window.innerHeight;

const calculatePosition = (cycle: number) => {
  const left = `${(DISPLAY_WIDTH - DISPLAY_WIDTH * WINDOW_WIDTH) / 2 + cycle * CYCLE_BIAS}px`;
  const top = `${
    (DISPLAY_HEIGHT - DISPLAY_HEIGHT * WINDOW_HEIGHT) / 2 + cycle * CYCLE_BIAS - HEADER_HEIGHT
  }px`;
  return { left, top };
};

const calculateWidth = () => {
  const initialWidth = DISPLAY_WIDTH * WINDOW_WIDTH;
  const initialHeight = DISPLAY_HEIGHT * WINDOW_HEIGHT;
  return { initialHeight, initialWidth };
};

export default function Window({ item }: { item: DesktopFile }) {
  const dispatch = useDispatch();

  const active = useAppSelector((state) => state.files.active);
  const hiddenList = useAppSelector((state) => state.files.hiddenList);
  const openedList = useAppSelector((state) => state.files.openedList);
  const globalZIndex = useAppSelector((state) => state.files.zIndex);

  const [expanded, setExpanded] = useState(false);

  const { initialHeight, initialWidth } = calculateWidth();

  const handleX = useMotionValue(initialWidth);
  const handleY = useMotionValue(initialHeight);

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

  const { left, top } = calculatePosition(-1 + openedList.length - hiddenList.length);

  return (
    openedList.includes(item) &&
    item.type !== 'button' && (
      <AnimatePresence>
        <motion.div
          animate={{ scale: 1 }}
          className={clsx(
            styles.window,
            active === item.id ? styles.active : '',
            hiddenList.includes(item.id) ? styles.hidden : '',
            expanded ? styles.expanded : ''
          )}
          drag
          dragControls={dragControls}
          dragListener={false}
          dragTransition={{ power: 0 }}
          exit={{ scale: 0 }}
          initial={{ left, scale: 0, top }}
          onTapStart={() => setCurrentFileActive()}
          ref={windowRef}
          style={{
            height: expanded ? '100%' : windowHeight,
            width: expanded ? '100%' : windowWidth,
          }}
        >
          {!expanded && (
            <motion.div
              className={styles.corner}
              drag
              dragConstraints={{ left: 200, top: 100 }}
              dragControls={resizeControls}
              dragElastic={0}
              dragMomentum={false}
              style={{ touchAction: 'none', x: handleX, y: handleY }}
            />
          )}
          <TitleBar
            active={active === item.id}
            controls={dragControls}
            expanded={expanded}
            item={item}
            setExpanded={setExpanded}
          />
          {/* Settings bar */}
          {/* Image */}
          {item.type === 'image' && <ImageBar item={item} />}

          {/* Path bar */}
          <div className={styles.pathbar}>
            <div className={styles.path}>
              {`C:/desktop/${item.path}/${item.name}`.replace(/\/+/g, '/')}
            </div>
          </div>

          {/* Content */}
          {/* Image */}
          {item.type === 'image' && <WindowImage item={item} />}
          {/* Folder */}
          {item.type === 'folder' && <WindowFolder item={item} />}
          {/* Text */}
          {item.type === 'text' && <WindowText item={item} />}
        </motion.div>
      </AnimatePresence>
    )
  );
}
