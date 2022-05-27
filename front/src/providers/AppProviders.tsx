import { ReactNode } from 'react';
import QueryProvider from './QueryProvider';
import ReduxProvider from './ReduxProvider';
import RouterProvider from './RouterProvider';

type AppProvidersProps = {
  children: ReactNode;
};

const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <ReduxProvider>
      <RouterProvider>
        <QueryProvider>{children}</QueryProvider>
      </RouterProvider>
    </ReduxProvider>
  );
};

export default AppProviders;
