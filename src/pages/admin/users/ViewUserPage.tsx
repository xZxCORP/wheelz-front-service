import { useParams } from 'react-router-dom';

import { userTsr } from '../../../clients/api/user.api';
import { ErrorContainer } from '../../../components/shared/error/ErrorContainer';
import { UserCard } from '../../../components/users/cards/UserCard';
import { isApiResponse } from '../../../utils/errors';

type PageParams = {
  id: string;
};
export const ViewUserPage = () => {
  const { id } = useParams<PageParams>();
  const { data, error } = userTsr.users.getUserById.useQuery({
    queryKey: ['users', id],
    queryData: {
      params: { id: id! },
    },
  });

  if (error && isApiResponse(error)) {
    return <ErrorContainer errorMessage={error.body.message} />;
  }
  return (
    data && (
      <div className="w-full">
        <UserCard user={data.body.data} />
      </div>
    )
  );
};
