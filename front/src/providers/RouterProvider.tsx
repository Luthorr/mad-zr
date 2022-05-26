import { ReactNode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

type RouterProviderProps = {
  children: ReactNode;
};

const RouterProvider = ({ children }: RouterProviderProps) => {
  return <Router>{children}</Router>;
};

export default RouterProvider;
