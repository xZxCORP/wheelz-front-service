import type { CompanyCreate, Register } from '@zcorp/wheelz-contracts';
import { create } from 'zustand';

import {
  type AccountType,
  accountTypeLabels,
  getProgressSteps,
  type RegisterStep,
  stepLabels,
  successMessages,
} from '../types/account';

interface RegisterState {
  // properties
  step: RegisterStep;
  accountType: AccountType | null;
  personalInfosForm: Register | null;
  companyForm: CompanyCreate | null;

  // mutations
  setStep: (step: RegisterStep) => void;
  storePersonalInfosForm: (data: Register) => void;
  storeCompanyForm: (data: CompanyCreate) => void;
  init: (accountType: AccountType) => void;
  progress: () => void;
  previous: () => void;
  reset: () => void;
}

const useRegisterStore = create<RegisterState>((set, get) => ({
  //properties
  step: 'account-type',
  accountType: null,
  personalInfosForm: null,
  companyForm: null,
  get canProgress() {
    const { step, accountType } = get();
    if (!step || !accountType) return false;
    const progressSteps = getProgressSteps(accountType);
    return progressSteps.indexOf(step) < progressSteps.length - 1;
  },

  //mutations
  setStep: (step: RegisterStep) => set({ step }),
  storePersonalInfosForm: (data: Register) => set({ personalInfosForm: data }),
  storeCompanyForm: (data: CompanyCreate) => set({ companyForm: data }),
  init(accountType: AccountType) {
    const progressSteps = getProgressSteps(accountType);
    set({ accountType, step: progressSteps[1] });
  },
  progress: () => {
    const { step, accountType } = get();
    if (!step || !accountType) return;
    const progressSteps = getProgressSteps(accountType);
    const currentIndex = progressSteps.indexOf(step);
    const nextIndex = Math.min(currentIndex + 1, progressSteps.length - 1);
    set({ step: progressSteps[nextIndex] });
  },
  previous: () => {
    const { step, accountType } = get();
    if (!step || !accountType) return;
    const progressSteps = getProgressSteps(accountType);
    const currentIndex = progressSteps.indexOf(step);
    const nextIndex = Math.max(currentIndex - 1, 0);
    set({ step: progressSteps[nextIndex] });
  },
  reset: () =>
    set({ step: 'account-type', accountType: null, personalInfosForm: null, companyForm: null }),
}));

const useCanNext = () => {
  const { step, accountType } = useRegisterStore();
  if (!step || !accountType) return false;
  const progressSteps = getProgressSteps(accountType);
  const index = progressSteps.indexOf(step);
  return index < progressSteps.length - 2 && index > 0;
};
const useCanFinish = () => {
  const { step, accountType } = useRegisterStore();
  if (!step || !accountType) return false;
  const progressSteps = getProgressSteps(accountType);
  return progressSteps.indexOf(step) === progressSteps.length - 2;
};

const useCanPrevious = () => {
  const { step, accountType } = useRegisterStore();
  if (!step || !accountType) return false;
  const progressSteps = getProgressSteps(accountType);
  return progressSteps.indexOf(step) > 0 && progressSteps.indexOf(step) < progressSteps.length - 1;
};

const useCalculatedTitle = () => {
  const { accountType, step } = useRegisterStore();
  if (!accountType || !step) return 'Qui êtes vous ?';
  return `${accountTypeLabels[accountType]} - ${stepLabels[step]}`;
};
const useCalculatedSuccessMessage = () => {
  const { accountType } = useRegisterStore();
  if (!accountType) return '';
  return successMessages[accountType];
};

export const RegisterStore = {
  use: useRegisterStore,
  useCanNext,
  useCanFinish,
  useCanPrevious,
  useCalculatedTitle,
  useCalculatedSuccessMessage,
};
