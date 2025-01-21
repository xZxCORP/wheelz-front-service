import * as LabelPrimitive from '@radix-ui/react-label';
import clsx from 'clsx';
import React from 'react';

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & { required?: boolean }
>(({ className, children, required = true, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={clsx(
      'text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      required && 'font-bold italic',
      !required && 'font-medium',
      className
    )}
    {...props}
  >
    {children}
    {required && '*'}
  </LabelPrimitive.Root>
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
