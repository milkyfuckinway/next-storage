import { addHiddenFile, removeOpenedFile } from '@/store/files.slice';
import { useAppSelector } from '@/store/store';
import clsx from 'clsx';
import { DragControls } from 'framer-motion';
import { SetStateAction } from 'react';
import { useDispatch } from 'react-redux';

import Icon from '../Icons/Icon';
import styles from './TitleBar.module.scss';
import WindowButton from './WindowButton';

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
  item: Item;
  setExpanded: React.Dispatch<SetStateAction<boolean>>;
}) {
  const dispatch = useDispatch();

  const currentActive = useAppSelector((state) => state.files.active);

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
          <Icon active={currentActive === item.id} icon={item.type} size="small" />
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
