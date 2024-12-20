import { useQueryClient } from '@tanstack/react-query';
import type { TransactionAction, VehicleTransaction } from '@zcorp/shared-typing-wheelz';
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
      onSuccess: async (response) => {
        addSnackbar('Transaction de type Suppression créée avec succès', 'success');
        await globalSuccess(response.body);
      },
    });
  const { mutate: createTransactionMutate } =
    transactionTsr.transactions.submitTransaction.useMutation({
      onSuccess: async (response) => {
        addSnackbar('Transaction de type Création créée avec succès', 'success');
        await globalSuccess(response.body);
      },
    });
  const globalSuccess = async (result: VehicleTransaction) => {
    await queryClient.invalidateQueries({ queryKey: ['transactions'] });
    navigate(`/admin/transactions/${result.id}`);
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
