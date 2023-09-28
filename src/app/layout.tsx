import type { Metadata } from 'next';

import Header from '@/components/base/Header';
import HtmlProvider from '@/store/HtmlProvider';
import ReduxProvider from '@/store/ReduxProvider';

export const metadata: Metadata = {
  description: 'Next.js Template',
  title: 'Next.js Template',

  // Prevent zoom
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider>
      <HtmlProvider>
        <Header />
        <main>{children}</main>
      </HtmlProvider>
    </ReduxProvider>
  );
}
