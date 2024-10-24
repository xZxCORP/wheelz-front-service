/* eslint-disable unicorn/consistent-function-scoping */
import { type Login } from '@zcorp/wheelz-contracts';
import loginSchema from '@zcorp/wheelz-contracts/dist/authentication/schemas/login';

import { Button } from '../../../shared/button/Button';
import { Form } from '../../../shared/form/Form';
import { FormField } from '../../../shared/form/FormField';
import { FormInput } from '../../../shared/form/FormInput';
import { FormLabel } from '../../../shared/form/FormLabel';
import { FormSubmit } from '../../../shared/form/FormSubmit';
type Props = {
  onSwitchToRegister: () => void;
};
export const LoginForm = ({ onSwitchToRegister }: Props) => {
  const handleSubmit = (data: Login) => {
    console.log(data);
  };

  return (
    <Form schema={loginSchema} onSubmit={handleSubmit}>
      <FormField>
        <FormLabel htmlFor="email">Email</FormLabel>
        <FormInput id="email" name="email" type="email" placeholder="Entrez votre email" />
      </FormField>

      <FormField>
        <FormLabel htmlFor="password">Mot de passe</FormLabel>
        <FormInput
          id="password"
          name="password"
          type="password"
          placeholder="Entrez votre mot de passe"
        />
      </FormField>

      <FormSubmit>Se connecter</FormSubmit>

      <div className="border-t border-secondary-200 pt-4">
        <Button
          buttonStyle={{ color: 'secondary' }}
          buttonVariant="ghost"
          onClick={onSwitchToRegister}
        >
          Je n&apos;ai pas de compte - S&apos;inscrire
        </Button>
      </div>
    </Form>
  );
};
