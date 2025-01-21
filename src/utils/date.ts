export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('fr-FR', {
    dateStyle: 'full',
    timeStyle: 'long',
  }).format(date);
};

export const formatFrenchDate = (date: Date): string => {
  return new Intl.DateTimeFormat('fr-FR', {
    dateStyle: 'short',
  }).format(date);
};
export const formatDateWithoutTime = (date: Date): string => {
  return new Intl.DateTimeFormat('fr-FR', {
    dateStyle: 'full',
  }).format(date);
};
