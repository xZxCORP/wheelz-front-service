import { zodResolver } from '@hookform/resolvers/zod';
import type { Register } from '@zcorp/wheelz-contracts';
import registerSchema from '@zcorp/wheelz-contracts/dist/authentication/schemas/register';
import { useForm } from 'react-hook-form';

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

type Props = {
  onSwitchToLogin: () => void;
};
export const BusinessInfosForm = ({ onSwitchToLogin }: Props) => {
  const form = useForm<Register>({
    resolver: zodResolver(registerSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      firstname: '',
      lastname: '',
    },
  });
  const { mutate } = authTsr.authentication.register.useMutation({
    onSuccess: () => {
      console.log('test');
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => mutate({ body: data }))}
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
        <Button type="submit">S&apos;inscrire</Button>
        <Button onClick={onSwitchToLogin} buttonVariant="ghost">
          J&apos;ai déjà un compte / Se connecter
        </Button>
      </form>
    </Form>
  );
};
