import { create } from 'zustand';

import type { AccountType, RegisterStep } from '../types/account';

interface RegisterState {
  step: RegisterStep;
  accountType: AccountType | null;
  isLoading: boolean;
  setStep: (step: RegisterStep) => void;
  setAccountType: (accountType: AccountType) => void;
  reset: () => void;
}

export const useRegisterStore = create<RegisterState>((set) => ({
  isLoading: false,
  setLoading: (isLoading: boolean) => set({ isLoading }),
  step: 'account-type',
  setStep: (step: RegisterStep) => set({ step }),
  accountType: null,
  setAccountType(accountType: AccountType) {
    set({ accountType });
    if (accountType === 'personal') {
      set({ step: 'personnal-infos' });
    } else if (accountType === 'business') {
      set({ step: 'business-infos' });
    }
  },
  reset: () => set({ step: 'account-type', accountType: null }),
}));
