import React from 'react';

function Experience({ darkMode }) {
  return (
    <section
      id="experience"
      className={`container mx-auto py-32 rounded-lg shadow-2xl ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <h2 className={`text-5xl font-bold mb-12 text-center ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
        Experience
      </h2>
      <div className={`p-8 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} shadow-md`}>
        <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-blue-200' : 'text-blue-500'}`}>
          Independent Study Program (Kampus Merdeka)
        </h3>
        <p className={`text-gray-500 mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Bangkit 2024 - Machine Learning
        </p>
        <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Focused on learning and applying various machine learning techniques, including deep learning and natural language processing.
        </p>
      </div>
    </section>
  );
}

export default Experience;
