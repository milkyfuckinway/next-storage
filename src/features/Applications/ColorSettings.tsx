import Label from '../Desktop/Label';
import styles from './ColorSettings.module.scss';

const item = {
  content: { link: '', paragraph: '' },
  icon: 'folder',
  id: 'example',
  name: 'Название папки',
  path: '/',
  type: 'text',
} as DesktopFile;

export default function ColorSettings() {
  return (
    <div className={styles.content}>
      <div className={styles.display}>
        <div className={styles.display__content}>
          <Label item={item} />
        </div>
      </div>
    </div>
  );
}
