import styles from './WindowText.module.scss';

export default function WindowText({ item }: { item: TextFile }) {
  return (
    <div className={styles.content}>
      <a href={item.content?.link}>{item.content.link}</a>
      <p>{item.content?.paragraph}</p>
    </div>
  );
}
