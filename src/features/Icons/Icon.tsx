import clsx from 'clsx';

import styles from './Icon.module.scss';

export default function Icon({
  active = false,
  icon,
  size,
}: {
  active: boolean;
  icon: string;
  size: 'big' | 'medium' | 'small';
}) {
  return (
    <div className={clsx(styles.icon, styles[size], styles[icon], active ? styles.active : '')} />
  );
}
