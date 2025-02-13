import { RegisterStore } from '../../../../stores/useRegisterStore';

export const RegisterSuccessNotifier = () => {
  const calculatedMessage = RegisterStore.useCalculatedSuccessMessage();

  return (
    <div className="flex flex-col items-center gap-6">
      <img className="h-auto w-32" src="/animated_icons/check.gif" alt="Success" />
      <div className="flex flex-col gap-2 text-center">
        <h2 className="font-semibold">Merci pour votre inscription !</h2>
        <p>{calculatedMessage}</p>
      </div>
    </div>
  );
};
