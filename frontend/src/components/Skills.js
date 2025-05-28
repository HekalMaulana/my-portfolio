import React from 'react';

function Skills({ darkMode }) {
  return (
    <section
      id="skills"
      className={`container mx-auto py-32 rounded-lg shadow-2xl ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <h2 className={`text-5xl font-bold mb-12 text-center ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} shadow-md`}>
          <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-blue-200' : 'text-blue-500'}`}>
            General
          </h3>
          <ul className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <li className="mb-2">Machine Learning</li>
            <li>Web Development</li>
          </ul>
        </div>
        <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} shadow-md`}>
          <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-blue-200' : 'text-blue-500'}`}>
            Languages
          </h3>
          <ul className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <li className="mb-2">Python</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} shadow-md`}>
          <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-blue-200' : 'text-blue-500'}`}>
            Frameworks
          </h3>
          <ul className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <li className="mb-2">TensorFlow</li>
            <li className="mb-2">PyTorch</li>
            <li className="mb-2">Pandas</li>
            <li className="mb-2">NumPy</li>
            <li>Scikit-learn</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
