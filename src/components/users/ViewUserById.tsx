import { userTsr } from '../../clients/api/user.api';

type Props = {
  userId: string;
};
export const ViewUserById = ({ userId }: Props) => {
  const { data: user, isPending } = userTsr.users.getUserById.useQuery({
    queryKey: ['users', userId],
    queryData: {
      params: { id: userId },
    },
  });
  if (isPending) return <div>Chargement...</div>;
  return <div>{user?.body.data.email}</div>;
};
