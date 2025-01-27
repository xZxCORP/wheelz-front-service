import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaBuilding, FaFileInvoice, FaGlobe, FaIndustry, FaUser, FaUsers } from 'react-icons/fa6';
import { MdCategory, MdEmail } from 'react-icons/md';

import { RegisterStore } from '../../../../stores/useRegisterStore';
import { companyLabels } from '../../../../types/companyLabels';
import { H2 } from '../../../shared/typography/Typography';

export const RegisterRecapValues = () => {
  const { companyForm, personalInfosForm } = RegisterStore.use();

  return (
    <div className="flex flex-col items-center gap-6">
      <img className="h-auto w-32" src="/animated_icons/search.gif" alt="Search" />
      <div className="flex flex-col gap-8">
        {personalInfosForm && (
          <div className="flex flex-col gap-2">
            <H2>Votre compte</H2>
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center space-x-4">
                <FaUser className="text-2xl text-primary-500" />
                <div>
                  <h4 className="text-sm font-medium text-gray-600">Nom</h4>
                  <p className="text-base font-semibold text-gray-800">
                    {personalInfosForm.lastname}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaUser className="text-2xl text-primary-500" />
                <div>
                  <h4 className="text-sm font-medium text-gray-600">Prénom</h4>
                  <p className="text-base font-semibold text-gray-800">
                    {personalInfosForm.firstname}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MdEmail className="text-2xl text-primary-500" />
                <div>
                  <h4 className="text-sm font-medium text-gray-600">Email</h4>
                  <p className="text-base font-semibold text-gray-800">{personalInfosForm.email}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {companyForm && (
          <div className="flex flex-col gap-2">
            <H2>Votre entreprise</H2>
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center space-x-4">
                <FaBuilding className="text-2xl text-primary-500" />
                <div>
                  <h4 className="text-sm font-medium text-gray-600">{companyLabels.name}</h4>
                  <p className="text-base font-semibold text-gray-800">{companyForm.name}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaFileInvoice className="text-2xl text-primary-500" />
                <div>
                  <h4 className="text-sm font-medium text-gray-600">{companyLabels.vatNumber}</h4>
                  <p className="text-base font-semibold text-gray-800">{companyForm.vatNumber}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-2xl text-primary-500" />
                <div>
                  <h4 className="text-sm font-medium text-gray-600">
                    {companyLabels.headquartersAddress}
                  </h4>
                  <p className="text-base font-semibold text-gray-800">
                    {companyForm.headquartersAddress}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaGlobe className="text-2xl text-primary-500" />
                <div>
                  <h4 className="text-sm font-medium text-gray-600">{companyLabels.country}</h4>
                  <p className="text-base font-semibold text-gray-800">{companyForm.country}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaIndustry className="text-2xl text-primary-500" />
                <div>
                  <h4 className="text-sm font-medium text-gray-600">{companyLabels.companyType}</h4>
                  <p className="text-base font-semibold text-gray-800">{companyForm.companyType}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MdCategory className="text-2xl text-primary-500" />
                <div>
                  <h4 className="text-sm font-medium text-gray-600">
                    {companyLabels.companySector}
                  </h4>
                  <p className="text-base font-semibold text-gray-800">
                    {companyForm.companySector}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaUsers className="text-2xl text-primary-500" />
                <div>
                  <h4 className="text-sm font-medium text-gray-600">{companyLabels.companySize}</h4>
                  <p className="text-base font-semibold text-gray-800">{companyForm.companySize}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
