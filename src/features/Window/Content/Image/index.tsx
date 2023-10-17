import Image from 'next/image';

import PathBar from '../../PathBar';
import ImageBar from './ImageBar';
import styles from './index.module.scss';

export default function ImageContent({ item }: { item: ImageFile }) {
  return (
    <>
      <ImageBar item={item} />
      <PathBar item={item} />
      <div className={styles.content}>
        <div className={styles.image}>
          <Image alt="image" height={512} priority quality={90} src={item.src} width={512} />
        </div>
      </div>
    </>
  );
}
