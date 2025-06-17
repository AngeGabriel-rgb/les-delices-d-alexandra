
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div 
          onClick={() => window.location.reload()}
          className="text-2xl font-bold bg-gradient-to-r from-kre-violet to-kre-pink-bright bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity duration-200"
        >
          LES DELICES D'ALEXANDRA 
        </div>
        {/* Desktop Navigation */}
  <nav className="hidden md:flex space-x-8">
  <button 
    onClick={() => scrollToSection('home')} 
    className="relative text-gray-700 hover:text-kre-violet transition-colors duration-300 group py-2"
  >
    Accueil
    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-kre-violet to-kre-pink-bright transition-all duration-300 ease-out group-hover:w-full"></div>
  </button>
  
  <button 
    onClick={() => scrollToSection('about')} 
    className="relative text-gray-700 hover:text-kre-violet transition-colors duration-300 group py-2"
  >
    À propos
    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-kre-violet to-kre-pink-bright transition-all duration-300 ease-out group-hover:w-full"></div>
  </button>
  
  <button 
    onClick={() => scrollToSection('gallery')} 
    className="relative text-gray-700 hover:text-kre-violet transition-colors duration-300 group py-2"
  >
    Galerie
    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-kre-violet to-kre-pink-bright transition-all duration-300 ease-out group-hover:w-full"></div>
  </button>
  
  <button 
    onClick={() => scrollToSection('contact')} 
    className="relative text-gray-700 hover:text-kre-violet transition-colors duration-300 group py-2"
  >
    Contact
    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-kre-violet to-kre-pink-bright transition-all duration-300 ease-out group-hover:w-full"></div>
  </button>
</nav>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-kre-violet transition-colors text-left">
              Accueil
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-kre-violet transition-colors text-left">
              À propos
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-kre-violet transition-colors text-left">
              Galerie
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-kre-violet transition-colors text-left">
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
