/* eslint-disable react/prop-types */
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { transactionTsr } from '../../../clients/api/transaction.api';
import { useModal } from '../../../hooks/useModal';
import { useSnackbarStore } from '../../../stores/useSnackbar';
import { type ForceCreateTransactionProps, MODAL_IDS } from '../../../types/modalIds';
import { Button } from '../../shared/button/Button';
import { Modal } from '../../shared/Modal';
import { H2, P } from '../../shared/typography/Typography';

export const ForceCreateTransactionModal = () => {
  const { isOpen, close, props } = useModal<ForceCreateTransactionProps>(
    MODAL_IDS.FORCE_CREATE_TRANSACTION
  );
  const { addSnackbar } = useSnackbarStore();
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { mutate: createTransactionMutate } =
    transactionTsr.transactions.submitTransaction.useMutation({
      onSuccess: async (response) => {
        addSnackbar('Transaction de type Création créée avec succès et de force', 'success');
        await queryClient.invalidateQueries({ queryKey: ['transactions'] });
        close();
        navigate(`/admin/transactions/${response.body.id}`);
      },
    });

  return (
    <Modal
      extraButtons={[
        <Button
          buttonStyle={{ color: 'success' }}
          key={'yes'}
          onClick={() =>
            createTransactionMutate({ body: props!.transactionData, query: { force: true } })
          }
        >
          Oui
        </Button>,
      ]}
      isOpen={isOpen}
      onClose={() => close()}
      title="Créer de force la transaction"
    >
      <H2>Erreur :</H2>
      {props && <P>{props.response.message}</P>}
      <P>Voulez-vous vraiment créer cette transaction avec des données invalides ?</P>
    </Modal>
  );
};
