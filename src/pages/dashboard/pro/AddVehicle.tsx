import { useQueryClient } from '@tanstack/react-query';
import { isFetchError } from '@ts-rest/react-query/v5';
import { useNavigate } from 'react-router-dom';

import { transactionTsr } from '../../../clients/api/transaction.api';
import { H2 } from '../../../components/shared/typography/Typography';
import { CreateTransactionDataForm } from '../../../components/transaction/forms/CreateTransactionDataForm';
import { useModal } from '../../../hooks/useModal';
import { useSnackbarStore } from '../../../stores/useSnackbar';
import { type ForceCreateTransactionProps, MODAL_IDS } from '../../../types/modalIds';

export const AddVehicle = () => {
  const navigate = useNavigate();
  const { addSnackbar } = useSnackbarStore();
  const queryClient = useQueryClient();
  const { open: openForceCreateTransactionModal } = useModal<ForceCreateTransactionProps>(
    MODAL_IDS.FORCE_CREATE_TRANSACTION
  );
  //   const { open: openForceUpdateTransactionModal } = useModal<ForceUpdateTransactionProps>(
  //     MODAL_IDS.FORCE_UPDATE_TRANSACTION
  //   );

  const { mutate: createTransactionMutate } =
    transactionTsr.transactions.submitTransaction.useMutation({
      onSuccess: async () => {
        addSnackbar(
          "Votre demande de création de véhicule a bien été prise en compte et sera traitée par notre système automatisé d'ici peu",
          'success'
        );
        await queryClient.invalidateQueries({ queryKey: ['transactions'] });
        navigate(-1);
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
  //   const { mutate: updateTransactionMutate } =
  //     transactionTsr.transactions.updateTransaction.useMutation({
  //       onSuccess: async (response) => {
  //         addSnackbar('Transaction de type Modification créée avec succès', 'success');
  //         await globalSuccess(response.body);
  //       },
  //       onError: (error, request) => {
  //         if (!isFetchError(error) && error.status === 422) {
  //           openForceUpdateTransactionModal({
  //             response: error.body,
  //             transactionData: request.body,
  //           });
  //         }
  //       },
  //     });

  return (
    <div className="flex size-full flex-col gap-2 overflow-y-visible p-4">
      <H2>Ajouter un véhicule</H2>
      <CreateTransactionDataForm
        onSubmit={(data) => createTransactionMutate({ body: data })}
        allowRapidFill
      />
    </div>
  );
};
