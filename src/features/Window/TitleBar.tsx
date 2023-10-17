import ButtonComponent from '@/components/ui/ButtonComponent';
import IconComponent from '@/components/ui/IconComponent';
import { CloseIcon, CollapseIcon, ExpandIcon } from '@/shared/assets/svg/index.svg';
import { addHiddenFile, removeOpenedFile } from '@/shared/store/files.slice';
import clsx from 'clsx';
import { DragControls } from 'framer-motion';
import { SetStateAction } from 'react';
import { useDispatch } from 'react-redux';

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
          <IconComponent item={item} size="small" />
          <div className={styles.titlebar__name}>{item.name}</div>
        </div>
        <div className={styles.titlebar__controls}>
          <ButtonComponent
            className={clsx(styles['button-icon'], styles['button-icon--collapse'])}
            onClick={handleCollapse}
          >
            <CollapseIcon />
          </ButtonComponent>
          <ButtonComponent
            className={clsx(styles['button-icon'], styles['button-icon--expand'])}
            onClick={handleExpand}
          >
            <ExpandIcon />
          </ButtonComponent>
          <ButtonComponent
            className={clsx(styles['button-icon'], styles['button-icon--close'])}
            onClick={handleClose}
          >
            <CloseIcon />
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
}
