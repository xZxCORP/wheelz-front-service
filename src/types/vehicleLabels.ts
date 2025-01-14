import type { Vehicle } from '@zcorp/shared-typing-wheelz';

export const vehicleLabels: Record<keyof Vehicle, string> = {
  vin: 'Numéro de série du véhicule (VIN)',
  features: 'Caractéristiques du véhicule',
  infos: 'Informations sur le véhicule',
  history: 'Historique du véhicule',
  technicalControls: 'Contrôles techniques',
  sinisterInfos: 'Informations sur les sinistres',
};

export const vehicleFeaturesLabels: Record<keyof Vehicle['features'], string> = {
  brand: 'Marque',
  model: 'Modèle',
  cvPower: 'Puissance fiscale',
  color: 'Couleur',
  tvv: 'Type de véhicule (TVV)',
  cnitNumber: 'Numéro CNIT',
  receptionType: 'Type de réception',
  technicallyAdmissiblePTAC: 'PTAC techniquement admissible',
  ptac: 'PTAC',
  ptra: 'PTRA',
  ptService: 'Poids à vide (PT service)',
  ptav: 'Poids total autorisé en charge (PTAV)',
  category: 'Catégorie',
  gender: 'Genre',
  ceBody: 'Carrosserie CE',
  nationalBody: 'Carrosserie nationale',
  receptionNumber: 'Numéro de réception',
  displacement: 'Cylindrée',
  netPower: 'Puissance nette',
  energy: 'Énergie',
  seatingNumber: 'Nombre de places assises',
  standingPlacesNumber: 'Nombre de places debout',
  sonorousPowerLevel: 'Niveau de puissance sonore',
  engineSpeed: 'Régime moteur',
  co2Emission: 'Émissions de CO2',
  pollutionCode: 'Code pollution',
  powerMassRatio: 'Rapport puissance/masse',
};

export const vehicleInfosLabels: Record<keyof Vehicle['infos'], string> = {
  holderCount: 'Nombre de propriétaires',
  firstRegistrationInFranceDate: 'Première immatriculation en France',
  firstSivRegistrationDate: 'Date de première immatriculation au SIV',
  licensePlate: "Plaque d'immatriculation",
  sivConversionDate: 'Date de conversion au SIV',
};

export const vehicleHistoryLabels: Record<keyof Vehicle['history'][0], string> = {
  date: 'Date',
  type: 'Type',
};

export const technicalControlLabels: Record<keyof Vehicle['technicalControls'][0], string> = {
  date: 'Date',
  result: 'Résultat',
  resultRaw: 'Résultat brut',
  nature: 'Nature',
  km: 'Kilométrage',
};

export const sinisterInfosLabels: Record<keyof Vehicle['sinisterInfos'], string> = {
  count: 'Nombre de sinistres',
  lastResolutionDate: 'Date de résolution du dernier sinistre',
  lastSinisterDate: 'Date du dernier sinistre',
};
