import { FaArrowLeft, FaTriangleExclamation } from 'react-icons/fa6';
import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom';

const ErrorLayout = () => {
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
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-xl">
        <div className="flex items-center justify-center">
          <FaTriangleExclamation className="size-16 text-error-600" />
        </div>
        <h1 className="mt-4 text-center text-3xl font-bold">Oops!</h1>
        <p className="mt-2 text-center text-xl font-semibold">Erreur {errorCode}</p>
        <p className="mt-4 text-center">{errorMessage}</p>
        <div className="mt-6 flex justify-center">
          <Link
            to="/"
            className="flex items-center rounded-md bg-primary-600 px-4 py-2 text-white transition duration-300 hover:bg-primary-700"
          >
            <FaArrowLeft className="mr-2 size-5" />
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
      <p className="mt-8 text-center text-sm">
        Si le problème persiste, veuillez contacter le support technique.
      </p>
    </div>
  );
};

export default ErrorLayout;
