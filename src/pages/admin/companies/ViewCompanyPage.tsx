import type { User } from '@zcorp/wheelz-contracts';
import { useParams } from 'react-router-dom';

import { companyTsr } from '../../../clients/api/company.api';
import { AdminPanel } from '../../../components/shared/AdminPanel';
import { AdminViewTable } from '../../../components/shared/AdminViewTable';
import { ErrorContainer } from '../../../components/shared/error/ErrorContainer';
import { isApiResponse } from '../../../utils/errors';

type PageParams = {
  id: string;
};
export const ViewCompanyPage = () => {
  const { id } = useParams<PageParams>();
  const { data, error } = companyTsr.contract.show.useQuery({
    queryKey: ['companies', id],
    queryData: {
      params: { id: id! },
    },
  });

  if (error && isApiResponse(error)) {
    return <ErrorContainer errorMessage={error.body.message} />;
  }

  const company = data?.body.data;

  const rows = [
    { label: 'id', value: company?.id },
    { label: 'Nom', value: company?.name },
    { label: "Numéro d'identification fiscale", value: company?.vatNumber },
    { label: 'Country', value: company?.country },
    { label: "Secteur d'activité", value: company?.companySector },
    { label: "Type d'entreprise", value: company?.companyType },
    { label: "Taille d'entreprise", value: company?.companySize },
    { label: 'Adresse du siège sociale', value: company?.headquartersAddress },
    { label: 'Identifié', value: company?.isIdentified ? 'Oui' : 'Non' },
  ];

  const owner = company?.users.find((element: User) => element.id == company?.ownerId);

  const ownerRows = [
    { label: 'id', value: owner?.id },
    { label: 'Prénom', value: owner?.firstname },
    { label: 'Nom', value: owner?.lastname },
    { label: 'email', value: owner?.email },
    { label: "Role dans l'entreprise", value: owner?.membershipRole },
  ];

  return (
    data && (
      <div className="mx-10 flex w-full flex-col px-20">
        <h2 className="mb-10 text-3xl font-bold">
          {company?.name}#{company?.id}
        </h2>

        <AdminPanel name="Informations générales" className="mb-10">
          <AdminViewTable rows={rows} />
        </AdminPanel>

        <AdminPanel name="Information du propriétaire">
          <AdminViewTable rows={ownerRows} />
        </AdminPanel>
      </div>
    )
  );
};
