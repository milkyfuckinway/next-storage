import ColorSettings from '@/features/Window/Content/ColorSettings/ColorSettings';
import ImageBar from '@/features/Window/Content/Image/ImageBar';
import ImageContent from '@/features/Window/Content/Image/ImageContent';
import PathBar from '@/features/Window/PathBar';
import { increaceZIndex, setFileActive } from '@/shared/store/files.slice';
import { useAppSelector } from '@/shared/store/store';
import clsx from 'clsx';
import { motion, useDragControls, useMotionValue, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import DocumentContent from './Content/Document/DocumentContent';
import FolderContent from './Content/Folder/FolderContent';
import TitleBar from './TitleBar';
import styles from './index.module.scss';

const WINDOW_WIDTH = 0.75;
const WINDOW_HEIGHT = 0.65;
const HEADER_HEIGHT = 32;
const CYCLE_BIAS = 10;

export default function Window({ item }: { item: DesktopFile }) {
  const DISPLAY_WIDTH = window.innerWidth;
  const DISPLAY_HEIGHT = window.innerHeight;

  const dispatch = useDispatch();

  const active = useAppSelector((state) => state.files.active);
  const hiddenList = useAppSelector((state) => state.files.hiddenList);
  const openedList = useAppSelector((state) => state.files.openedList);
  const globalZIndex = useAppSelector((state) => state.files.zIndex);

  const [expanded, setExpanded] = useState(false);

  const dragControls = useDragControls();
  const resizeControls = useDragControls();

  const windowRef = useRef<HTMLDivElement>(null);

  const calculateWidth = () => {
    const initialWidth = () => {
      if (item.type === 'application') {
        if (item.action === 'color_settings') {
          return 300;
        }
      }
      return DISPLAY_WIDTH * WINDOW_WIDTH;
    };
    const initialHeight = () => {
      if (item.type === 'application') {
        if (item.action === 'color_settings') {
          return 400;
        }
      }
      return DISPLAY_HEIGHT * WINDOW_HEIGHT;
    };

    return { initialHeight, initialWidth };
  };

  const { initialHeight, initialWidth } = calculateWidth();

  const handleX = useMotionValue(initialWidth());
  const handleY = useMotionValue(initialHeight());

  const windowWidth = useTransform(handleX, [0, 10000], [0, 10000]);
  const windowHeight = useTransform(handleY, [0, 10000], [0, 10000]);

  const setCurrentFileActive = () => {
    dispatch(setFileActive(item.id));
    if (windowRef.current) {
      windowRef.current.style.zIndex = `${globalZIndex}`;
      dispatch(increaceZIndex());
    }
  };

  const calculatePosition = (cycle: number) => {
    const left = `${(DISPLAY_WIDTH - DISPLAY_WIDTH * WINDOW_WIDTH) / 2 + cycle * CYCLE_BIAS}px`;
    const top = `${
      (DISPLAY_HEIGHT - DISPLAY_HEIGHT * WINDOW_HEIGHT) / 2 + cycle * CYCLE_BIAS - HEADER_HEIGHT
    }px`;
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
        {/* Settings bar */}
        {/* Image */}
        {item.type === 'image' && <ImageBar item={item} />}

        {/* Path bar */}
        {item.type !== 'application' && <PathBar item={item} />}

        {/* Content */}
        {/* Image */}
        {item.type === 'image' && <ImageContent item={item} />}
        {/* Folder */}
        {item.type === 'folder' && <FolderContent item={item} />}
        {/* Text */}
        {item.type === 'document' && <DocumentContent item={item} />}

        {/* Application */}
        {/* Color settings */}
        {item.type === 'application' && item.action === 'color_settings' && <ColorSettings />}
      </motion.div>
    )
  );
}
