import type { Metadata } from 'next';

import ProvidersComponent from '@/components/providers/ProvidersComponent';
import '@/styles/index.scss';
import clsx from 'clsx';
import localFont from 'next/font/local';

export const metadata: Metadata = {
  description: 'Next.js Template',
  title: 'Next.js Template',
};

const EestiFont = localFont({
  preload: true,
  src: [
    { path: '../shared/assets/fonts/GTEesti-400.woff2', weight: '400' },
    { path: '../shared/assets/fonts/GTEesti-700.woff2', weight: '700' },
  ],
  variable: '--eesti',
});

const MsSansSerif = localFont({
  preload: true,
  src: [
    { path: '../shared/assets/fonts/ms-sans-serif-regular.woff2', weight: '400' },
    { path: '../shared/assets/fonts/ms-sans-serif-bold.woff2', weight: '700' },
  ],
  variable: '--ms',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      className={clsx(EestiFont.variable, MsSansSerif.variable)}
      lang="en"
      style={{ fontFamily: 'var(--ms)' }}
      suppressHydrationWarning
    >
      <body>
        <ProvidersComponent>
          <main>{children}</main>
        </ProvidersComponent>
      </body>
    </html>
  );
}
