import { addHiddenFile, removeOpenedFile } from '@/store/files.slice';
import clsx from 'clsx';
import { DragControls } from 'framer-motion';
import { SetStateAction } from 'react';
import { useDispatch } from 'react-redux';

import WindowButton from '../Buttons/WindowButton';
import Icon from '../Icons/Icon';
import styles from './TitleBar.module.scss';

export default function TitleBar({
  active,
  controls,
  expanded,
  item,
  setExpanded,
}: {
  active: boolean;
  controls: DragControls;
  expanded: boolean;
  item: DesktopFile;
  setExpanded: React.Dispatch<SetStateAction<boolean>>;
}) {
  const dispatch = useDispatch();

  function startDrag(evt: PointerEvent | React.PointerEvent<Element>) {
    controls.start(evt);
  }

  const handleCollapse = () => {
    dispatch(addHiddenFile(item.id));
  };

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const handleClose = () => {
    dispatch(removeOpenedFile(item));
  };

  return (
    <div className={clsx(styles.titlebar, active ? styles.active : '')}>
      <div
        className={styles.titlebar__dragarea}
        onPointerDown={startDrag}
        style={{ touchAction: 'none' }}
      />
      <div className={styles.titlebar__content}>
        <div className={styles.titlebar__details}>
          <Icon item={item} size="small" />
          <div className={styles.titlebar__name}>{item.name}</div>
        </div>
        <div className={styles.titlebar__controls}>
          <WindowButton onClick={handleCollapse} type="collapse" />
          <WindowButton onClick={handleExpand} type="expand" />
          <WindowButton onClick={handleClose} type="close" />
        </div>
      </div>
    </div>
  );
}
