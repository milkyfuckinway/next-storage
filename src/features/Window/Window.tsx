import { increaceZIndex, setFileActive } from '@/store/files.slice';
import { useAppSelector } from '@/store/store';
import clsx from 'clsx';
import { motion, useDragControls } from 'framer-motion';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import Label from '../Desktop/Label';
import TitleBar from './TitleBar';
import styles from './Window.module.scss';

export default function Window({ item }: { item: Item }) {
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();
  const active = useAppSelector((state) => state.files.active);
  const hiddenList = useAppSelector((state) => state.files.hiddenList);
  const openedList = useAppSelector((state) => state.files.openedList);
  const globalZIndex = useAppSelector((state) => state.files.zIndex);
  const windowRef = useRef<HTMLDivElement>(null);

  const controls = useDragControls();

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
          hiddenList.includes(item.id) ? 'hidden' : '',
          active === item.id ? 'active' : '',
          expanded ? 'expanded' : '',
          item.type === 'folder' ? 'folder' : ''
        )}
        drag
        dragControls={controls}
        dragListener={false}
        dragTransition={{ power: 0 }}
        onTapStart={() => setCurrentFileActive()}
        ref={windowRef}
      >
        <TitleBar controls={controls} expanded={expanded} item={item} setExpanded={setExpanded} />
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
