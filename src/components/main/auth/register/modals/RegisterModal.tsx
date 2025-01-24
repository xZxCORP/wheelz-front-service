import { zodResolver } from '@hookform/resolvers/zod';
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
import { BusinessInfosForm } from '../forms/BusinessInfosForm';
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
  } = RegisterStore.use();
  const calculatedTitle = RegisterStore.useCalculatedTitle();

  const { mutateAsync: registerMutate, isPending: registerIsPending } =
    authTsr.authentication.register.useMutation();

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
  const switchToLogin = useCallback(() => {
    close();
    open();
  }, [close, open]);
  const onAccountTypeSelected = useCallback(
    (type: 'personal' | 'business') => {
      init(type);
    },
    [init]
  );

  const onNext = () => {
    switch (step) {
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
      }
    }
  };

  const onFinish = async () => {
    switch (accountType) {
      case 'personal': {
        if (!personalInfosForm) return;
        const registerResponse = await registerMutate({
          body: {
            email: personalInfosForm.email,
            password: personalInfosForm.password,
            firstname: personalInfosForm.firstname,
            lastname: personalInfosForm.lastname,
          },
        });
        if (registerResponse.status === 201) {
          progress();
        }
        break;
      }
      case 'business': {
        console.log('register with', personalInfosForm, companyForm);
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
          <PersonalInfosForm
            key={personalInfosFormInstance.formState.isDirty ? 'dirty' : 'clean'}
            onSwitchToLogin={switchToLogin}
            form={personalInfosFormInstance}
          />
        );
      }
      case 'business-infos-company': {
        return <BusinessInfosForm onSwitchToLogin={switchToLogin} />;
      }
      case 'business-infos-owner': {
        return <BusinessInfosForm onSwitchToLogin={switchToLogin} />;
      }
      case 'recap': {
        return <RegisterRecapValues />;
      }
      case 'success': {
        return <RegisterSuccessNotifier />;
      }
    }
  }, [onAccountTypeSelected, personalInfosFormInstance, step, switchToLogin]);
  console.log(personalInfosForm);
  return (
    <Modal
      extraButtons={[
        <RegisterSharedBottomActions
          key={'register-shared-bottom-actions'}
          onFinish={onFinish}
          onNext={onNext}
          isLoading={registerIsPending}
        />,
      ]}
      isOpen={isOpen}
      onClose={() => close()}
      title={calculatedTitle}
      showBottomCloseButton={false}
    >
      {calculatedComponent}
    </Modal>
  );
};
