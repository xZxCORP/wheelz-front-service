export const ExplanationSection = () => {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Bloc texte */}
        <div>
          <h3 className="text-3xl font-bold text-primary-900 mb-6">
            Un rapport complet à portée de clic
          </h3>
          <p className="text-gray-700 text-lg mb-4">
            Grâce à WheelZ, accédez à toutes les informations essentielles d’un véhicule :
            historique, statut légal, dommages, spécifications et plus encore. Le tout présenté de
            manière claire et fiable.
          </p>
          <p className="text-gray-600">
            Ce rapport détaillé vous permet de prendre des décisions éclairées, que vous soyez
            acheteur, vendeur ou professionnel de l’automobile.
          </p>
        </div>

        {/* Bloc image */}
        <div className="w-full">
          <img
            src={'/wheelz-report.png'}
            alt="Aperçu du rapport Peugeot 208"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};
