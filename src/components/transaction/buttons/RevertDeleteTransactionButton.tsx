import { FaUndo } from 'react-icons/fa';

import { queryClient } from '../../../clients/api/queryClient';
import { transactionTsr } from '../../../clients/api/transaction.api';
import { Button } from '../../shared/button/Button';

type Props = {
  transactionId: string;
};
export const RevertDeleteTransactionButton = ({ transactionId }: Props) => {
  const { mutate, isPending } = transactionTsr.transactions.revertTransaction.useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['transactions'] });
    },
  });
  return (
    <Button
      buttonVariant="outline"
      onClick={() => mutate({ body: { id: transactionId } })}
      disabled={isPending}
    >
      <FaUndo />
    </Button>
  );
};
