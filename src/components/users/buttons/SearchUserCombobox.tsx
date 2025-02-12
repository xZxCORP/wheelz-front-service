import type { UserWithCompany } from '@zcorp/wheelz-contracts';
import { useState } from 'react';
import { BiCheck, BiChevronDown } from 'react-icons/bi';
import { useDebouncedCallback } from 'use-debounce';

import { userTsr } from '../../../clients/api/user.api';
import { Button } from '../../shared/button/Button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../../shared/Commands';
import { Popover, PopoverContent, PopoverTrigger } from '../../shared/Popover';

type Props = {
  onUserClicked: (user: UserWithCompany) => void;
};

export const SearchUserCombobox = ({ onUserClicked }: Props) => {
  const [currentSearch, setCurrentSearch] = useState<string>('');
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string | undefined>();
  const handleOnSearchChange = useDebouncedCallback((e: string) => {
    setCurrentSearch(e);
  }, 300);
  const { data: findedUsers } = userTsr.users.getRawUsers.useQuery({
    queryKey: ['users', currentSearch],
    queryData: {
      query: {
        query: currentSearch || undefined,
      },
    },
  });

  console.log(findedUsers);
  return (
    <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
      <PopoverTrigger asChild>
        <Button buttonStyle={{ color: 'secondary' }} role="combobox" aria-expanded={popoverOpen}>
          {selectedUserId
            ? findedUsers?.body.find((user) => user.id.toString() === selectedUserId)?.email
            : 'Chercher un client'}
          <BiChevronDown />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Command shouldFilter={false}>
          <CommandInput onValueChange={handleOnSearchChange} placeholder="Chercher un client..." />
          <CommandList>
            <CommandEmpty>Pas de résultat</CommandEmpty>
            <CommandGroup>
              {(findedUsers?.body || []).map((user) => (
                <CommandItem
                  key={user.id.toString()}
                  value={user.id.toString()}
                  onSelect={(currentValue) => {
                    setSelectedUserId(currentValue);
                    setPopoverOpen(false);
                    onUserClicked(user);
                  }}
                >
                  {user.email}
                  <BiCheck
                    className={
                      selectedUserId && selectedUserId === user.id.toString()
                        ? 'opacity-100'
                        : 'opacity-0'
                    }
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
