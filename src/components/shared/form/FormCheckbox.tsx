import clsx from 'clsx';
import type { InputHTMLAttributes } from 'react';
import type { FieldValues, Path } from 'react-hook-form';

import { useFormContext } from './Form';

interface Props<T extends FieldValues>
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name' | 'type'> {
  name: Path<T>;
  label: string;
}

export function FormCheckbox<T extends FieldValues>({
  name,
  label,
  className,
  ...props
}: Props<T>) {
  const { form } = useFormContext<T>();
  const { register } = form;

  return (
    <div className="flex items-center gap-2">
      <input
        {...register(name)}
        type="checkbox"
        className={clsx(
          'size-4 rounded border-secondary-300 text-primary-500',
          'focus:ring-primary-500 focus:ring-offset-0',
          className
        )}
        {...props}
      />
      <label className="text-sm text-secondary-600">{label}</label>
    </div>
  );
}
