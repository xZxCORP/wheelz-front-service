import { forwardRef, useMemo } from 'react';
import { TbLoader } from 'react-icons/tb';
import { VariantProps } from 'tailwind-variants';

import { ghostButton, outlineButton, solidButton } from './styles';

type BaseButtonAttributes = React.ComponentPropsWithoutRef<'button'>;

type Ref = HTMLButtonElement;

interface Props extends BaseButtonAttributes {
  isLoading?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  buttonStyle?: VariantProps<typeof solidButton>;
  className?: string;
  buttonVariant?: 'solid' | 'outline' | 'ghost';
}

export const Button = forwardRef<Ref, Props>((props, ref) => {
  const {
    type,
    children,
    buttonStyle,
    buttonVariant = 'solid',
    disabled,
    isLoading,
    leftIcon,
    rightIcon,
    className,
    ...rest
  } = props;

  const { newIcon: icon, iconPlacement } = useMemo(() => {
    let newIcon = rightIcon || leftIcon;

    if (isLoading) {
      newIcon = <TbLoader className="animate-spin" size={25} />;
    }

    return {
      newIcon,
      iconPlacement: rightIcon ? ('right' as const) : ('left' as const),
    };
  }, [isLoading, leftIcon, rightIcon]);

  const renderButtonVariant = () => {
    if (buttonVariant === 'solid') {
      return solidButton({ ...buttonStyle, className });
    } else if (buttonVariant === 'outline') {
      return outlineButton({ ...buttonStyle, className });
    }
    return ghostButton({ ...buttonStyle, className });
  };

  return (
    <button
      className={renderButtonVariant()}
      {...rest}
      type={type ? 'submit' : 'button'}
      ref={ref}
      disabled={disabled || isLoading}
    >
      {icon && iconPlacement === 'left' ? (
        <span className={`inline-flex shrink-0 self-center ${children && !isLoading && 'mr-2'}`}>
          {icon}
        </span>
      ) : null}

      {!isLoading && children}

      {icon && iconPlacement === 'right' ? (
        <span className={`inline-flex shrink-0 self-center ${children && !isLoading && 'ml-2'}`}>
          {icon}
        </span>
      ) : null}
    </button>
  );
});

Button.displayName = 'Button';
