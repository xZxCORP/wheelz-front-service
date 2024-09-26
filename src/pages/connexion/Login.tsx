import { useForm } from 'react-hook-form';

//interfaces
interface FormData {
  email: string;
  password: string;
  username: string;
  remember: boolean;
}

const Login = () => {
  const { register, handleSubmit, formState } = useForm<FormData>({
    mode: 'onChange',
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto">
        <div className="text-center font-medium text-xl">Wheelz</div>
        <div className="text-3xl font-bold text-gray-900 mt-2 text-center">Se connecter</div>
      </div>
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
              style={{ borderColor: formState.errors.email ? 'red' : '' }}
              name="password"
              type="password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter your password"
            />
            {formState.errors.password && <div>Password is required</div>}
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex item-center">
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
            <div>
              <a href="" className="font-medium  text-sm text-blue-500">
                Forgot Password?
              </a>
            </div>
          </div>
          <div>
            <button type="submit" className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;