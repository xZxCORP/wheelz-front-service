import type { VariantProps } from 'tailwind-variants';

import { badge } from './styles';

export interface Props {
  badgeStyle?: VariantProps<typeof badge>;
  className?: string;
  text: string;
}
export const Badge = ({ badgeStyle, className, text }: Props) => {
  return <div className={badge({ ...badgeStyle, className })}>{text}</div>;
};
