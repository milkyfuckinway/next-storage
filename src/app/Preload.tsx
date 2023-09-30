import Image from 'next/image';

const images = [
  'interface/corner.png',
  'icons/briefcase16.png',
  'icons/briefcase32.png',
  'icons/briefcase48.png',
  'icons/file16.png',
  'icons/file32.png',
  'icons/file48.png',
  'icons/folder-closed16.png',
  'icons/folder-closed32.png',
  'icons/folder-closed48.png',
  'icons/folder-opened16.png',
  'icons/folder-opened32.png',
  'icons/folder-opened48.png',
  'icons/html16.png',
  'icons/html32.png',
  'icons/html48.png',
  'icons/notepad16.png',
  'icons/notepad32.png',
  'icons/notepad48.png',
];

export default function Preload() {
  return (
    <div className="visually-hidden">
      {images.map((image) => (
        <Image alt="#" height={0} key={image} src={image} width={0} />
      ))}
    </div>
  );
}
