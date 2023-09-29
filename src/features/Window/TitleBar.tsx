import { addHiddenFile, removeOpenedFile } from '@/store/files.slice';
import { DragControls } from 'framer-motion';
import { SetStateAction } from 'react';
import { useDispatch } from 'react-redux';

import styles from './TitleBar.module.scss';
import WindowButton from './WindowButton';

export default function TitleBar({
  controls,
  expanded,
  item,
  setExpanded,
}: {
  controls: DragControls;
  expanded: boolean;
  item: Item;
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
    <div className={styles.titlebar}>
      <div
        className={styles.titlebar__dragarea}
        onPointerDown={startDrag}
        style={{ touchAction: 'none' }}
      />
      <div className={styles.titlebar__content}>
        <div className={styles.titlebar__details}>
          <div className={styles.titlebar__icon} />
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
