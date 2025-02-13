import { useParams } from 'react-router-dom';

import { companyTsr } from '../../../clients/api/company.api';
import { ErrorContainer } from '../../../components/shared/error/ErrorContainer';
import { isApiResponse } from '../../../utils/errors';

type PageParams = {
  id: string;
};
export const FullGarage = () => {
  const { id } = useParams<PageParams>();
  const { data: garage, error } = companyTsr.contract.show.useQuery({
    queryKey: ['companies', id],
    queryData: {
      params: { id: id! },
    },
  });

  if (error && isApiResponse(error)) {
    return <ErrorContainer errorMessage={error.body.message} />;
  }

  return (
    <div className="bg-primary-100 m-5 flex size-full flex-col items-center overflow-scroll rounded-xl">
      <h2 className="mt-5 text-xl font-bold">{garage?.body.data.name}</h2>
      <hr className="my-3 h-1 w-10/12 justify-self-center border-t" />
      <div className="w-10/12 justify-start">
        <div className="bg-primary-300 m-5 flex max-w-fit justify-center space-x-1 rounded-lg px-2 py-1 text-center">
          <h3 className="font-semibold">VAT:</h3>
          <p>{garage?.body.data.vatNumber}</p>
        </div>
        <div className="bg-primary-300 m-5 flex max-w-fit justify-center space-x-1 rounded-lg px-2 py-1 text-center">
          <h3 className="font-semibold">Siège social:</h3>
          <p>{garage?.body.data.headquartersAddress}</p>
        </div>
        <div className="bg-primary-300 m-5 flex max-w-fit justify-center space-x-1 rounded-lg px-2 py-1 text-center">
          <h3 className="font-semibold">Adresse:</h3>
          <p>24 rue du Chemin</p>
        </div>
      </div>
      <hr className="my-3 h-1 w-10/12 justify-self-center border-t" />
      <div className="w-10/12">
        <h2 className="text-secondary-500 m-2 text-center text-xl font-semibold">Historique</h2>
        <button className="hover:bg-primary-50 flex w-full justify-start space-x-2 border">
          <p>12 décembre 2025</p>
          <p>Peugeot 208</p>
          <p>12 241km</p>
          <p></p>
        </button>
      </div>
    </div>
  );
};
