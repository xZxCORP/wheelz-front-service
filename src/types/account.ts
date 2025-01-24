import registerSchema from '@zcorp/wheelz-contracts/dist/authentication/schemas/register';
import { z } from 'zod';

export type AccountType = 'personal' | 'business';
type AccountTypeLabel = {
  [K in AccountType]: string;
};

export const accountTypeLabels: AccountTypeLabel = {
  personal: 'Je suis un particulier',
  business: 'Je suis un professionnel',
};
export const successMessages: AccountTypeLabel = {
  personal: 'Vous allez recevoir un mail pour valider votre compte.',
  business: 'Votre entreprise sera bientôt validée par notre équipe interne.',
};
export type RegisterStep =
  | 'account-type'
  | 'business-infos-company'
  | 'business-infos-owner'
  | 'personnal-infos'
  | 'recap'
  | 'success';
export const PROGRESS_STEPS_COMPANY: Array<RegisterStep> = [
  'account-type',
  'business-infos-company',
  'business-infos-owner',
  'recap',
  'success',
];
export const PROGRESS_STEPS_PERSONNAL: Array<RegisterStep> = [
  'account-type',
  'personnal-infos',
  'recap',
  'success',
];
export const getProgressSteps = (accountType: AccountType): Array<RegisterStep> => {
  if (accountType === 'personal') {
    return PROGRESS_STEPS_PERSONNAL;
  }
  return PROGRESS_STEPS_COMPANY;
};

export type RegisterStepLabel = {
  [K in RegisterStep]: string;
};
export const stepLabels: RegisterStepLabel = {
  'account-type': 'Choix du type de compte',
  'business-infos-company': 'Informations sur votre entreprise',
  'business-infos-owner': "Informations sur le propriétaire de l'entreprise",
  'personnal-infos': 'Informations personnelles',
  'recap': 'Récapitulatif',
  'success': 'Merci',
};

export const registerWithConfirmationSchema = registerSchema
  .extend({
    passwordConfirmation: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: 'Les mots de passe ne correspondent pas',
    path: ['passwordConfirmation'],
  });
export type RegisterWithConfirmation = z.infer<typeof registerWithConfirmationSchema>;
