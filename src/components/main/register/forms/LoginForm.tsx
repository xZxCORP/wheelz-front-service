import { useForm } from 'react-hook-form';

interface FormData {
  email: string;
  password: string;
  remember: boolean;
}

type LoginFormProps = {
  onSwitchToRegister: () => void;
};

export const LoginForm = ({ onSwitchToRegister }: LoginFormProps) => {
  const { register, handleSubmit, formState } = useForm<FormData>({
    mode: 'onChange',
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Se connecter</h2>
      <div className="mx-auto mt-4 w-full max-w-md border border-gray-300 bg-white p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-gray-600">
              Email
            </label>
            <input
              {...register('email', {
                required: true,
                maxLength: 50,
              })}
              style={{ borderColor: formState.errors.email ? 'red' : '' }}
              name="email"
              type="text"
              className="mt-1 w-full rounded border border-gray-300 p-2"
              placeholder="Enter your email"
            />
            {formState.errors.email && <div>Email is invalid</div>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-bold text-gray-600">
              Password
            </label>
            <input
              {...register('password', {
                required: true,
                minLength: 6,
                maxLength: 20,
              })}
              style={{ borderColor: formState.errors.password ? 'red' : '' }}
              name="password"
              type="password"
              className="mt-1 w-full rounded border border-gray-300 p-2"
              placeholder="Enter your password"
            />
            {formState.errors.password && <div>Password is required</div>}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                {...register('remember')}
                name="remember"
                type="checkbox"
                className="size-4 rounded text-blue-300"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                Remember me
              </label>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full rounded-md bg-orange-500 px-4 py-2 text-sm text-white hover:bg-orange-700"
            >
              Se connecter
            </button>
          </div>
          <div className="text-sm">
            <a href="#" onClick={onSwitchToRegister} className="font-medium text-orange-400">
              Je n&apos;ai pas de compte - S&apos;inscrire
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
