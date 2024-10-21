import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';
import type { VariantProps } from 'tailwind-variants';

import { ghostButton, outlineButton, solidButton } from './styles';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  buttonStyle?: VariantProps<typeof solidButton>;
  buttonVariant?: 'solid' | 'outline' | 'ghost';
}
export const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { buttonStyle, buttonVariant = 'solid', asChild, className, ...rest } = props;

  const renderButtonVariant = () => {
    if (buttonVariant === 'solid') {
      return solidButton({ ...buttonStyle, className });
    } else if (buttonVariant === 'outline') {
      return outlineButton({ ...buttonStyle, className });
    }
    return ghostButton({ ...buttonStyle, className });
  };
  const Comp = asChild ? Slot : 'button';
  return <Comp ref={ref} className={renderButtonVariant()} {...rest} />;
});

Button.displayName = 'Button';
