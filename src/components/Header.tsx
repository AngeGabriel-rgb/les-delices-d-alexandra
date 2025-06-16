
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
        <div className="text-2xl font-bold bg-gradient-to-r from-kre-violet to-kre-pink-bright bg-clip-text text-transparent">
          LES DELICES D'ALEXANDRA 
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-kre-violet transition-colors">
            Accueil
          </button>
          <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-kre-violet transition-colors">
            À propos
          </button>
          <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-kre-violet transition-colors">
            Galerie
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-kre-violet transition-colors">
            Contact
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
