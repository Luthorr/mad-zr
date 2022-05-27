import { ReactNode } from 'react';

export type ButtonProps = {
  children: ReactNode;
  variant: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  handleClick?: () => void;
};
