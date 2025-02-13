import { zodResolver } from '@hookform/resolvers/zod';
import { type Login, loginSchema } from '@zcorp/wheelz-contracts';
import { useForm } from 'react-hook-form';

import { authTsr } from '../../../../../clients/api/auth.api';
import { useAuthStore } from '../../../../../stores/useAuthStore';
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
  onSwitchToRegister?: () => void;
  onLogged: () => void;
};
export const LoginForm = ({ onSwitchToRegister, onLogged }: Props) => {
  const form = useForm<Login>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { setToken } = useAuthStore();
  const { mutate } = authTsr.authentication.login.useMutation({
    onSuccess: (response) => {
      setToken(response.body.token);
      onLogged();
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

        <Button type="submit">Se connecter</Button>
        {onSwitchToRegister && (
          <Button onClick={onSwitchToRegister} buttonVariant="ghost">
            Je n&apos;ai pas de compte / S&apos;inscrire
          </Button>
        )}
      </form>
    </Form>
  );
};
