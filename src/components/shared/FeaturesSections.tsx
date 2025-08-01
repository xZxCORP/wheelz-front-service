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
    <section className="w-full bg-white px-6 py-12 shadow-inner">
      <h3 className="mb-10 text-center text-3xl font-bold text-primary-900">
        Pourquoi choisir WheelZ ?
      </h3>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-100 bg-white p-6 shadow-md transition duration-300 ease-in-out hover:scale-105 hover:border-green-500 hover:bg-green-50 hover:shadow-xl"
          >
            <div className="mb-3 flex items-center gap-2">
              <FaCheckCircle className="text-lg text-green-600" />
              <h4 className="text-lg font-bold text-green-800">{feature.title}</h4>
            </div>
            <p className="text-sm text-gray-700">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
