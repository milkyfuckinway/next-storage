import { increaceZIndex, setFileActive } from '@/store/files.slice';
import { useAppSelector } from '@/store/store';
import clsx from 'clsx';
import { motion, useDragControls, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import ImageBar from './ImageBar';
import Label from './Label';
import TitleBar from './TitleBar';
import styles from './Window.module.scss';

const displayWidth = window.innerWidth;
const displayHeight = window.innerHeight;

const calculatePosition = (cycle: number) => {
  const left = `${(displayWidth - displayWidth * 0.7) / 2 + cycle * 20}px`;
  const top = `${(displayHeight - displayHeight * 0.5) / 2 + cycle * 20}px`;
  return { left, top };
};

const calculateWidth = () => {
  const width = displayWidth * 0.7;
  const height = displayHeight * 0.5;
  return { height, width };
};

export default function Window({ item }: { item: DesktopFile }) {
  const dispatch = useDispatch();

  const active = useAppSelector((state) => state.files.active);
  const hiddenList = useAppSelector((state) => state.files.hiddenList);
  const openedList = useAppSelector((state) => state.files.openedList);
  const globalZIndex = useAppSelector((state) => state.files.zIndex);

  const [expanded, setExpanded] = useState(false);

  const { height, width } = calculateWidth();

  const handleX = useMotionValue(width);
  const handleY = useMotionValue(height);

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
          styles[item.type],
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
            dragConstraints={{ left: 200, top: 140 }}
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
        {item.type === 'image' && <ImageBar item={item} />}
        <div className={styles.content}>
          {item.type === 'folder' &&
            item.files &&
            item.files.map((a) => <Label item={a} key={a.id} />)}

          {item.type === 'text' && item.content && (
            <>
              <a href={item.content?.link}>{item.content.link}</a>
              <p>{item.content?.paragraph}</p>
            </>
          )}

          {item.type === 'image' && item.src && (
            <div className={styles.image}>
              <Image alt="image" height={100} src={item.src} width={100} />
            </div>
          )}
        </div>
      </motion.div>
    )
  );
}
