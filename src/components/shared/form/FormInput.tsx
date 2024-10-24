import clsx from 'clsx';
import type { InputHTMLAttributes } from 'react';
import type { FieldValues, Path } from 'react-hook-form';

import { useFormContext } from './Form';

interface Props<T extends FieldValues> extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name'> {
  name: Path<T>;
}

export function FormInput<T extends FieldValues>({
  name,
  type = 'text',
  className,
  ...props
}: Props<T>) {
  const { form } = useFormContext<T>();
  const {
    register,
    formState: { errors },
  } = form;
  const error = errors[name];

  return (
    <>
      <input
        {...register(name)}
        type={type}
        className={clsx(
          'w-full rounded-md border px-3 py-2 text-sm transition-colors duration-200',
          error
            ? 'border-error-500 focus:border-error-500 focus:ring-error-500'
            : 'border-secondary-300 focus:border-primary-500 focus:ring-primary-500',
          className
        )}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-error-500">{error.message?.toString()}</p>}
    </>
  );
}
