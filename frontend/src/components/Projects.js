import React from 'react';

function Projects({ darkMode }) {
  return (
    <section
      id="projects"
      className={`container mx-auto py-32 rounded-lg shadow-2xl ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <h2 className={`text-5xl font-bold mb-12 text-center ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} shadow-md`}>
          <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-blue-200' : 'text-blue-500'}`}>Project 1</h3>
          <p className={`text-gray-500 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Short description of the project.
          </p>
          <p className={`text-sm mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Technologies: React, Node.js, ...
          </p>
          <a href="#" className="text-blue-500 hover:underline mt-4 inline-block">
            View Project
          </a>
        </div>
        <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} shadow-md`}>
          <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-blue-200' : 'text-blue-500'}`}>Project 2</h3>
          <p className={`text-gray-500 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Short description of the project.
          </p>
          <p className={`text-sm mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Technologies: Python, Machine Learning, ...
          </p>
          <a href="#" className="text-blue-500 hover:underline mt-4 inline-block">
            View Project
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
