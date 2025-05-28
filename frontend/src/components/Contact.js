import React from 'react';

function Contact({ darkMode }) {
  return (
    <section
      id="contact"
      className={`container mx-auto py-32 rounded-lg shadow-2xl ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <h2 className={`text-5xl font-bold mb-12 text-center ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
        Contact
      </h2>
      <div className="flex flex-col items-center">
        <a
          href="mailto:hekalmaulanaa@gmail.com"
          className={`text-blue-500 hover:underline mb-4 flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
        >
          <i className="ri-mail-line ri-2x mr-2"></i>
          hekalmaulanaa@gmail.com
        </a>
        <a
          href="https://wa.me/628115582823"
          className={`text-blue-500 hover:underline mb-4 flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
        >
          <i className="ri-whatsapp-line ri-2x mr-2"></i>
          08115582823
        </a>
        <a
          href="https://www.instagram.com/hekalmaulanaa_"
          className={`text-blue-500 hover:underline mb-4 flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
        >
          <i className="ri-instagram-line ri-2x mr-2"></i>
          hekalmaulanaa_
        </a>
        <a
          href="https://www.linkedin.com/in/muhammad-hekal-maulana"
          className={`text-blue-500 hover:underline flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
        >
          <i className="ri-linkedin-line ri-2x mr-2"></i>
          www.linkedin.com/in/muhammad-hekal-maulana
        </a>
      </div>
    </section>
  );
}

export default Contact;
