import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (path: string, sectionId?: string) => {
    if (location.pathname !== path) {
      // Navigate to the page first
      navigate(path);
      setTimeout(() => {
        if (sectionId) {
          const element = document.getElementById(sectionId);
          element?.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // small delay to wait for page render
    } else {
      // Already on the page
      if (sectionId) {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary-900">Vipas Academy</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => goToSection('/', 'home')} className="text-gray-700 hover:text-primary-600 transition-colors duration-200">Home</button>
            <button onClick={() => goToSection('/', 'about')} className="text-gray-700 hover:text-primary-600 transition-colors duration-200">About</button>
            <Link to="/courses" className="text-gray-700 hover:text-primary-600 transition-colors duration-200">Courses</Link>
            <button onClick={() => goToSection('/', 'why-choose-us')} className="text-gray-700 hover:text-primary-600 transition-colors duration-200">Why Choose Us</button>
            <button onClick={() => goToSection('/', 'contact')} className="bg-primary-600 text-white px-7 py-2 rounded-lg hover:bg-secondary-900 transition-colors duration-200">Contact</button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => goToSection('/', 'home')} className="text-gray-700 hover:text-primary-600 transition-colors duration-200 text-left">Home</button>
              <button onClick={() => goToSection('/', 'about')} className="text-gray-700 hover:text-primary-600 transition-colors duration-200 text-left">About</button>
              <Link to="/courses" className="text-gray-700 hover:text-primary-600 transition-colors duration-200 text-left">Courses</Link>
              <button onClick={() => goToSection('/', 'why-choose-us')} className="text-gray-700 hover:text-primary-600 transition-colors duration-200 text-left">Why Choose Us</button>
              <Link to="/success-stories" className="text-gray-700 hover:text-primary-600 transition-colors duration-200 text-left">Success Stories</Link>
              <button onClick={() => goToSection('/', 'contact')} className="bg-primary-900 text-white px-4 py-2 rounded-lg hover:bg-secondary-900 transition-colors duration-200 text-left w-fit">Contact</button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
