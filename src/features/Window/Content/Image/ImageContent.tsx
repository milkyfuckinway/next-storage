import Image from 'next/image';

import styles from './ImageContent.module.scss';

export default function ImageContent({ item }: { item: ImageFile }) {
  return (
    <div className={styles.content}>
      <div className={styles.image}>
        <Image alt="image" height={512} priority src={item.src} width={512} />
      </div>
    </div>
  );
}
