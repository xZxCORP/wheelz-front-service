import { RegisterStore } from '../../../stores/useRegisterStore';
import { H2, P } from '../../shared/typography/Typography';

export const RegisterSuccessNotifier = () => {
  const calculatedMessage = RegisterStore.useCalculatedSuccessMessage();

  return (
    <div className="flex flex-col justify-center gap-6">
      <img src="/animated_icons/check.gif" alt="Success" />
      <div className="flex flex-col gap-2">
        <H2>Merci pour votre inscription !</H2>
        <P>{calculatedMessage}</P>
      </div>
    </div>
  );
};
