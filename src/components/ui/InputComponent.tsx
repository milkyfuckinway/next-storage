import styles from './InputComponent.module.scss';

type Input = {
  checked: boolean;
  disabled?: boolean;
  label: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type?: string;
  value: string;
};

export default function InputComponent({
  checked,
  disabled = false,
  label,
  name,
  onChange,
  type = 'checkbox',
  value,
}: Input) {
  return (
    <div className={styles.input}>
      <label>
        <input
          checked={checked}
          disabled={disabled}
          name={name}
          onChange={onChange}
          type={type}
          value={value}
        />
        <div className={styles.pin} />
        <span>{label}</span>
      </label>
    </div>
  );
}
