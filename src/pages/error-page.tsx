import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

export default function ErrorPage() {
  const error: unknown = useRouteError();
  let errorStatus: number = 500;
  let errorMessage: string = "";

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
        <h1 className='text-8xl m-4'>{errorStatus}</h1>
        <p>{errorMessage}</p>
      </>
    );
  }

  function UnknownError() {
    return (
      <>
        <h1 className='text-8xl m-4'>{errorStatus}</h1>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
      </>
    );
  }

  if (errorStatus < 500) {
    return (
      <div id='error-page' className='w-full flex flex-col justify-center items-center'>
        <DetailedError />
      </div>
    );
  }
  else {
    return (
      <div id='error-page' className='w-full flex flex-col justify-center items-center'>
        <UnknownError />
      </div>
    );
  }
}
