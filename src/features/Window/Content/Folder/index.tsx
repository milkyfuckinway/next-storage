import Label from '@/features/Desktop/Label';

import PathBar from '../../PathBar';
import styles from './index.module.scss';

export default function FolderContent({ item }: { item: FolderFile }) {
  return (
    <>
      <PathBar item={item} />
      <div className={styles.content}>
        {item.files.map((a) => (
          <Label item={a} key={a.id} />
        ))}
      </div>
    </>
  );
}
