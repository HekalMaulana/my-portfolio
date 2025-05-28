import React from 'react';

function Navbar({ darkMode }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className={`text-2xl font-bold ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
          Muhammad Hekal Maulana
        </a>
        <div className="space-x-6">
          <button
            onClick={() => scrollToSection('hero')}
            className={`hover:text-blue-500 font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className={`hover:text-blue-500 font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className={`hover:text-blue-500 font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className={`hover:text-blue-500 font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('education')}
            className={`hover:text-blue-500 font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
          >
            Education
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className={`hover:text-blue-500 font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={`hover:text-blue-500 font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
