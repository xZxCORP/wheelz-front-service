import * as PopoverPrimitive from '@radix-ui/react-popover';
import clsx from 'clsx';
import * as React from 'react';

const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={clsx(
        'z-50 w-72 rounded-md border border-primary-400 bg-background p-4 shadow-md outline-none',
        'data-[state=open]:animate-fade-in',
        'data-[state=closed]:animate-fade-out',
        'data-[side=bottom]:animate-slide-in-from-top',
        'data-[side=top]:animate-slide-in-from-bottom',
        'data-[side=left]:animate-slide-in-from-right',
        'data-[side=right]:animate-slide-in-from-left',
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));

PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverContent, PopoverTrigger };
