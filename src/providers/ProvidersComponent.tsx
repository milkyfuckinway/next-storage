'use client';

import { store } from '@/store/store';
import { Provider } from 'react-redux';

function ProvidersComponent({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
export default ProvidersComponent;
