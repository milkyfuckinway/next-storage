import Label from '@/features/Desktop/Label';

import styles from './FolderContent.module.scss';

export default function FolderContent({ item }: { item: FolderFile }) {
  return (
    <div className={styles.content}>
      {item.files.map((a) => (
        <Label item={a} key={a.id} />
      ))}
    </div>
  );
}
