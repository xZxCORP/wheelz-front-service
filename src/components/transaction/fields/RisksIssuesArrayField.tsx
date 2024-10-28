import { type Control, useFieldArray } from 'react-hook-form';

import { Button } from '../../shared/button/Button';
import { FormControl, FormField, FormItem, FormMessage } from '../../shared/form/Form';
import { Input } from '../../shared/form/Input';

type Props = {
  control: Control<any>;
  name: string;
  buttonLabel: string;
  placeholder: string;
};

export const RiskIssuesArrayField = ({ control, name, buttonLabel, placeholder }: Props) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  return (
    <>
      <Button
        type="button"
        buttonStyle={{ color: 'secondary' }}
        onClick={() => append({ name: '' })}
      >
        {buttonLabel}
      </Button>
      {fields.map((field, index) => (
        <FormField
          key={field.id}
          control={control}
          name={`${name}.${index}.name`}
          render={({ field }) => (
            <div className="flex w-full gap-2">
              <FormItem>
                <FormControl>
                  <Input
                    className="w-full"
                    {...field}
                    placeholder={`${placeholder} ${index + 1}`}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
              <Button buttonStyle={{ color: 'error' }} onClick={() => remove(index)}>
                Supprimer
              </Button>
            </div>
          )}
        />
      ))}
    </>
  );
};
