import React, {useState} from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white fixed top-0 left-0 right-0 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#about" className="text-xl font-bold">Michael Bracey</a>

        <div className="hidden md:flex space-x-6 text-gray-700">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="https://github.com/Mbrace1" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">GitHub</a>
            <a href="https://linkedin.com/in/michael-bracey24" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">LinkedIn</a>
        </div>

        <button className="md:hidden text-gray-800" onClick={toggleMenu}>
          {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 pb-4 space-y-3 text-gray-700">
          <a href="#about" onClick={closeMenu} className="block">About</a>
          <a href="#projects" onClick={closeMenu} className="block">Projects</a>
          <a href="https://github.com/Mbrace1" target="_blank" rel="noopener noreferrer" className="block">GitHub</a>
          <a href="https://linkedin.com/in/michael-bracey24" target="_blank" rel="noopener noreferrer" className="block">LinkedIn</a>
        </div>
      )}
    </nav>
  );
}


export default Navbar