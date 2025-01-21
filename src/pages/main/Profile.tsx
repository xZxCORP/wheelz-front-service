import { useAuthStore } from '../../stores/useAuthStore';

export const Profile = () => {
  const { user } = useAuthStore();

  if (!user) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold">Vous nêtes pas connecté.</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-6 text-3xl font-bold">
        Profil de {user.firstname} {user.lastname}
      </h1>

      <div className="rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-xl font-semibold">Informations personnelles</h2>
        <ul className="space-y-2">
          <li>
            <strong>Prénom :</strong> {user.firstname}
          </li>
          <li>
            <strong>Nom :</strong> {user.lastname}
          </li>
          <li>
            <strong>Email :</strong> {user.email}
          </li>
        </ul>
      </div>
    </div>
  );
};
