import { useQueryClient } from '@tanstack/react-query';
import { createColumnHelper } from '@tanstack/react-table';
import { type Vehicle } from '@zcorp/shared-typing-wheelz';
import { Link } from 'react-router-dom';

import { chainTsr } from '../../../clients/api/chain.api';
import { Table } from '../../../components/admin/Table';
import { Button } from '../../../components/shared/button/Button';
import { usePagination } from '../../../hooks/usePagination';
import { useSnackbarStore } from '../../../stores/useSnackbar';
export const ChainTablePage = () => {
  const { pagination, apiPagination, onPaginationChange } = usePagination({
    initialPage: 1,
    initialPerPage: 10,
  });
  const { data } = chainTsr.chain.getAllVehiclesOfTheChain.useQuery({
    queryKey: ['chain', apiPagination],
    queryData: {
      query: apiPagination,
    },
  });
  const { addSnackbar } = useSnackbarStore();
  const queryClient = useQueryClient();
  const { mutate: refreshChainStateMutate, isPending: isRefreshChainStatePending } =
    chainTsr.chain.refreshChainState.useMutation({
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['chain'] });
      },
    });
  const { mutate: processTransactionBatchMutate, isPending: isProcessTransactionBatchPending } =
    chainTsr.chain.processTransactionBatch.useMutation({
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['chain'] });
        queryClient.invalidateQueries({ queryKey: ['transactions'] });
      },
    });
  const { mutate: verifyChainStateMutate, isPending: isVerifyChainStatePending } =
    chainTsr.chain.verifyChainState.useMutation({
      onSuccess: (data) => {
        addSnackbar(data.body.message, 'success');
      },
    });
  const onRefreshChainState = () => {
    refreshChainStateMutate({ body: {} });
    queryClient.invalidateQueries({ queryKey: ['chain'] });
  };
  const onProcessTransactionBatch = () => {
    processTransactionBatchMutate({ body: {} });
    queryClient.invalidateQueries({ queryKey: ['chain'] });
    queryClient.invalidateQueries({ queryKey: ['transactions'] });
  };
  const onVerifyChainState = () => {
    verifyChainStateMutate({ body: {} });
    queryClient.invalidateQueries({ queryKey: ['chain'] });
  };

  const columnHelper = createColumnHelper<Vehicle>();

  const columns = [
    columnHelper.accessor('vin', {
      header: 'Vin',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('features.brand', {
      header: 'Marque',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('features.model', {
      header: 'Modèle',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('features.color', {
      header: 'Couleur',
      cell: (info) => info.getValue(),
    }),

    columnHelper.display({
      id: 'actions',
      header: 'Actions',
      cell: (info) => {
        return (
          <div>
            <Button asChild>
              <Link to={`/admin/chain/${info.row.original.vin}`}>Voir</Link>
            </Button>
          </div>
        );
      },
    }),
  ];

  return (
    data && (
      <div className="flex flex-col gap-2">
        <Table
          title="Chaine"
          data={data.body.items}
          meta={data.body.meta}
          columns={columns}
          onPaginationChange={onPaginationChange}
          pagination={pagination}
        ></Table>
        <Button
          buttonStyle={{ color: 'secondary' }}
          onClick={onRefreshChainState}
          disabled={isRefreshChainStatePending}
        >
          {isRefreshChainStatePending ? 'Chargement' : 'Rafraîchir'}
        </Button>
        <Button
          buttonStyle={{ color: 'secondary' }}
          onClick={onProcessTransactionBatch}
          disabled={isProcessTransactionBatchPending}
        >
          {isProcessTransactionBatchPending ? 'Chargement' : 'Traiter les nouvelles transactions'}
        </Button>
        <Button
          buttonStyle={{ color: 'secondary' }}
          onClick={onVerifyChainState}
          disabled={isVerifyChainStatePending}
        >
          {isVerifyChainStatePending ? 'Chargement' : 'Vérifier la chaine'}
        </Button>
      </div>
    )
  );
};
