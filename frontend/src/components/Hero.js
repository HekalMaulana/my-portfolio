import React from 'react';

function Hero({ darkMode }) {
  return (
    <section
      id="hero"
      className={`container mx-auto py-48 text-center rounded-lg shadow-2xl ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <img
        src="https://via.placeholder.com/150"
        alt="Profile Picture"
        className="rounded-full mx-auto mb-8 border-8 border-blue-500 shadow-md"
      />
      <h1 className={`text-6xl font-bold mb-8 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
        Muhammad Hekal Maulana
      </h1>
      <p className={`text-2xl mb-12 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        A student based in Banjarbaru, South Kalimantan, with a strong interest
        in becoming a researcher in Artificial Intelligence.
      </p>
      <p className={`text-2xl mb-12 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        Currently deepening my knowledge in Machine Learning and web development,
        particularly backend with Node.js.
      </p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-lg">
        Contact Me
      </button>
    </section>
  );
}

export default Hero;
