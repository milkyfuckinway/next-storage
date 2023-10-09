import clsx from 'clsx';

import styles from './ButtonComponent.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick: () => void;
}

export default function ButtonComponent({
  children,
  className = '',
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={clsx(styles.button, className)}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}
