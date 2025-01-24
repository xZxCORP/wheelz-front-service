import { create } from 'zustand';

import {
  type AccountType,
  accountTypeLabels,
  getProgressSteps,
  type RegisterStep,
  stepLabels,
} from '../types/account';

interface RegisterState {
  // properties
  step: RegisterStep;
  accountType: AccountType | null;

  // mutations
  setStep: (step: RegisterStep) => void;
  init: (accountType: AccountType) => void;
  progress: () => void;
  reset: () => void;
}

export const useRegisterStore = create<RegisterState>((set, get) => ({
  //properties
  step: 'account-type',
  accountType: null,
  isLoading: false,
  get canProgress() {
    const { step, accountType } = get();
    if (!step || !accountType) return false;
    const progressSteps = getProgressSteps(accountType);
    return progressSteps.indexOf(step) < progressSteps.length - 1;
  },

  //mutations
  setStep: (step: RegisterStep) => set({ step }),
  init(accountType: AccountType) {
    const progressSteps = getProgressSteps(accountType);
    set({ accountType, step: progressSteps[0] });
  },
  progress: () => {
    const { step, accountType } = get();
    if (!step || !accountType) return;
    const progressSteps = getProgressSteps(accountType);
    const currentIndex = progressSteps.indexOf(step);
    const nextIndex = Math.min(currentIndex + 1, progressSteps.length - 1);
    set({ step: progressSteps[nextIndex] });
  },
  reset: () => set({ step: 'account-type', accountType: null }),
}));

const useCanNext = () => {
  const { step, accountType } = useRegisterStore();
  if (!step || !accountType) return false;
  const progressSteps = getProgressSteps(accountType);
  return progressSteps.indexOf(step) < progressSteps.length - 2;
};
const useCanFinish = () => {
  const { step, accountType } = useRegisterStore();
  if (!step || !accountType) return false;
  const progressSteps = getProgressSteps(accountType);
  return progressSteps.indexOf(step) === progressSteps.length - 1;
};

const useCanPrevious = () => {
  const { step, accountType } = useRegisterStore();
  if (!step || !accountType) return false;
  const progressSteps = getProgressSteps(accountType);
  return progressSteps.indexOf(step) > 0;
};

const useCalculatedTitle = () => {
  const { accountType, step } = useRegisterStore();
  if (!accountType || !step) return '';
  return `${accountTypeLabels[accountType]} - ${stepLabels[step]}`;
};

export const RegisterStore = {
  use: useRegisterStore,
  useCanNext,
  useCanFinish,
  useCanPrevious,
  useCalculatedTitle,
};
