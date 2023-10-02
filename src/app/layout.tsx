import type { Metadata } from 'next';

import HtmlProvider from '@/store/HtmlProvider';
import ReduxProvider from '@/store/ReduxProvider';

export const metadata: Metadata = {
  description: 'Next.js Template',
  title: 'Next.js Template',

  // Prevent zoom
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider>
      <HtmlProvider>
        <main>{children}</main>
      </HtmlProvider>
    </ReduxProvider>
  );
}
