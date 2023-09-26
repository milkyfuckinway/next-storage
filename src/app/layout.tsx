import type { Metadata } from 'next';

import Header from '@/components/base/Header';
import HtmlProvider from '@/store/HtmlProvider';
import ReduxProvider from '@/store/ReduxProvider';

export const metadata: Metadata = {
  description: 'Next.js Template',
  title: 'Next.js Template',
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
