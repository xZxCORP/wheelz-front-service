import { RegisterStore } from '../../../stores/useRegisterStore';
import { Button } from '../../shared/button/Button';

type Props = {
  onFinish: () => void;
};

export const RegisterSharedBottomActions = ({ onFinish }: Props) => {
  const { progress } = RegisterStore.use();
  const canNext = RegisterStore.useCanNext();
  const canFinish = RegisterStore.useCanFinish();
  const canPrevious = RegisterStore.useCanPrevious();
  return (
    <div className="flex flex-col justify-between">
      <Button buttonStyle={{ color: 'secondary' }} disabled={!canPrevious}>
        Précédent
      </Button>
      {canNext && <Button onClick={progress}>Suivant</Button>}
      {canFinish && <Button onClick={onFinish}>Terminer</Button>}
    </div>
  );
};
