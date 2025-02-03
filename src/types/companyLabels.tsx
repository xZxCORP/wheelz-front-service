import type { Company, CompanySector, CompanySize, CompanyType } from '@zcorp/wheelz-contracts';

export const companyLabels: Record<keyof Company, string> = {
  id: 'ID',
  name: 'Nom',
  vatNumber: 'Numéro de TVA',
  companySector: "Secteur d'activité",
  companySize: 'Taille',
  companyType: 'Type',
  country: 'Pays',
  createdAt: 'Date de création',
  headquartersAddress: 'Adresse du siège social',
  isIdentified: 'Validée ?',
  ownerId: 'ID du propriétaire',
};

export const companyTypeLabels: Record<CompanyType, string> = {
  insurance_provider: 'Assureur',
  other: 'Autre',
};
export const companySizeLabels: Record<CompanySize, string> = {
  micro: 'Micro',
  small: 'Petite',
  medium: 'Moyenne',
  large: 'Grande',
};
export const companySectorsLabels: Record<CompanySector, string> = {
  private: 'Privé',
  public: 'Public',
};
