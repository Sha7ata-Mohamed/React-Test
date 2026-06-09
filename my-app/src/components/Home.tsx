import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={handleClick}>You pressed me {count} times</button>
    </>
  );
}

function CounterDown() {
  const [down, setDown] = useState(100);

  function handleDown() {
    setDown(down - 1);
  }

  return (
    <>
      <button onClick={handleDown}>You pressed me {down} times</button>
    </>
  );
}

function Home() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      <section className="bg-black rounded-xl shadow-md p-8 max-w-md w-full">
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

export { Home, Counter, CounterDown };
