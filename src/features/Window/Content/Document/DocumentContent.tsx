import styles from './DocumentContent.module.scss';

export default function DocumentContent({ item }: { item: DocumentFile }) {
  return (
    <div className={styles.content}>
      <a href={item.content?.link}>{item.content.link}</a>
      <p>{item.content?.paragraph}</p>
    </div>
  );
}
