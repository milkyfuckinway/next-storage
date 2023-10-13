import Image from 'next/image';

import styles from './WindowImage.module.scss';

export default function WindowImage({ item }: { item: ImageFile }) {
  return (
    <div className={styles.content}>
      <div className={styles.image}>
        <Image alt="image" height={512} src={item.src} width={512} />
      </div>
    </div>
  );
}
