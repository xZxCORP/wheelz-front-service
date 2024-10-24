import type { VariantProps } from 'tailwind-variants';

import { badge } from './styles';

export interface Props {
  badgeStyle?: VariantProps<typeof badge>;
  className?: string;
  children?: React.ReactNode;
}
export const Badge = ({ badgeStyle, className, children }: Props) => {
  return <div className={badge({ ...badgeStyle, className })}>{children}</div>;
};
