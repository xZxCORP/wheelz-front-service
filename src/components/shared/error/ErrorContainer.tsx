import { FaTriangleExclamation } from 'react-icons/fa6';
interface Props {
  errorCode: number | string;
  errorMessage: string;
}
export const ErrorContainer = ({ errorCode, errorMessage }: Props) => {
  return (
    <div className="w-full max-w-md rounded-lg p-8">
      <div className="flex items-center justify-center">
        <FaTriangleExclamation className="size-16 text-error-600" />
      </div>
      <h1 className="mt-4 text-center text-3xl font-bold">Oops!</h1>
      <p className="mt-2 text-center text-xl font-semibold">Erreur {errorCode}</p>
      <p className="mt-4 text-center">{errorMessage}</p>
    </div>
  );
};
