import type { Vehicle } from '@zcorp/shared-typing-wheelz';
import type { UserWithCompany } from '@zcorp/wheelz-contracts';
import { useState } from 'react';
import { type Control, useController } from 'react-hook-form';

import { Button } from '../../shared/button/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../../shared/Card';
import { SearchUserCombobox } from '../../users/buttons/SearchUserCombobox';
import { ViewUserById } from '../../users/ViewUserById';

type Props = {
  control: Control<Vehicle>;
  onlyView?: boolean;
};

export const AttachedClientsIdsArrayField = ({ control, onlyView }: Props) => {
  const [currentSelectedClient, setCurrentSelectedClient] = useState<UserWithCompany | undefined>();
  const { field } = useController({
    control,
    name: 'attachedClientsIds',
  });
  const onAddClient = () => {
    if (currentSelectedClient) {
      const newId = currentSelectedClient.id.toString();
      if (!(field.value || []).includes(newId)) {
        const newIds = [...(field.value || []), newId];
        field.onChange(newIds);
      }
    }
  };

  const onRemoveClient = (idToRemove: string) => {
    const newIds = (field.value || []).filter((id) => id !== idToRemove);
    field.onChange(newIds);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Clients attachés</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          {!onlyView && (
            <div className="flex flex-col gap-2">
              <SearchUserCombobox onUserClicked={(user) => setCurrentSelectedClient(user)} />
              <Button
                type="button"
                onClick={onAddClient}
                disabled={currentSelectedClient === undefined}
              >
                Ajouter
              </Button>
            </div>
          )}
          {(field.value || []).map((userId: string) => (
            <div
              key={userId}
              className="flex items-center justify-between gap-2 rounded border p-2"
            >
              <ViewUserById userId={userId} />
              {!onlyView && (
                <Button buttonStyle={{ color: 'error' }} onClick={() => onRemoveClient(userId)}>
                  Supprimer
                </Button>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
