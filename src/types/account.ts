export type RegisterStep = 'account-type' | 'business-infos' | 'personnal-infos' | 'success';

export type AccountType = 'personal' | 'business';
type AccountTypeLabel = {
  [K in AccountType]: string;
};

export const accountTypeLabels: AccountTypeLabel = {
  personal: 'Compte personnel',
  business: 'Compte professionnel',
};
