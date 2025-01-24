import { RegisterStore } from '../../../../stores/useRegisterStore';
import { H2 } from '../../../shared/typography/Typography';

export const RegisterRecapValues = () => {
  const { companyForm, personalInfosForm } = RegisterStore.use();

  return (
    <div className="flex flex-col items-center gap-6">
      <img className="h-auto w-32" src="/animated_icons/search.gif" alt="Search" />
      <div className="flex flex-col gap-4">
        {personalInfosForm && (
          <div className="flex flex-col gap-2">
            <H2>Votre compte</H2>
            <div className="flex flex-col gap-2">
              <p>Nom: {personalInfosForm.lastname}</p>
              <p>Prénom: {personalInfosForm.firstname}</p>
              <p>Email: {personalInfosForm.email}</p>
            </div>
          </div>
        )}
        {companyForm && (
          <div className="flex flex-col gap-2">
            <H2>Votre entreprise</H2>
            <div className="flex flex-col gap-2">
              <p>Nom: {companyForm.name}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
