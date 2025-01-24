import { type UseFormReturn, useFormState } from 'react-hook-form';

import type { RegisterWithConfirmation } from '../../../../../types/account';
import { Button } from '../../../../shared/button/Button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../../../shared/form/Form';
import { Input } from '../../../../shared/form/Input';

type Props = {
  onSwitchToLogin: () => void;
  form: UseFormReturn<RegisterWithConfirmation>;
};
export const PersonalInfosForm = ({ onSwitchToLogin, form }: Props) => {
  const { errors } = useFormState(form);
  return (
    <Form {...form}>
      <form className="flex flex-col gap-4">
        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom</FormLabel>
              <FormControl>
                <Input placeholder="Nom" {...field} />
              </FormControl>
              <FormMessage>{errors.lastname?.message}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prénom</FormLabel>
              <FormControl>
                <Input placeholder="Prénom" {...field} />
              </FormControl>
              <FormMessage>{errors.firstname?.message}</FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage>{errors.email?.message}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mot de passe</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Mot de passe" {...field} />
              </FormControl>
              <FormMessage>{errors.password?.message}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="passwordConfirmation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirmer le mot de passe</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Confirmer le mot de passe" {...field} />
              </FormControl>
              <FormMessage>{errors.passwordConfirmation?.message}</FormMessage>
            </FormItem>
          )}
        />
        <Button onClick={onSwitchToLogin} buttonVariant="ghost">
          J&apos;ai déjà un compte / Se connecter
        </Button>
      </form>
    </Form>
  );
};
