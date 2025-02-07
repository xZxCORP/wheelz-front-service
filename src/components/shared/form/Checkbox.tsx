'use client';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import clsx from 'clsx';
import * as React from 'react';
import { FaCheck } from 'react-icons/fa6';

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={clsx(
      'data-[state=checked]:text-secondary-foreground border-primary-400 ring-offset-background focus-visible:ring-ring data-[state=checked]:bg-primary-400 peer size-4 shrink-0 rounded-sm border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={clsx('flex items-center justify-center text-current')}>
      <FaCheck size={16} />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
