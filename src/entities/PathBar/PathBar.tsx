import styles from './PathBar.module.scss';

export default function PathBar({ item }: { item: DesktopFile }) {
  return (
    <div className={styles.pathbar}>
      <div className={styles.path}>
        {`C:/desktop/${item.path}/${item.name}`.replace(/\/+/g, '/')}
      </div>
    </div>
  );
}
