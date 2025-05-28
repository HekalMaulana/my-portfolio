import React from 'react';

function Education({ darkMode }) {
  return (
    <section
      id="education"
      className={`container mx-auto py-32 rounded-lg shadow-2xl ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <h2 className={`text-5xl font-bold mb-12 text-center ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
        Education
      </h2>
      <div className={`p-8 rounded-lg shadow-md ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
        <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-blue-200' : 'text-blue-500'}`}>
          Politeknik Negeri Banjarmasin
        </h3>
        <p className={`text-gray-500 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Associate Degree in Electrical Engineering
        </p>
        <p className={`text-gray-500 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Smart City Information Systems
        </p>
      </div>
      <div className={`mt-8 p-8 rounded-lg shadow-md ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
        <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-blue-200' : 'text-blue-500'}`}>
          SMK Telkom Kota Banjarbaru
        </h3>
        <p className={`text-gray-500 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Vocational High School
        </p>
        <p className={`text-gray-500 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Computer and Network Engineering
        </p>
      </div>
    </section>
  );
}

export default Education;
