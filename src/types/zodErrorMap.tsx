import type { z } from 'zod';

export const zodFrenchErrorMap: z.ZodErrorMap = (issue, ctx) => {
  let message: string;

  switch (issue.code) {
    case 'invalid_type': {
      message =
        issue.received === 'undefined' || issue.received === 'null'
          ? 'Ce champ est requis'
          : 'Type invalide';
      break;
    }

    case 'too_small': {
      if (issue.type === 'string') {
        message =
          issue.minimum === 1
            ? 'Ce champ ne peut pas être vide'
            : `Minimum ${issue.minimum} caractères requis`;
      } else if (issue.type === 'array') {
        message = `Minimum ${issue.minimum} éléments requis`;
      } else {
        message = `Doit être supérieur ou égal à ${issue.minimum}`;
      }
      break;
    }

    case 'too_big': {
      if (issue.type === 'string') {
        message = `Maximum ${issue.maximum} caractères autorisés`;
      } else if (issue.type === 'array') {
        message = `Maximum ${issue.maximum} éléments autorisés`;
      } else {
        message = `Doit être inférieur ou égal à ${issue.maximum}`;
      }
      break;
    }

    case 'invalid_string': {
      switch (issue.validation) {
        case 'email': {
          message = 'Email invalide';

          break;
        }
        case 'url': {
          message = 'URL invalide';

          break;
        }
        case 'regex': {
          message = 'Format invalide';

          break;
        }
        default: {
          message = 'Texte invalide';
        }
      }
      break;
    }

    case 'invalid_date': {
      message = 'Date invalide';
      break;
    }

    default: {
      message = ctx.defaultError;
      break;
    }
  }

  return { message };
};
