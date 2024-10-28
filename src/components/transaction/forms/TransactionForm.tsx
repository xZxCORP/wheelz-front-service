import { useQueryClient } from '@tanstack/react-query';
import type { TransactionAction } from '@zcorp/shared-typing-wheelz';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { transactionTsr } from '../../../clients/api/transaction.api';
import { TransactionActionSelect } from '../../../pages/admin/transactions/TransactionActionSelect';
import { useSnackbarStore } from '../../../stores/useSnackbar';
import { CreateTransactionDataForm } from './CreateTransactionDataForm';
import { DeleteTransactionDataForm } from './DeleteTransactionDataForm';

export const TransactionForm = () => {
  const [action, setAction] = useState<TransactionAction | undefined>();
  const navigate = useNavigate();
  const { addSnackbar } = useSnackbarStore();
  const queryClient = useQueryClient();
  const { mutate: deleteTransactionMutate } =
    transactionTsr.transactions.deleteTransaction.useMutation({
      onSuccess: async () => {
        addSnackbar('Transaction de type Suppression créée avec succès', 'error');
        await globalSuccess();
      },
    });
  const { mutate: createTransactionMutate } =
    transactionTsr.transactions.submitTransaction.useMutation({
      onSuccess: async () => {
        addSnackbar('Transaction de type Création créée avec succès', 'error');
        await globalSuccess();
      },
    });
  const globalSuccess = async () => {
    await queryClient.invalidateQueries({ queryKey: ['transactions'] });
    navigate(-1);
  };

  const renderForm = () => {
    switch (action) {
      case 'create': {
        return (
          <CreateTransactionDataForm onSubmit={(data) => createTransactionMutate({ body: data })} />
        );
      }
      case 'delete': {
        return (
          <DeleteTransactionDataForm onSubmit={(data) => deleteTransactionMutate({ body: data })} />
        );
      }
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <TransactionActionSelect value={action} onChange={setAction} />
      {action && renderForm()}
    </div>
  );
};
