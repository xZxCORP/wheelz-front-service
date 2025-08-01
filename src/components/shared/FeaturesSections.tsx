import { FaCheckCircle } from 'react-icons/fa';

const features = [
  {
    title: 'Historique vérifié',
    desc: "Accédez à l'historique complet du véhicule via la chain.",
  },
  {
    title: 'Aucune surprise',
    desc: 'Plus de confiance lors de l’achat ou la vente d’un véhicule.',
  },
  {
    title: 'Connexion simple',
    desc: 'Un compte, un accès rapide, sécurisé et fluide à toutes les infos.',
  },
  {
    title: 'Données à jour',
    desc: 'Les informations techniques et administratives sont synchronisées en temps réel.',
  },
];

export const FeaturesSection = () => {
  return (
    <section className="w-full bg-white py-12 px-6 shadow-inner">
      <h3 className="text-3xl font-bold text-center mb-10 text-primary-900">
        Pourquoi choisir WheelZ ?
      </h3>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-xl shadow-md border border-gray-100 transform transition duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:border-green-500 hover:bg-green-50"
          >
            <div className="flex items-center gap-2 mb-3">
              <FaCheckCircle className="text-green-600 text-lg" />
              <h4 className="text-lg font-bold text-green-800">{feature.title}</h4>
            </div>
            <p className="text-gray-700 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
