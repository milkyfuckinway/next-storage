import clsx from 'clsx';
import { MutableRefObject } from 'react';

import styles from './ButtonComponent.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick: () => void;
  reference?: MutableRefObject<null>;
}

export default function ButtonComponent({
  children,
  className,
  disabled = false,
  onClick,
  reference,
}: ButtonProps) {
  return (
    <button
      className={clsx(styles.button, className)}
      disabled={disabled}
      onClick={onClick}
      ref={reference}
      type="button"
    >
      {children}
    </button>
  );
}
