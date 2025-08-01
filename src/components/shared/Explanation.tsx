export const ExplanationSection = () => {
  return (
    <section className="w-full bg-white px-6 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Bloc texte */}
        <div>
          <h3 className="mb-6 text-3xl font-bold text-primary-900">
            Un rapport complet à portée de clic
          </h3>
          <p className="mb-4 text-lg text-gray-700">
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
            className="h-auto w-full rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};
