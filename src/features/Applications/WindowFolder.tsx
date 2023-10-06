import Label from '../Window/Label';
import styles from './WindowFolder.module.scss';

export default function WindowFolder({ item }: { item: FolderFile }) {
  return (
    <div className={styles.content}>
      {item.files.map((a) => (
        <Label item={a} key={a.id} />
      ))}
    </div>
  );
}
