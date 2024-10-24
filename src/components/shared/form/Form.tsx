import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import { createContext, type ReactNode, useContext } from 'react';
import { type DefaultValues, type FieldValues, useForm, type UseFormReturn } from 'react-hook-form';
import type { z } from 'zod';
interface FormContextValue<T extends FieldValues> {
  form: UseFormReturn<T>;
}

const FormContext = createContext<FormContextValue<any> | undefined>(undefined);

export const useFormContext = <T extends FieldValues>() => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a Form component');
  }
  return context as FormContextValue<T>;
};

interface Props<T extends FieldValues> {
  children: ReactNode;
  onSubmit: (data: T) => void;
  schema: z.ZodType<T>;
  defaultValues?: DefaultValues<T>;
  className?: string;
}

export function Form<T extends FieldValues>({
  children,
  onSubmit,
  schema,
  defaultValues,
  className,
}: Props<T>) {
  const form = useForm<T>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues,
  });

  return (
    <FormContext.Provider value={{ form }}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={clsx(
          'flex flex-col gap-4 rounded-lg border border-secondary-200 bg-white p-6 shadow-sm',
          className
        )}
      >
        {children}
      </form>
    </FormContext.Provider>
  );
}
