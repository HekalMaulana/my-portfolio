import React from 'react';

function About({ darkMode }) {
  return (
    <section
      id="about"
      className={`container mx-auto py-32 rounded-lg shadow-2xl ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <h2 className={`text-5xl font-bold mb-12 text-center ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
        About Me
      </h2>
      <p className={`text-xl leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        I am deeply passionate about Artificial Intelligence and aspire to contribute meaningfully to the field.
        Currently, I immerse myself in understanding Machine Learning algorithms and exploring their diverse applications.
      </p>
      <p className={`text-xl leading-relaxed mt-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        In parallel, I am expanding my expertise in backend web development using Node.js, with the goal of creating robust and scalable applications.
      </p>
    </section>
  );
}

export default About;
