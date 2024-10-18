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
      <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="email" className="text-sm font-bold text-gray-600 block">
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
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter your email"
            />
            {formState.errors.email && <div>Email is invalid</div>}
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-bold text-gray-600 block">
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
              className="w-full p-2 border border-gray-300 rounded mt-1"
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
                className="h-4 w-4 text-blue-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                Remember me
              </label>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-orange-500 hover:bg-orange-700 rounded-md text-white text-sm"
            >
              Se connecter
            </button>
          </div>
          <div className="text-sm">
            <a href="#" onClick={onSwitchToRegister} className="font-medium text-orange-400">
              Je n'ai pas de compte - S'inscrire
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
