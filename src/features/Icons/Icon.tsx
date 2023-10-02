import clsx from 'clsx';

import styles from './Icon.module.scss';

export default function Icon({
  active = false,
  icon,
  size,
  src = '',
}: {
  active: boolean;
  icon: string;
  size: 'big' | 'medium' | 'small';
  src: string;
}) {
  return (
    <div
      className={clsx(styles.icon, styles[size], styles[icon], active ? styles.active : '')}
      style={icon === 'image' ? { backgroundImage: `url("${src}")` } : { backgroundImage: '' }}
    />
  );
}
