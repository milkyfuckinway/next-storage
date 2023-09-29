import clsx from 'clsx';

import styles from './Icon.module.scss';

export default function Icon({ size }: { size: 'big' | 'medium' | 'small' }) {
  return <div className={clsx(styles.icon, styles[size])} />;
}
