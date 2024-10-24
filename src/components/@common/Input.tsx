import * as React from 'react';

import { cn } from 'components/@common/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
  }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({
    className, type, startIcon, endIcon, ...props
  }, ref) => (
    <div className="w-full relative">
      {startIcon}
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-input bg-background py-2 px-4 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50',
          startIcon ? 'pl-8' : '',
          endIcon ? 'pr-8' : '',
          className,
        )}
        ref={ref}
        {...props}
      />
      {endIcon}
    </div>
  ),
);
Input.displayName = 'Input';

export { Input };
