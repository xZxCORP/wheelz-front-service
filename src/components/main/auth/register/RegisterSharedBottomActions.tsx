import { RegisterStore } from '../../../../stores/useRegisterStore';
import { Button } from '../../../shared/button/Button';

type Props = {
  onNext: () => void;
  onFinish: () => void;
  isLoading: boolean;
};

export const RegisterSharedBottomActions = ({ onFinish, onNext, isLoading }: Props) => {
  const { previous } = RegisterStore.use();
  const canNext = RegisterStore.useCanNext();
  const canFinish = RegisterStore.useCanFinish();
  const canPrevious = RegisterStore.useCanPrevious();
  return (
    <div className="flex justify-between gap-2">
      {canPrevious && (
        <Button onClick={previous} buttonStyle={{ color: 'primary' }} disabled={isLoading}>
          Précédent
        </Button>
      )}
      {canNext && (
        <Button onClick={onNext} disabled={isLoading}>
          Suivant
        </Button>
      )}
      {canFinish && (
        <Button onClick={onFinish} disabled={isLoading}>
          Envoyer
        </Button>
      )}
    </div>
  );
};
