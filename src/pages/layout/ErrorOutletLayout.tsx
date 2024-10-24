import {} from '@zcorp/wheelz-contracts';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

import type { ApiError } from '../../clients/api/apiHandler';
import { ErrorContainer } from '../../components/shared/error/ErrorContainer';

export const ErrorOutletLayout = () => {
  const error = useRouteError();

  let errorMessage: string = 'Oops';
  let errorCode: number = 500;
  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText || error.data?.message || 'Une erreur est survenue';
    errorCode = error.status;
  } else {
    const parsedError = error as ApiError;
    errorMessage = (parsedError.body as { message?: string })?.message || 'Une erreur est survenue';
    errorCode = parsedError.status;
  }
  return (
    <div className="flex flex-col justify-center gap-2">
      <ErrorContainer errorCode={errorCode} errorMessage={errorMessage} />
    </div>
  );
};
