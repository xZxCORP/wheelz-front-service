import {
  type CompanyCreate,
  companySectorValues,
  companySizeValues,
  companyTypeValues,
} from '@zcorp/wheelz-contracts';
import { type UseFormReturn, useFormState } from 'react-hook-form';

import {
  companyLabels,
  companySectorsLabels,
  companySizeLabels,
  companyTypeLabels,
} from '../../../../../types/companyLabels';
import { europeanUnionCountries } from '../../../../../types/countries';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../../../shared/form/Form';
import { Input } from '../../../../shared/form/Input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../../shared/form/Select';

type Props = {
  form: UseFormReturn<CompanyCreate>;
};
export const CompanyInfosForm = ({ form }: Props) => {
  const { errors } = useFormState(form);
  return (
    <Form {...form}>
      <form className="flex flex-col gap-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{companyLabels.name}</FormLabel>
              <FormControl>
                <Input autoComplete="name" placeholder={companyLabels.name} {...field} />
              </FormControl>
              <FormMessage>{errors.name?.message}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="vatNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{companyLabels.vatNumber}</FormLabel>
              <FormControl>
                <Input placeholder={companyLabels.vatNumber} {...field} />
              </FormControl>
              <FormMessage>{errors.vatNumber?.message}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="headquartersAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{companyLabels.headquartersAddress}</FormLabel>
              <FormControl>
                <Input placeholder={companyLabels.headquartersAddress} {...field} />
              </FormControl>
              <FormMessage>{errors.headquartersAddress?.message}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{companyLabels.country}</FormLabel>

              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder={companyLabels.country} />
                </SelectTrigger>
                <SelectContent>
                  {europeanUnionCountries.map((value) => (
                    <SelectItem key={value} value={value}>
                      {value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage>{errors.companyType?.message}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="companyType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{companyLabels.companyType}</FormLabel>

              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder={companyLabels.companyType} />
                </SelectTrigger>
                <SelectContent>
                  {companyTypeValues.map((value) => (
                    <SelectItem key={value} value={value}>
                      {companyTypeLabels[value]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage>{errors.companyType?.message}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="companySector"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{companyLabels.companySector}</FormLabel>

              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder={companyLabels.companySector} />
                </SelectTrigger>
                <SelectContent>
                  {companySectorValues.map((value) => (
                    <SelectItem key={value} value={value}>
                      {companySectorsLabels[value]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage>{errors.companyType?.message}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="companySize"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{companyLabels.companySize}</FormLabel>

              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder={companyLabels.companySize} />
                </SelectTrigger>
                <SelectContent>
                  {companySizeValues.map((value) => (
                    <SelectItem key={value} value={value}>
                      {companySizeLabels[value]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage>{errors.companySize?.message}</FormMessage>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
