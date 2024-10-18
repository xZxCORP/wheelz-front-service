import { useForm } from 'react-hook-form';

//interfaces
interface FormData {
  email: string;
  password: string;
  username: string;
  remember: boolean;
}

type PersonalInfosFormProps = {
  onSwitchToLogin: () => void;
};

export const PersonalInfosForm = ({ onSwitchToLogin }: PersonalInfosFormProps) => {
  const { register, handleSubmit, formState } = useForm<FormData>({
    mode: 'onChange',
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Vos infos personnelles</h2>
      <div className="flex flex-col gap-2">{
        <div>
          
        <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="username" className="text-sm font-bold text-gray-600 block">
                Nom
              </label>
              <input
                {...register('username', {
                  required: true,
                  maxLength: 50,
                })}
                style={{ borderColor: formState.errors.username ? 'red' : '' }}
                name="username"
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Nom"
              />
            </div>
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
              <div className="text-sm mt-4">
                <a href="#" onClick={onSwitchToLogin} className="font-medium text-orange-400">
                  J'ai déjà un compte - Se connecter ?
                </a>
              </div>
            </div>
            <div>
              <button type="submit" className="w-full py-2 px-4 bg-orange-500 hover:bg-orange-700 rounded-md text-white text-sm">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>}</div>
    </div>
  );
};
