import ImageContent from '@/features/Content/Image';
import ColorSettings from '@/features/Content/Settings';
import { increaceZIndex, setFileActive } from '@/shared/store/files.slice';
import { useAppSelector } from '@/shared/store/store';
import clsx from 'clsx';
import { motion, useDragControls, useMotionValue, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import DocumentContent from '../Content/Document';
import FolderContent from '../Content/Folder';
import TitleBar from './TitleBar';
import styles from './index.module.scss';

const WINDOW_WIDTH = 0.75;
const WINDOW_HEIGHT = 0.65;
const HEADER_HEIGHT = 32;
const CYCLE_BIAS = 10;

const APPLICATION_SIZE: { [key: string]: { height: number; width: number } } = {
  color_settings: {
    height: 400,
    width: 300,
  },
};

const calculateWidth = (DISPLAY_HEIGHT: number, DISPLAY_WIDTH: number, item: DesktopFile) => {
  const initialWidth = () =>
    item.type === 'application' && item.action in APPLICATION_SIZE
      ? APPLICATION_SIZE[item.action].width
      : DISPLAY_WIDTH * WINDOW_WIDTH;

  const initialHeight = () =>
    item.type === 'application' && item.action in APPLICATION_SIZE
      ? APPLICATION_SIZE[item.action].height
      : DISPLAY_HEIGHT * WINDOW_HEIGHT;

  return { initialHeight, initialWidth };
};

export default function Window({ item }: { item: DesktopFile }) {
  const DISPLAY_WIDTH = window.innerWidth;
  const DISPLAY_HEIGHT = window.innerHeight;

  const active = useAppSelector((state) => state.files.active);
  const hiddenList = useAppSelector((state) => state.files.hiddenList);
  const openedList = useAppSelector((state) => state.files.openedList);
  const globalZIndex = useAppSelector((state) => state.files.zIndex);

  const [expanded, setExpanded] = useState(false);

  const dragControls = useDragControls();
  const resizeControls = useDragControls();

  const windowRef = useRef<HTMLDivElement>(null);

  const { initialHeight, initialWidth } = calculateWidth(DISPLAY_HEIGHT, DISPLAY_WIDTH, item);

  const handleX = useMotionValue(initialWidth());
  const handleY = useMotionValue(initialHeight());

  const windowWidth = useTransform(handleX, [0, 10000], [0, 10000]);
  const windowHeight = useTransform(handleY, [0, 10000], [0, 10000]);

  const dispatch = useDispatch();
  const setCurrentFileActive = () => {
    dispatch(setFileActive(item.id));
    if (windowRef.current) {
      windowRef.current.style.zIndex = `${globalZIndex}`;
      dispatch(increaceZIndex());
    }
  };

  const calculatePosition = (cycle: number) => {
    const left = `${(DISPLAY_WIDTH - initialWidth()) / 2 + cycle * CYCLE_BIAS}px`;
    const top = `${(DISPLAY_HEIGHT - initialHeight()) / 2 + cycle * CYCLE_BIAS - HEADER_HEIGHT}px`;
    return { left, top };
  };

  const { left, top } = calculatePosition(-1 + openedList.length - hiddenList.length);

  return (
    openedList.includes(item) && (
      <motion.div
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
        {item.type === 'image' && <ImageContent item={item} />}
        {item.type === 'folder' && <FolderContent item={item} />}
        {item.type === 'document' && <DocumentContent item={item} />}
        {item.type === 'application' && item.action === 'color_settings' && <ColorSettings />}
      </motion.div>
    )
  );
}
