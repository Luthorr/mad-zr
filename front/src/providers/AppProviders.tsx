import { ReactNode } from 'react';
import QueryProvider from './QueryProvider';
import RouterProvider from './RouterProvider';

type AppProvidersProps = {
  children: ReactNode;
};

const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <RouterProvider>
      <QueryProvider>{children}</QueryProvider>
    </RouterProvider>
  );
};

export default AppProviders;
