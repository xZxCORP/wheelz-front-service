import type { User } from '@zcorp/wheelz-contracts';

import { formatDate } from '../../../utils/date';
import { Badge } from '../../shared/badge/Badge';
import { Card, CardContent, CardHeader } from '../../shared/Card';
import { InfoField } from '../../shared/InfoField';
import { H1 } from '../../shared/typography/Typography';

type Props = {
  user: User;
};

export const UserCard = ({ user }: Props) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <H1>Utilisateur {user.id}</H1>
            <InfoField label="Créé le" value={formatDate(new Date(user.createdAt))}></InfoField>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <InfoField label="Email" value={user.email} />
        <InfoField label="Nom" value={user.lastname} />
        <InfoField label="Prénom" value={user.firstname} />
        {user.roles && (
          <InfoField
            label="Roles"
            value={user.roles.map((role) => (
              <Badge badgeStyle={{ color: 'success' }} key={role}>
                {role}
              </Badge>
            ))}
          />
        )}
      </CardContent>
    </Card>
  );
};
