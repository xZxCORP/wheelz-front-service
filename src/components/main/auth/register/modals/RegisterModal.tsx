import { zodResolver } from '@hookform/resolvers/zod';
import { type CompanyCreate, companyCreateSchema } from '@zcorp/wheelz-contracts';
import { useCallback, useMemo } from 'react';
import { useForm } from 'react-hook-form';

import { authTsr } from '../../../../../clients/api/auth.api';
import { useModal } from '../../../../../hooks/useModal';
import { RegisterStore } from '../../../../../stores/useRegisterStore';
import {
  type RegisterWithConfirmation,
  registerWithConfirmationSchema,
} from '../../../../../types/account';
import { MODAL_IDS } from '../../../../../types/modalIds';
import { Modal } from '../../../../shared/Modal';
import { AccountTypeForm } from '../forms/AccountTypeForm';
import { CompanyInfosForm } from '../forms/CompanyInfosForm';
import { PersonalInfosForm } from '../forms/PersonalInfosForm';
import { RegisterRecapValues } from '../RegisterRecapValues';
import { RegisterSharedBottomActions } from '../RegisterSharedBottomActions';
import { RegisterSuccessNotifier } from '../RegisterSuccessNotifier';

export const RegisterModal = () => {
  const { isOpen, close } = useModal(MODAL_IDS.REGISTER);
  const { open } = useModal(MODAL_IDS.LOGIN);
  const {
    init,
    progress,
    step,
    accountType,
    personalInfosForm,
    companyForm,
    storeCompanyForm,
    storePersonalInfosForm,
    reset,
  } = RegisterStore.use();
  const calculatedTitle = RegisterStore.useCalculatedTitle();

  const { mutateAsync: registerMutate, isPending: registerIsPending } =
    authTsr.authentication.register.useMutation();
  const { mutateAsync: registerAsCompanyMutate, isPending: registerAsCompanyIsPending } =
    authTsr.authentication.registerAsCompany.useMutation();
  const personalInfosFormInstance = useForm<RegisterWithConfirmation>({
    resolver: zodResolver(registerWithConfirmationSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
      firstname: '',
      lastname: '',
    },
  });
  const companyInfosFormInstance = useForm<CompanyCreate>({
    resolver: zodResolver(companyCreateSchema),
    mode: 'onChange',
    defaultValues: {
      companySector: 'private',
      name: '',
      vatNumber: '',
      companyType: 'other',
      companySize: 'micro',
      country: 'France',
      headquartersAddress: '',
    },
  });
  const switchToLogin = useCallback(() => {
    close();
    open();
  }, [close, open]);
  const resetAllComponents = useCallback(() => {
    reset();
    personalInfosFormInstance.reset();
    companyInfosFormInstance.reset();
  }, [companyInfosFormInstance, personalInfosFormInstance, reset]);
  const onAccountTypeSelected = useCallback(
    (type: 'personal' | 'business') => {
      resetAllComponents();
      init(type);
    },
    [init, resetAllComponents]
  );

  const onNext = () => {
    switch (step) {
      case 'business-infos-owner':
      case 'personnal-infos': {
        personalInfosFormInstance.handleSubmit((data) => {
          storePersonalInfosForm({
            email: data.email,
            password: data.password,
            firstname: data.firstname,
            lastname: data.lastname,
          });
          progress();
        })();
        break;
      }
      case 'business-infos-company': {
        companyInfosFormInstance.handleSubmit((data) => {
          storeCompanyForm(data);
          progress();
        })();
        break;
      }
    }
  };

  const onFinish = async () => {
    switch (accountType) {
      case 'personal': {
        if (!personalInfosForm) return;
        const registerResponse = await registerMutate({
          body: personalInfosForm,
        });
        if (registerResponse.status === 201) {
          progress();
        }
        break;
      }
      case 'business': {
        if (!personalInfosForm || !companyForm) return;
        const registerResponse = await registerAsCompanyMutate({
          body: {
            owner: personalInfosForm,
            company: companyForm,
          },
        });
        if (registerResponse.status === 201) {
          progress();
        }
        break;
      }
    }
  };
  const calculatedComponent = useMemo(() => {
    switch (step) {
      case 'account-type': {
        return <AccountTypeForm onAccountTypeSelected={onAccountTypeSelected} />;
      }
      case 'personnal-infos': {
        return (
          <PersonalInfosForm onSwitchToLogin={switchToLogin} form={personalInfosFormInstance} />
        );
      }
      case 'business-infos-company': {
        return <CompanyInfosForm form={companyInfosFormInstance} />;
      }
      case 'business-infos-owner': {
        return <PersonalInfosForm form={personalInfosFormInstance} />;
      }
      case 'recap': {
        return <RegisterRecapValues />;
      }
      case 'success': {
        return <RegisterSuccessNotifier />;
      }
    }
  }, [
    companyInfosFormInstance,
    onAccountTypeSelected,
    personalInfosFormInstance,
    step,
    switchToLogin,
  ]);

  const onClose = () => {
    resetAllComponents();
    close();
  };
  return (
    <Modal
      extraButtons={[
        <RegisterSharedBottomActions
          key={'register-shared-bottom-actions'}
          onFinish={onFinish}
          onNext={onNext}
          isLoading={registerIsPending || registerAsCompanyIsPending}
        />,
      ]}
      isOpen={isOpen}
      onClose={onClose}
      title={calculatedTitle}
      showBottomCloseButton={false}
      closeOnOverlayClick={false}
    >
      {calculatedComponent}
    </Modal>
  );
};
