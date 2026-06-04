function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <section className="bg-white rounded-xl shadow-md p-8 max-w-md w-full">
        <div className="text-center">
          <svg
            className="w-12 h-12 mx-auto text-blue-600"
            role="presentation"
            aria-hidden="true"
          >
            <use href="/icons.svg#home-icon"></use>
          </svg>

          <h1 className="mt-4 text-4xl font-bold text-gray-900">LOL</h1>

          <h2 className="mt-2 text-xl text-gray-600">
            Welcome to the Home Page
          </h2>
        </div>
      </section>
    </main>
  );
}

function Card() {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-900">React Card</h2>

      <p className="mt-2 text-gray-600">
        This card is styled using Tailwind CSS.
      </p>

      <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
        Learn More
      </button>
    </div>
  );
}

export { Card, Home };
