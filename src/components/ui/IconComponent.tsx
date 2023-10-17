import iconPaths from '@/shared/constants/IconPaths';
import { useAppSelector } from '@/shared/store/store';
import Image from 'next/image';

type Size = 'big' | 'small';

const calcSize = (size: Size) => (size === 'small' ? 16 : 48);

const calcPath = ({
  item,
  openedList,
  size,
}: {
  item: DesktopFile;
  openedList: DesktopFile[];
  size: Size;
}) => {
  if (item.type === 'image') {
    return item.src;
  }

  if (openedList.includes(item)) {
    return size === 'small' ? iconPaths[item.icon].opened.small : iconPaths[item.icon].opened.big;
  }
  return size === 'small' ? iconPaths[item.icon].closed.small : iconPaths[item.icon].closed.big;
};

export default function IconComponent({ item, size }: { item: DesktopFile; size: Size }) {
  const openedList = useAppSelector((state) => state.files.openedList);

  return (
    <Image
      alt={item.type}
      height={calcSize(size)}
      priority
      src={calcPath({ item, openedList, size })}
      width={calcSize(size)}
    />
  );
}
