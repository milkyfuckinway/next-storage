import { useAppSelector } from '@/store/store';

import Window from '../Window/Window';

export default function Display() {
  const openedList = useAppSelector((state) => state.files.openedList);

  return (
    <>
      {openedList.map((a) => (
        <Window item={a} key={a.id} />
      ))}
    </>
  );
}
