import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error: unknown = useRouteError();
  let errorStatus: number = 500;
  let errorMessage = '';

  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorStatus = error.status;
    errorMessage = error.data.toString() || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Unknown error';
  }

  function DetailedError() {
    return (
      <>
        <h1 className="m-4 text-8xl">{errorStatus}</h1>
        <p>{errorMessage}</p>
      </>
    );
  }

  function UnknownError() {
    return (
      <>
        <h1 className="m-4 text-8xl">{errorStatus}</h1>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
      </>
    );
  }

  return errorStatus < 500 ? (
    <div id="error-page" className="flex w-full flex-col items-center justify-center">
      <DetailedError />
    </div>
  ) : (
    <div id="error-page" className="flex w-full flex-col items-center justify-center">
      <UnknownError />
    </div>
  );
};

export default ErrorPage;
