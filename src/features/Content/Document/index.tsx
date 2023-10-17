import PathBar from '../../Window/PathBar';
import styles from './index.module.scss';

export default function DocumentContent({ item }: { item: DocumentFile }) {
  return (
    <>
      <PathBar item={item} />
      <div className={styles.content}>
        <a href={item.content?.link}>{item.content.link}</a>
        <p>{item.content?.paragraph}</p>
      </div>
    </>
  );
}
