import clsx from 'clsx';
import type { ReactNode } from 'react';

import { Button } from '../button/Button';
import { useFormContext } from './Form';

interface Props {
  children: ReactNode;
  className?: string;
}

export function FormSubmit({ children, className }: Props) {
  const { form } = useFormContext();
  const {
    formState: { isValid },
  } = form;

  return (
    <Button type="submit" disabled={!isValid} className={clsx('w-full', className)}>
      {children}
    </Button>
  );
}
