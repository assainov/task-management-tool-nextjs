import { render, RenderOptions } from '@testing-library/react';
import { ReactElement, ReactNode } from 'react';
import { StoreProvider } from 'services/redux';

interface Props {
  children: ReactNode;
}

const Provider = ({ children }: Props) => (
  <StoreProvider>{children}</StoreProvider>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {
  wrapper: Provider,
  ...options,
});

export * from '@testing-library/react';
export { customRender as render };
