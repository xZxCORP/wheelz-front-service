/* eslint-disable unicorn/consistent-function-scoping */
import type { Register } from '@zcorp/wheelz-contracts';
import registerSchema from '@zcorp/wheelz-contracts/dist/authentication/schemas/register';

import { Button } from '../../../shared/button/Button';
import { Form } from '../../../shared/form/Form';
import { FormField } from '../../../shared/form/FormField';
import { FormInput } from '../../../shared/form/FormInput';
import { FormLabel } from '../../../shared/form/FormLabel';
import { FormSubmit } from '../../../shared/form/FormSubmit';

type Props = {
  onSwitchToLogin: () => void;
};

export const PersonalInfosForm = ({ onSwitchToLogin }: Props) => {
  const handleSubmit = (data: Register) => {
    console.log(data);
  };

  return (
    <Form schema={registerSchema} onSubmit={handleSubmit} className="">
      <FormField>
        <FormLabel htmlFor="lastname">Nom</FormLabel>
        <FormInput id="lastname" name="lastname" type="text" placeholder="Entrez votre nom" />
      </FormField>
      <FormField>
        <FormLabel htmlFor="firstname">Prénom</FormLabel>
        <FormInput id="firstname" name="firstname" type="text" placeholder="Entrez votre prénom" />
      </FormField>
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

      <FormSubmit>S&apos;inscrire</FormSubmit>

      <div className="border-t border-secondary-200 pt-4">
        <Button buttonStyle={{ color: 'secondary' }} buttonVariant="ghost" asChild>
          <a href="#" onClick={onSwitchToLogin}>
            J&apos;ai déjà un compte - Se connecter ?
          </a>
        </Button>
      </div>
    </Form>
  );
};
