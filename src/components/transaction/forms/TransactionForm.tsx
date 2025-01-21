import { useQueryClient } from '@tanstack/react-query';
import { isFetchError } from '@ts-rest/react-query/v5';
import type { TransactionAction, VehicleTransaction } from '@zcorp/shared-typing-wheelz';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { transactionTsr } from '../../../clients/api/transaction.api';
import { useModal } from '../../../hooks/useModal';
import { TransactionActionSelect } from '../../../pages/admin/transactions/TransactionActionSelect';
import { useSnackbarStore } from '../../../stores/useSnackbar';
import {
  type ForceCreateTransactionProps,
  type ForceUpdateTransactionProps,
  MODAL_IDS,
} from '../../../types/modalIds';
import { CreateTransactionDataForm } from './CreateTransactionDataForm';
import { DeleteTransactionDataForm } from './DeleteTransactionDataForm';
import { UpdateTransactionDataForm } from './UpdateTransactionDataForm';

export const TransactionForm = () => {
  const [action, setAction] = useState<TransactionAction | undefined>();
  const navigate = useNavigate();
  const { addSnackbar } = useSnackbarStore();
  const queryClient = useQueryClient();
  const { open: openForceCreateTransactionModal } = useModal<ForceCreateTransactionProps>(
    MODAL_IDS.FORCE_CREATE_TRANSACTION
  );
  const { open: openForceUpdateTransactionModal } = useModal<ForceUpdateTransactionProps>(
    MODAL_IDS.FORCE_UPDATE_TRANSACTION
  );
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
      onError: (error, request) => {
        if (!isFetchError(error) && error.status === 422) {
          openForceCreateTransactionModal({
            response: error.body,
            transactionData: request.body,
          });
        }
      },
    });
  const { mutate: updateTransactionMutate } =
    transactionTsr.transactions.updateTransaction.useMutation({
      onSuccess: async (response) => {
        addSnackbar('Transaction de type Modification créée avec succès', 'success');
        await globalSuccess(response.body);
      },
      onError: (error, request) => {
        if (!isFetchError(error) && error.status === 422) {
          openForceUpdateTransactionModal({
            response: error.body,
            transactionData: request.body,
          });
        }
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
      case 'update': {
        return (
          <UpdateTransactionDataForm onSubmit={(data) => updateTransactionMutate({ body: data })} />
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
