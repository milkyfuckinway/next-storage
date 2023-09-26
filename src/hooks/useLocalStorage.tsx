import { useEffect, useState } from 'react';

export default function useLocalStorageState(initialState: boolean, key: string) {
  const [value, setValue] = useState<boolean>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? (JSON.parse(storedValue) as boolean) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
