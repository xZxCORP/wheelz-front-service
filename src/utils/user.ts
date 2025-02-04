import type { User } from '@zcorp/wheelz-contracts';

export const formatUserData = (user: User) => {
  return `${user.firstname} ${user.lastname} (${user.email})`;
};
