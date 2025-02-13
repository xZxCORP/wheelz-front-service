import { useQueryClient } from '@tanstack/react-query';
import { isFetchError } from '@ts-rest/react-query/v5';
import { useNavigate } from 'react-router-dom';

import { transactionTsr } from '../../../clients/api/transaction.api';
import { UpdateTransactionDataForm } from '../../../components/transaction/forms/UpdateTransactionDataForm';
import { useModal } from '../../../hooks/useModal';
import { useSnackbarStore } from '../../../stores/useSnackbar';
import { type ForceUpdateTransactionProps, MODAL_IDS } from '../../../types/modalIds';

export const UpdateVehicle = () => {
  const navigate = useNavigate();
  const { addSnackbar } = useSnackbarStore();
  const queryClient = useQueryClient();

  const { open: openForceUpdateTransactionModal } = useModal<ForceUpdateTransactionProps>(
    MODAL_IDS.FORCE_UPDATE_TRANSACTION
  );

  const { mutate: updateTransactionMutate } =
    transactionTsr.transactions.updateTransaction.useMutation({
      onSuccess: async () => {
        addSnackbar(
          "Votre demande de mise à jour du véhicule a bien été prise en compte et sera traitée par notre système automatisé d'ici peu",
          'success'
        );
        await queryClient.invalidateQueries({ queryKey: ['transactions'] });
        navigate(-1);
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

  return (
    <div className="flex size-full flex-col gap-2 overflow-y-visible p-4 md:flex-row">
      <UpdateTransactionDataForm onSubmit={(data) => updateTransactionMutate({ body: data })} />
    </div>
  );
};
