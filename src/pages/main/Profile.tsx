import { zodResolver } from '@hookform/resolvers/zod';
import { type UserUpdate, userUpdateSchema } from '@zcorp/wheelz-contracts';
import { useForm } from 'react-hook-form';

import { userTsr } from '../../clients/api/user.api';
import { Button } from '../../components/shared/button/Button';
import { Card, CardContent, CardHeader } from '../../components/shared/Card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../components/shared/form/Form';
import { Input } from '../../components/shared/form/Input';
import { H2 } from '../../components/shared/typography/Typography';
import { AuthStore } from '../../stores/useAuthStore';
import { useSnackbarStore } from '../../stores/useSnackbar';

export const Profile = () => {
  const { user, setUser } = AuthStore.use();
  const { addSnackbar } = useSnackbarStore();

  const form = useForm<UserUpdate>({
    resolver: zodResolver(userUpdateSchema),
    mode: 'onChange',
    defaultValues: {
      firstname: user?.firstname ?? '',
      lastname: user?.lastname ?? '',
    },
  });
  const { mutate, isPending } = userTsr.users.updateUser.useMutation({
    onSuccess: (result) => {
      addSnackbar(result.body.message, 'success');
      if (user) {
        setUser({
          ...user,
          firstname: form.getValues('firstname')!,
          lastname: form.getValues('lastname')!,
        });
      }
    },
  });

  if (!user) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold">Vous n&apos;êtes pas connecté.</h1>
      </div>
    );
  }

  const handleSubmit = (data: any) => {
    mutate({
      body: {
        firstname: data.firstname,
        lastname: data.lastname,
      },
      params: {
        id: user.id.toString(),
      },
    });
  };

  return (
    <Form {...form}>
      <Card className="w-full">
        <CardHeader>
          <H2>
            Profil de {user.firstname} {user.lastname}
          </H2>
        </CardHeader>
        <CardContent>
          <h2 className="mb-4 text-xl font-semibold text-neutral-600">Informations personnelles</h2>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col items-center justify-center gap-6"
          >
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
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input value={user.email} disabled />
              </FormControl>
            </FormItem>
            <Button type="submit" disabled={isPending}>
              {isPending ? 'En cours...' : 'Mettre à jour'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </Form>
  );
};
