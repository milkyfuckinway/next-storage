import styles from './ButtonComponent.module.scss';

export default function ButtonComponent({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button className={styles.button} onClick={onClick} type="button">
      {children}
    </button>
  );
}
