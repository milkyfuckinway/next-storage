import clsx from 'clsx';

import styles from './ButtonComponent.module.scss';

export default function ButtonComponent({ children, className, onClick }: ButtonProps) {
  return (
    <button className={clsx(styles.button, className)} onClick={onClick} type="button">
      {children}
    </button>
  );
}

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
}

ButtonComponent.defaultProps = {
  className: '',
};
