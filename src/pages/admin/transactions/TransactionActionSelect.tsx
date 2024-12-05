import type { TransactionAction } from '@zcorp/shared-typing-wheelz';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../components/shared/form/Select';

interface Props {
  value: TransactionAction | undefined;
  onChange: (value: TransactionAction) => void;
}

export const TransactionActionSelect = ({ value, onChange }: Props) => (
  <Select value={value} onValueChange={onChange}>
    <SelectTrigger>
      <SelectValue placeholder="Sélectionnez le type de transaction" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="create">Création</SelectItem>
      <SelectItem value="update">Modification</SelectItem>
      <SelectItem value="delete">Suppression</SelectItem>
    </SelectContent>
  </Select>
);
