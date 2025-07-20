import React, {useState} from 'react'
import { Bars3Icon, XMarkIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-amber-50/60 dark:bg-gray-800/60 fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#about" className="text-xl font-bold dark:text-gray-100">Michael Bracey</a>

        <div className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-100">
            <a href="#about" className="hover:dark:text-white hover:text-blue-600 hover:underline inline-flex items-center">About</a>
            <a href="#projects" className="hover:dark:text-white hover:text-blue-600 hover:underline inline-flex items-center">Projects</a>
            <a href="https://github.com/Mbrace1" target="_blank" rel="noopener noreferrer" 
            className="hover:dark:text-white hover:text-blue-600 hover:underline inline-flex items-center">
                <span>GitHub</span>
                <ArrowTopRightOnSquareIcon className="size-5 ml-2" />
            </a>
            <a href="https://linkedin.com/in/michael-bracey24" target="_blank" rel="noopener noreferrer" 
            className="hover:dark:text-white hover:text-blue-600 hover:underline inline-flex items-center">
                <span>LinkedIn</span>
                <ArrowTopRightOnSquareIcon className="size-5 ml-2" />
            </a>
            <ThemeToggle/>
        </div>

        <button className="md:hidden text-gray-800" onClick={toggleMenu}>
          {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-amber-100 dark:bg-gray-800 dark:text-gray-100 border-t px-4 pt-2 pb-4 space-y-3 flex flex-col">
            <div className=''>
                <ThemeToggle/>
            </div>
            <a href="#about" onClick={closeMenu} className="hover:dark:text-white hover:text-blue-600 hover:underline inline-flex items-center">About</a>
            <a href="#projects" onClick={closeMenu} className="hover:dark:text-white hover:text-blue-600 hover:underline inline-flex items-center">Projects</a>
            <a href="https://github.com/Mbrace1" target="_blank" rel="noopener noreferrer" 
            className="hover:dark:text-white hover:text-blue-600 hover:underline inline-flex items-center">
                <span>GitHub</span>
                <ArrowTopRightOnSquareIcon className="size-5 ml-2" />
            </a>
            <a href="https://linkedin.com/in/michael-bracey24" target="_blank" rel="noopener noreferrer" 
            className="hover:dark:text-white hover:text-blue-600 hover:underline inline-flex items-center">
                <span>LinkedIn</span>
                <ArrowTopRightOnSquareIcon className="size-5 ml-2" />
            </a>
        </div>
      )}
    </nav>
  );
}


export default Navbar