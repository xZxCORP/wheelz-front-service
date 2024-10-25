import { H1 } from '../../../components/shared/typography/Typography';
import { TransactionForm } from '../../../components/transaction/forms/TransactionForm';

export const CreateTransactionPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <H1>Nouvelle Transaction</H1>
      <TransactionForm />
    </div>
  );
};
