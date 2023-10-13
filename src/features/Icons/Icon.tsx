import iconPaths from '@/constants/IconPaths';
import { useAppSelector } from '@/store/store';
import Image from 'next/image';

export default function Icon({
  item,
  size,
}: {
  item: DesktopFile;
  size: 'big' | 'medium' | 'small';
}) {
  const openedList = useAppSelector((state) => state.files.openedList);

  const calcPath = () => {
    if (openedList.includes(item)) {
      return size === 'small' ? iconPaths[item.icon].opened.small : iconPaths[item.icon].opened.big;
    }
    return size === 'small' ? iconPaths[item.icon].closed.small : iconPaths[item.icon].closed.big;
  };

  const calcSize = () => (size === 'small' ? 16 : 48);

  if (item.type !== 'image') {
    return (
      <Image alt={item.type} height={calcSize()} priority src={calcPath()} width={calcSize()} />
    );
  }
  if (item.type === 'image') {
    return <Image alt={item.type} height={calcSize()} priority src={item.src} width={calcSize()} />;
  }
}
