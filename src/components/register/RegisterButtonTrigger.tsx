import { useState } from 'react';

import { Button } from '../base/button/Button';
import { RegisterModal } from './RegisterModal';

export const RegisterButtonTrigger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>S&apos;inscrire</Button>
      <RegisterModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
