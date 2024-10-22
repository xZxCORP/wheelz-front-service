import { FaArrowLeft } from 'react-icons/fa6';
import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom';

import { Button } from '../../components/shared/button/Button';
import { ErrorContainer } from '../../components/shared/error/ErrorContainer';

export const ErrorLayout = () => {
  const error = useRouteError();
  let errorMessage: string;
  let errorCode: number | string = '???';

  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText || error.data?.message || 'Une erreur est survenue';
    errorCode = error.status;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Une erreur inconnue est survenue';
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-secondary-100 to-secondary-200 p-4">
      <ErrorContainer errorCode={errorCode} errorMessage={errorMessage} />
      <div className="mt-6 flex justify-center">
        <Button asChild>
          <Link to="/">
            <FaArrowLeft className="size-5" />
            Retour à l&apos;accueil
          </Link>
        </Button>
      </div>
      <p className="mt-8 text-center text-sm">
        Si le problème persiste, veuillez contacter le support technique.
      </p>
    </div>
  );
};
