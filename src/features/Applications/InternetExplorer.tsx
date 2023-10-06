import styles from './InternetExplorer.module.scss';

export default function InternetExplorer() {
  return (
    <div className={styles.content}>
      <iframe
        height="100%"
        src="https://www.google.com/search?igu=1"
        title="homepage"
        width="100%"
      />
    </div>
  );
}
