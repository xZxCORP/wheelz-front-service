import { zodResolver } from '@hookform/resolvers/zod';
import type { User } from '@zcorp/wheelz-contracts';
import registerSchema from '@zcorp/wheelz-contracts/dist/authentication/schemas/register';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { authTsr } from '../../../../clients/api/auth.api';
import { Button } from '../../../shared/button/Button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../../shared/form/Form';
import { Input } from '../../../shared/form/Input';
const registerWithConfirmationSchema = registerSchema
  .extend({
    passwordConfirmation: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: 'Les mots de passe ne correspondent pas',
    path: ['passwordConfirmation'],
  });
type RegisterWithConfirmation = z.infer<typeof registerWithConfirmationSchema>;
type Props = {
  onSwitchToLogin: () => void;
  onRegistered: (data: User, password: string) => void;
};
export const PersonalInfosForm = ({ onSwitchToLogin, onRegistered }: Props) => {
  const form = useForm<RegisterWithConfirmation>({
    resolver: zodResolver(registerWithConfirmationSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
      firstname: '',
      lastname: '',
    },
  });
  const { mutate } = authTsr.authentication.register.useMutation({
    onSuccess: (data) => {
      onRegistered(data.body.data, form.getValues().password);
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) =>
          mutate({
            body: {
              email: data.email,
              password: data.password,
              firstname: data.firstname,
              lastname: data.lastname,
            },
          })
        )}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom</FormLabel>
              <FormControl>
                <Input placeholder="Nom" {...field} />
              </FormControl>
              <FormMessage />
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
              <FormMessage />
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
              <FormMessage />
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
              <FormMessage />
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
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">S&apos;inscrire</Button>
        <Button onClick={onSwitchToLogin} buttonVariant="ghost">
          J&apos;ai déjà un compte / Se connecter
        </Button>
      </form>
    </Form>
  );
};
