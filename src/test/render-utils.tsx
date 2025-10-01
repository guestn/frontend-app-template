import { RenderOptions, RenderResult, render } from '@testing-library/react';
import { ReactElement, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastProvider } from '@pufferfinance/puffer-ui-components';
import { BrowserRouter } from 'react-router-dom';
import { SWRProvider } from '@/context/swr-provider/swr-provider';

export interface TestWrapperProps {
  children?: ReactNode;
}

export const TestWrapper: React.FC<{ children: ReactNode }> = ({
  children,
}) => (
  <QueryClientProvider client={new QueryClient()}>
    <SWRProvider>
      <ToastProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </ToastProvider>
    </SWRProvider>
  </QueryClientProvider>
);

/*
 * Wraps react testing library render function with TestWrapper
 */
export const wrappedRender = (
  jsx: ReactElement,
  _wrapperProps: TestWrapperProps = {},
  options: RenderOptions = {},
): RenderResult => {
  return render(jsx, {
    wrapper: TestWrapper,
    ...options,
  });
};
