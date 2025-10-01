import { ReactNode } from 'react';
import { NavigateFunction } from 'react-router-dom';

export interface RouterProviderProps {
  children: ReactNode;
  navigate: NavigateFunction;
}

export const RouterProvider = ({ children }: RouterProviderProps) => {
  // This is a simple wrapper that provides navigate function
  // In a real implementation, you might want to use React Context
  return <>{children}</>;
};
