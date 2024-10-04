import { AccountType, accountTypeLabels } from '../../types/account';

type Props = {
  onAccountTypeSelected: (accountType: AccountType) => void;
};

export const AccountTypeSelector = ({ onAccountTypeSelected }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Qui êtes vous ?</h2>
      <div className="flex flex-col gap-2">
        {Object.entries(accountTypeLabels).map(([key, label]) => (
          <button
            className="bg-primary-500 text-secondary-500"
            onClick={() => onAccountTypeSelected(key as AccountType)}
            key={key}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};
