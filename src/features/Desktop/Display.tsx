import { useAppSelector } from '@/store/store';

import Window from './Window';

export default function Display() {
  const openedList = useAppSelector((state) => state.files.openedList);

  return (
    <div>
      {openedList.map((a) => (
        <Window item={a} key={a.id} />
      ))}
    </div>
  );
}
