export type AccountType = 'personal' | 'business';
type AccountTypeLabel = {
  [K in AccountType]: string;
};

export const accountTypeLabels: AccountTypeLabel = {
  personal: 'Je suis un particulier',
  business: 'Je suis un professionnel',
};
export const successMessages: AccountTypeLabel = {
  personal: 'Merci pour votre inscription ! Vous allez recevoir un mail pour valider votre compte.',
  business:
    'Merci pour votre inscription ! Votre entreprise sera bientôt validée par notre équipe interne.',
};
export type RegisterStep =
  | 'account-type'
  | 'business-infos-company'
  | 'business-infos-owner'
  | 'personnal-infos'
  | 'success';
export const PROGRESS_STEPS_COMPANY: Array<RegisterStep> = [
  'account-type',
  'business-infos-company',
  'business-infos-owner',
  'success',
];
export const PROGRESS_STEPS_PERSONNAL: Array<RegisterStep> = [
  'account-type',
  'personnal-infos',
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
  'success': 'Formulaire validé',
};
