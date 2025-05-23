import type { AccountType } from '../../../../../types/account';
import { accountTypeLabels } from '../../../../../types/account';
import { Button } from '../../../../shared/button/Button';

interface Props {
  onAccountTypeSelected: (accountType: AccountType) => void;
}

export const AccountTypeForm = ({ onAccountTypeSelected }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        {Object.entries(accountTypeLabels).map(([key, label]) => (
          <Button
            buttonStyle={{ color: 'primary' }}
            onClick={() => onAccountTypeSelected(key as AccountType)}
            key={key}
          >
            {label}
          </Button>
        ))}
      </div>
    </div>
  );
};
